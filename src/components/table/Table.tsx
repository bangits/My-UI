import { typedMemo } from '@/helpers/typedMemo';
import { ObjectMock } from '@/types';
import { ComponentType, IComponent } from '@/types/props';
import { UIColors } from '@/types/ui';
import {
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
import { useEffect, useRef, useState } from 'react';
import selectionHook from './selectionHook';
import styles from './Table.module.scss';
import TableCell, { TableCellProps } from './TableCell';
import TableHead from './TableHead';
import TableRow from './TableRow';

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
  sortBy: [
    {
      desc?: boolean;
      id?: keyof T;
    }
  ];
}

export interface TableAction<T> {
  component: React.ComponentType<{ onClick?: (...args: any[]) => void }>;
  onClick: (column: T, ...onClickEvent: any[]) => void;
  props: ObjectMock;
}
export interface TableProps<T extends ObjectMock> extends IComponent {
  component?: ComponentType;
  data?: T[];
  columns?: {
    Header: string;
    accessor: keyof T;
    disableSortBy?: boolean;
    align?: TableCellProps['align'];
    maxWidth?: string | number;
  }[];
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
  const tableHeadRef = useRef(null);

  const [tableHeadWidths, setTableHeadWidths] = useState([]);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow, state } = useTable<T>(
    { columns, data },
    useSortBy,
    ...(isResizing ? [useFlexLayout, useResizeColumns] : []),
    useRowSelect,
    ...(isWithSelection ? [selectionHook] : [])
  );

  const typedState = state as State<T>;

  const onFetchDataDebounced = useAsyncDebounce(fetch, 100);

  useEffect(() => {
    console.log(Object.values(tableHeadRef.current.querySelectorAll('th')));

    setTableHeadWidths(Object.values(tableHeadRef.current.querySelectorAll('th')).map((th) => th.clientWidth));
  }, [columns]);

  console.log(tableHeadWidths);

  useEffect(() => {
    onFetchDataDebounced(typedState);
  }, [onFetchDataDebounced, typedState.sortBy]);

  return (
    <Component
      {...getTableProps()}
      className={classNames(styles.TableContainer, {
        [styles['TableContainer--withSelection']]: isWithSelection
      })}>
      <THeadComponent className={styles.TableHead} ref={tableHeadRef}>
        {headerGroups.map((headerGroup) => (
          <TableRow {...headerGroup.getHeaderGroupProps()} color={color}>
            {headerGroup.headers.map((column: Column<T>, index) => (
              <TableHead
                data-column-index={index}
                direction={column.isSortedDesc ? 'desc' : 'asc'}
                selectedDirection={column.isSorted}
                hideSortIcon={column.disableSortBy}
                {...column.getHeaderProps(column.getSortByToggleProps())}
                color={color}>
                <span> {column.render('Header')}</span>
                {/* We will do this part when in UI kit there will be ready resizing part */}

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
      <TBodyComponent {...getTableBodyProps()} className={styles.TableBody}>
        {rows.map((row: Row<T>, index) => {
          prepareRow(row);
          return (
            <TableRow hover selected={row.isSelected} {...row.getRowProps()} color={color}>
              {row.cells.map((cell, index) => {
                console.log(cell.column.maxWidth);
                return (
                  <TableCell
                    style={{
                      maxWidth:
                        typeof cell.column.maxWidth === 'string' || cell.column.maxWidth < 150
                          ? cell.column.maxWidth
                          : `${tableHeadWidths[index] / 10}rem`
                    }}
                    align={columns[index - 1]?.align}
                    color={color}>
                    <div>{cell.render('Cell')}</div>
                  </TableCell>
                );
              })}

              {actions && (
                <TableCell {...actions} color={color} className={styles.ActionTableCell}>
                  {actions.map(({ component: Component, onClick, props }) => (
                    <Component {...props} onClick={(...args: any[]) => onClick(data[index], ...args)} />
                  ))}
                </TableCell>
              )}
            </TableRow>
          );
        })}
      </TBodyComponent>
    </Component>
  );
};

export default typedMemo(Table);
