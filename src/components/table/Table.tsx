import { typedMemo } from '@/helpers/typedMemo';
import { Scroll } from '@/my-ui-core';
import { ObjectMock } from '@/types';
import { ComponentType, IComponent } from '@/types/props';
import { UIColors } from '@/types/ui';
import {
  Cell,
  HeaderGroup,
  HeaderPropGetter,
  TableState,
  useAsyncDebounce,
  useFlexLayout,
  useResizeColumns,
  useRowSelect,
  useSortBy,
  useTable,
  UseTableRowProps
} from '@my-ui/react-table';
import classNames from 'classnames';
import { ReactNode, useEffect, useRef, useState } from 'react';
import selectionHook from './selectionHook';
import styles from './Table.module.scss';
import TableCell, { TableCellProps } from './TableCell';
import TableHead from './TableHead';
import TableRow from './TableRow';
import { getMyUIPrefix } from '@/configs';

// This interface used for react-table useSortBy hook
export interface Column<T extends ObjectMock> extends HeaderGroup<T> {
  isSorted: boolean;
  isSortedDesc: boolean;
  disableSortBy: boolean;
  getSortByToggleProps: () => HeaderPropGetter<T>;
  isResizing: boolean;
  getResizerProps: () => void;
}

export interface Row<T extends ObjectMock> extends UseTableRowProps<T> {
  isSelected?: boolean;
}

export interface State<T extends ObjectMock> extends TableState<T> {
  sortBy: {
    desc?: boolean;
    id?: string;
  };
}

export interface TableAction<T> {
  component: React.ComponentType<{ onClick?: (...args: any[]) => void }>;
  onClick: (column: T, ...onClickEvent: any[]) => void;
  props: ObjectMock;
}
export interface TableProps<T extends ObjectMock> extends IComponent {
  component?: ComponentType;
  data?: T[];
  columns?: ({
    Header: string;
    accessor: string;
    disableSortBy?: boolean;
    sortingId?: string | number;
  } & CustomColumnProps)[];
  color?: UIColors;
  fetch?: (state: State<T>) => any;
  gridLayout?: boolean;
  isWithSelection?: boolean;
  absoluteLayout?: boolean;
  blockLayout?: boolean;
  isResizing?: boolean;
  theadComponent?: ComponentType;
  tbodyComponent?: ComponentType;
  actions?: TableAction<T>[];
}

interface CustomColumnProps {
  align?: TableCellProps['align'];
  maxWidth?: string | number;
  dataMaxWidth?: string | number;
  renderColumn?(value: ReactNode): ReactNode;
}

export interface CellType<T extends object = {}> extends Cell<T, any> {
  column: Cell<T, any>['column'] & CustomColumnProps;
}

