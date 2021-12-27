import { typedMemo } from '@/helpers/typedMemo';
import { Loader, Scroll, Typography } from '@/my-ui-core';
import { ComponentType, IComponent } from '@/types/props';
import { UIColors } from '@/types/ui';
import {
  Cell,
  CellValue,
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
import FlipMove from 'react-flip-move';
import { TextWithTooltip } from '../text-with-tooltip';
import selectionHook from './selectionHook';
import styles from './Table.module.scss';
import TableCell, { TableCellProps } from './TableCell';
import TableHead from './TableHead';
import TableRow from './TableRow';

// This interface used for react-table useSortBy hook
export interface Column<T extends {}> extends HeaderGroup<T> {
  isSorted: boolean;
  isSortedDesc: boolean;
  disableSortBy: boolean;
  getSortByToggleProps: () => HeaderPropGetter<T>;
  isResizing: boolean;
  getResizerProps: () => void;
}

export interface Row<T extends {}> extends UseTableRowProps<T> {
  isSelected?: boolean;
}

export interface State<T extends {}> extends TableState<T> {
  sortBy: {
    desc?: boolean;
    id?: string;
  };
}

export interface TableAction<T> {
  component: React.ComponentType<{ onClick?: (...args: any[]) => void }>;
  onClick: (column: T, ...onClickEvent: any[]) => void;
  props: {};
  shouldShow?: (column: T) => boolean;
}
export interface TableProps<T extends {}> extends IComponent {
  component?: ComponentType;
  data?: T[];
  columns?: ({
    Header: string;
    accessor: string;
    disableSortBy?: boolean;
    sortingId?: string | number;
  } & CustomColumnProps)[];
  color?: UIColors;
  fetch?: (state: State<T>) => void;
  onSelectedColumnsChange?: (state: Row<T>[]) => void;
  checkIsRowActive?: (state: T) => boolean;
  gridLayout?: boolean;
  isWithSelection?: boolean;
  absoluteLayout?: boolean;
  blockLayout?: boolean;
  isResizing?: boolean;
  isLoading?: boolean;
  emptyValue?: string;
  height?: number | string;
  rowUniqueKey?: string;
  theadComponent?: ComponentType;
  tbodyComponent?: ComponentType;
  actions?: TableAction<T>[];
  illustrationIcon?: ReactNode;
  emptyText?: ReactNode;

  loadingRowsIds?: (number | string)[];
  loadingRowColumnProperty?: keyof T;
}

interface CustomColumnProps {
  align?: TableCellProps['align'];
  maxWidth?: string | number;
  dataMaxWidth?: string | number;
  renderColumn?(value: ReactNode, columnValue: CellValue): ReactNode;
}

export interface CellType<T extends object = {}> extends Cell<T, any> {
  column: Cell<T, any>['column'] & CustomColumnProps;
}

const Table = <T extends {}>({
  data,
  columns,
  color,
  fetch,
  component: Component = 'table',
  isResizing,
  theadComponent: THeadComponent = 'thead',
  tbodyComponent: TBodyComponent = 'tbody',
  isWithSelection = true,
  actions,
  emptyValue,
  illustrationIcon,
  emptyText,
  onSelectedColumnsChange,
  loadingRowsIds,
  loadingRowColumnProperty,
  checkIsRowActive,
  className,
  rowUniqueKey,
  isLoading,
  height
}: TableProps<T>) => {
  const tableHeadRef = useRef<HTMLElement>(null);

  const [tableHeadWidths, setTableHeadWidths] = useState([]);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow, state } = useTable<T>(
    {
      // @ts-expect-error Ignoring because react-table doesn't provide string type for maxWidth
      columns,
      data,
      manualSortBy: true,
      defaultColumn: {
        Cell: (x) => x.cell.value || emptyValue || 'N/A'
      }
    },
    useSortBy,
    ...(isResizing ? [useFlexLayout, useResizeColumns] : []),
    useRowSelect,
    ...(isWithSelection ? [selectionHook] : [])
  );

  const typedState = state as State<T> & { selectedRowIds: Record<number, boolean> };

  const onFetchDataDebounced = useAsyncDebounce(fetch, 100);

  const rootFontSize =
    Number(window.getComputedStyle(document.body).getPropertyValue('font-size').replace('px', '')) || 10;

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

  useEffect(() => {
    if (!onSelectedColumnsChange) return;

    onSelectedColumnsChange(rows.filter((row) => typedState.selectedRowIds[row.id]));
  }, [typedState.selectedRowIds]);

  if (!tableHeadWidths.length && tableHeadRef.current) return null;

  return (
    <div className={styles.TableWrapper}>
      <Scroll
        trackClassName={styles.ScrollTrack}
        thumbClassName={styles.ScrollThumb}
        className={classNames(styles.TableScroll, className)}
        height={height || 500}
        autoHeightMin={data.length ? 150 : 400}>
        <Component
          {...getTableProps()}
          className={classNames(styles.TableContainer, {
            [styles['TableContainer--withSelection']]: isWithSelection,
            [styles['TableContainer--ready']]: tableHeadWidths.length,
            [styles['Table--no-result']]: !data.length,
            [styles['Table--loading']]: isLoading
          })}>
          {/* @ts-expect-error Ignoring typescript cause for automatic component they're error related with ref prop */}
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
                    color={color}
                    style={{
                      ...column.getHeaderProps(column.getSortByToggleProps()).style,
                      ...(typeof column.maxWidth === 'string' ? { width: column.maxWidth } : {})
                    }}>
                    <span>{column.render('Header')}</span>

                    {/* {isResizing ? (
 : {})
                  }}>
                  <span>{column.render('Header')}</span>

                  {/* {isResizing ? (
>>>>>>> 2adb20b5a6cf0d4ebf52e715121c228157c69896
Resizing ? 'isResizing' : ''}`}
                  />
                ) : null} */}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </THeadComponent>

          {data.length ? (
            <TBodyComponent {...getTableBodyProps()} className={styles.TableBody}>
              <FlipMove>
                {rows.map((row: Row<T>, rowIndex: number) => {
                  prepareRow(row);

                  const isRowActive = checkIsRowActive && checkIsRowActive(data[rowIndex]);

                  const rowLoadingPropertyValue = loadingRowColumnProperty
                    ? // @ts-expect-error Ignored typescript, cause loadingRowColumnProperty should be string or number
                      (row.original[loadingRowColumnProperty] as string | number)
                    : rowIndex + 1;

                  const isLoading = loadingRowsIds.includes(rowLoadingPropertyValue);

                  const actionsContent =
                    actions &&
                    actions
                      .map(
                        ({ component: Component, onClick, props, shouldShow = () => true }, index) =>
                          shouldShow(data[rowIndex]) && (
                            <div>
                              <Component
                                key={index}
                                {...props}
                                onClick={(...args: any[]) => onClick(data[rowIndex], ...args)}
                              />
                            </div>
                          )
                      )
                      .filter((a) => a);

                  return (
                    <TableRow
                      style={{ position: 'relative', top: 0, left: 0 }}
                      isLoading={isLoading}
                      hover
                      selected={isRowActive || row.isSelected}
                      {...row.getRowProps()}
                      key={rowUniqueKey ? row.original[rowUniqueKey] : row.id}
                      color={color}>
                      {row.cells.map((cell: CellType<T>, index) => {
                        return (
                          <TableCell
                            key={index}
                            style={{
                              maxWidth: cell.column.dataMaxWidth
                                ? cell.column.dataMaxWidth
                                : typeof cell.column.maxWidth === 'string' || cell.column.maxWidth < 150
                                ? cell.column.maxWidth
                                : `${tableHeadWidths[index] / rootFontSize}rem`
                            }}
                            align={cell.column.align}
                            color={color}
                            className={classNames({
                              [styles.LastTableCell]: index === row.cells.length - 1
                            })}>
                            <TextWithTooltip disabled={!!cell.column.renderColumn}>
                              {cell.column.renderColumn
                                ? cell.column.renderColumn(cell.render('Cell'), cell.value)
                                : cell.render('Cell')}
                            </TextWithTooltip>
                          </TableCell>
                        );
                      })}

                      {actions && !isLoading && actionsContent.length ? (
                        <div
                          className={classNames(styles['ActionToolsStickyHorizontal'], 'ActionToolsStickyHorizontal')}
                          {...actions}
                          color={color}>
                          <section className={classNames(styles['ActionTools'], 'ActionTools')}>
                            <div className={classNames(styles['ActionTableCell'], 'ActionTableCell')}>
                              {actionsContent}
                            </div>
                          </section>
                        </div>
                      ) : null}
                    </TableRow>
                  );
                })}
              </FlipMove>
            </TBodyComponent>
          ) : (
            <div className={styles.IllustrationWrapper}>
              <div className={styles.Illustration}>{illustrationIcon}</div>
              <Typography component='p' variant='p4' className={styles.IllustrationText}>
                {emptyText}
              </Typography>
            </div>
          )}
        </Component>
      </Scroll>
      {isLoading && (
        <div className={styles.Loader}>
          <Loader />
        </div>
      )}
    </div>
  );
};

Table.defaultProps = {
  loadingRowsIds: []
};

export default typedMemo(Table);