const Table = <T extends ObjectMock>({
  data,
  columns,
  color,
  fetch,
  component: Component = 'table',
  isResizing,
  theadComponent: THeadComponent = 'thead',
  tbodyComponent: TBodyComponent = 'tbody',
  isWithSelection = true,
  actions
}: TableProps<T>) => {
  const tableHeadRef = useRef<HTMLElement>(null);

  const [tableHeadWidths, setTableHeadWidths] = useState([]);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow, state } = useTable<T>(
    {
      // @ts-ignore Ignoring because react-table doesn't provide string type for maxWidth
      columns,
      data,

      // @ts-ignore Ignoring because react-table doesn't provide automatic type detection for sorting
      manualSortBy: true
    },
    useSortBy,
    ...(isResizing ? [useFlexLayout, useResizeColumns] : []),
    useRowSelect,
    ...(isWithSelection ? [selectionHook] : [])
  );

  const typedState = state as State<T>;

  const onFetchDataDebounced = useAsyncDebounce(fetch, 100);

  useEffect(() => {
    setTableHeadWidths(Object.values(tableHeadRef.current.querySelectorAll('th')).map((th) => th.clientWidth));
  }, [columns, data]);

  useEffect(() => {
    const transformedState = { ...typedState };

    if (transformedState.sortBy && transformedState.sortBy[0]) {
      const sortingId = columns.find((c) => c.accessor === transformedState.sortBy[0].id)?.sortingId;

      transformedState.sortBy = {
        id: sortingId || transformedState.sortBy[0].id,
        desc: transformedState.sortBy[0].desc
      };
    } else transformedState.sortBy = null;

    onFetchDataDebounced(transformedState);
  }, [onFetchDataDebounced, typedState.sortBy]);

  if (!tableHeadWidths.length && tableHeadRef.current) return null;

  return (
    <Scroll height={500} className={classNames(styles.TableScroll, `${getMyUIPrefix()}-TableScroll`)}>
      <Component
        {...getTableProps()}
        className={classNames(styles.TableContainer, `${getMyUIPrefix()}-TableContainer`, {
          [styles['TableContainer--withSelection']]: isWithSelection,
          [styles['TableContainer--ready']]: tableHeadWidths.length
        })}>
        {/* @ts-ignore Ignoring typescript cause for automatic component they're error related with ref prop */}
        <THeadComponent className={classNames(styles.TableHead, `${getMyUIPrefix()}-TableHead`)} ref={tableHeadRef}>
          {headerGroups.map((headerGroup) => (
            <TableRow {...headerGroup.getHeaderGroupProps()} color={color}>
              {headerGroup.headers.map((column: Column<T>, index) => (
                <TableHead
                  data-column-index={index}
                  direction={column.isSortedDesc ? 'desc' : 'asc'}
                  selectedDirection={column.isSorted}
                  hideSortIcon={column.disableSortBy}
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  color={color}
                  style={{
                    ...column.getHeaderProps(column.getSortByToggleProps()).style,
                    ...(typeof column.maxWidth === 'string' ? { width: column.maxWidth } : {})
                  }}>
                  <span className={`${getMyUIPrefix()}-TableHeadSpan`}>{column.render('Header')}</span>

                  {/* {isResizing ? (
                  <div
                    {...column.getResizerProps()}
                    style={{ width: '4px', height: '20px', backgroundColor: 'red' }}
                    className={`resizer ${column.isResizing ? 'isResizing' : ''}`}
                  />
                ) : null} */}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </THeadComponent>
        <TBodyComponent
          {...getTableBodyProps()}
          className={classNames(styles.TableBody, `${getMyUIPrefix()}-TableBody`)}>
          {rows.map((row: Row<T>, index) => {
            prepareRow(row);
            return (
              <TableRow hover selected={row.isSelected} {...row.getRowProps()} color={color}>
                {row.cells.map((cell: CellType<T>, index) => {
                  return (
                    <TableCell
                      key={index}
                      style={{
                        maxWidth: cell.column.dataMaxWidth
                          ? cell.column.dataMaxWidth
                          : typeof cell.column.maxWidth === 'string' || cell.column.maxWidth < 150
                          ? cell.column.maxWidth
                          : `${tableHeadWidths[index] / 10}rem`
                      }}
                      align={cell.column.align}
                      color={color}>
                      <div className={`${getMyUIPrefix()}-TableCell`}>
                        {cell.column.renderColumn ? cell.column.renderColumn(cell.render('Cell')) : cell.render('Cell')}
                      </div>
                    </TableCell>
                  );
                })}

                {actions && (
                  <TableCell
                    {...actions}
                    color={color}
                    className={classNames(styles.ActionTableCell, `${getMyUIPrefix()}-ActionTableCell`)}>
                    {actions.map(({ component: Component, onClick, props }, index) => (
                      <Component key={index} {...props} onClick={(...args: any[]) => onClick(data[index], ...args)} />
                    ))}
                  </TableCell>
                )}
              </TableRow>
            );
          })}
        </TBodyComponent>
      </Component>
    </Scroll>
  );
};

export default typedMemo(Table);
