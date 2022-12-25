import { moveArrayElements } from '@/helpers';
import { typedMemo } from '@/helpers/typedMemo';
import { RecalculateIcon } from '@/icons';
import { Loader, Scroll, Tooltip, Typography } from '@/my-ui-core';
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
import React, { Children, ReactNode, Ref, useEffect, useMemo, useRef, useState } from 'react';
import FlipMove from 'react-flip-move';
import { ScrollProps } from '../others';
import { TextWithTooltip } from '../text-with-tooltip';
import { selectionHook, useTableColumnsDnD } from './hooks';
import styles from './Table.module.scss';
import TableCell, { TableCellProps } from './TableCell';
import TableHead, { TableHeadProps } from './TableHead';
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

export interface TableColumn extends CustomColumnProps {
  Header: string;
  accessor: string;
  disableSortBy?: boolean;
  sortingId?: string | number;
}
export interface TableProps<T extends {}> extends IComponent {
  component?: ComponentType;
  data?: T[];
  scrollProps?: ScrollProps;
  columns?: TableColumn[];
  tableFooterData?: Partial<
    Record<
      string,
      {
        tooltipText?: string;
        value: ReactNode;
        isLoading?: boolean;
        onGenerateButtonClick?: () => void;
      }
    >
  >;
  tableFooterTotalInformations?: ReactNode;
  tableFooterGenerateText?: ReactNode;
  tableFooterRegenerateText?: ReactNode;
  shouldShowtableFooterRegenerateButton?: boolean;
  color?: UIColors;
  fetch?: (state: State<T>) => void;
  onSelectedColumnsChange?: (state: Row<T>[]) => void;
  checkIsRowActive?: (state: T) => boolean;
  onColumnsChange?: (columns: TableColumn[]) => void;
  gridLayout?: boolean;
  isWithSelection?: boolean;
  absoluteLayout?: boolean;
  blockLayout?: boolean;
  isResizing?: boolean;
  isLoading?: boolean;
  hideBoxShadow?: boolean;
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
  tableContainerRef?: Ref<HTMLDivElement>;
}

interface CustomColumnProps extends TableCellProps {
  align?: TableCellProps['align'];
  headAlign?: TableHeadProps['align'];
  maxWidth?: string | number;
  dataMaxWidth?: string | number;
  renderColumn?(value: ReactNode, columnValue: CellValue): ReactNode;
}

export interface CellType<T extends object = {}> extends Cell<T, any> {
  column: Cell<T, any>['column'] & CustomColumnProps;
}

const Table = <T extends {}>({
  data,
  columns: columnsProp,
  color,
  fetch,
  component: Component = 'table',
  isResizing = true,
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
  onColumnsChange,
  className,
  rowUniqueKey,
  isLoading,
  height,
  tableContainerRef,
  hideBoxShadow,
  tableFooterData,
  tableFooterRegenerateText,
  tableFooterGenerateText,
  shouldShowtableFooterRegenerateButton,
  scrollProps = {},
  tableFooterTotalInformations
}: TableProps<T>) => {
  const tableHeadRef = useRef<HTMLElement>(null);

  const [tableHeadWidths, setTableHeadWidths] = useState<number[]>([]);
  const [columns, setColumns] = useState(columnsProp);

  const initialTableHeadWidths = useRef<number[]>([]);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow, state } = useTable<T>(
    {
      // @ts-expect-error Ignoring because react-table doesn't provide string type for maxWidth
      columns,
      data,
      manualSortBy: true,
      defaultColumn: {
        Cell: (x) => (!x.cell.value && x.cell.value !== 0 ? emptyValue || 'N/A' : x.cell.value)
      }
    },
    useSortBy,
    ...(isResizing ? [useFlexLayout, useResizeColumns] : []),
    useRowSelect,
    ...(isWithSelection ? [selectionHook] : [])
  );

  const { tableHeadMouseDownHandler, tableHeadMouseUpHandler, draggedCellIndex } = useTableColumnsDnD({
    onSwap: (fromDirection, toDirection) => {
      fromDirection = isWithSelection ? fromDirection - 1 : fromDirection;
      toDirection = isWithSelection ? toDirection - 1 : toDirection;

      const updatedColumns = moveArrayElements(columns, fromDirection, toDirection);

      setTableHeadWidths(moveArrayElements(tableHeadWidths, fromDirection, toDirection));
      setColumns(updatedColumns);

      onColumnsChange?.(updatedColumns);
    },
    disableIndexes: isWithSelection ? [0] : []
  });

  const typedState = state as State<T> & { selectedRowIds: Record<number, boolean> };

  const onFetchDataDebounced = useAsyncDebounce(fetch, 100);

  const rootFontSize =
    Number(window.getComputedStyle(document.body).getPropertyValue('font-size').replace('px', '')) || 10;

  const tableHeadWidth = useMemo(
    () => tableHeadRef.current?.getBoundingClientRect?.()?.width,
    [tableHeadRef.current, headerGroups]
  );

  const tableFooterTotalInformationsChildren = useMemo(
    () => Children.toArray(tableFooterTotalInformations),
    [tableFooterTotalInformations]
  );

  const tableContainerClassNames = classNames(styles.TableContainer, {
    [styles['TableContainer--withSelection']]: isWithSelection,
    [styles['TableContainer--withThreeColumns']]: isWithSelection && columns.length === 3,
    [styles['TableContainer--ready']]: tableHeadWidths.length,
    [styles['Table--no-result']]: !data.length,
    [styles['Table--loading']]: isLoading
  });

  useEffect(() => {
    const tableHeadWidths = Object.values(tableHeadRef.current.querySelectorAll('th')).map((th) => th.clientWidth);

    if (!initialTableHeadWidths.current?.length) initialTableHeadWidths.current = tableHeadWidths;

    setTableHeadWidths(tableHeadWidths);
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

  useEffect(() => {
    if (columnsProp !== columns) setColumns(columnsProp);
  }, [columnsProp]);

  if (!tableHeadWidths.length && tableHeadRef.current) return null;

  return (
    <div className={styles.TableWrapper} ref={tableContainerRef}>
      <Scroll
        {...scrollProps}
        trackClassName={styles.ScrollTrack}
        thumbClassName={styles.ScrollThumb}
        trackHorizontalClassName={styles.ScrollTrackHorizontal}
        className={classNames(
          styles.TableScroll,
          {
            [styles['TableScroll--hide-box-shadow']]: hideBoxShadow
          },
          className
        )}
        height={height || 500}
        autoHeightMin={!data.length || data.length > 5 ? 400 : 150}>
        <Component className={tableContainerClassNames} {...getTableProps()}>
          {/* @ts-expect-error Ignoring typescript cause for automatic component they're error related with ref prop */}
          <THeadComponent className={styles.TableHead} ref={tableHeadRef}>
            {headerGroups.map((headerGroup) => (
              <TableRow {...headerGroup.getHeaderGroupProps()} color={color}>
                {headerGroup.headers.map((column: Column<T> & CustomColumnProps, index) => {
                  const resizerProps = column.getResizerProps();

                  const tableHeadWidth =
                    initialTableHeadWidths.current[index] &&
                    `${initialTableHeadWidths.current[index] / rootFontSize}rem`;

                  const tableHeadProps = column.getHeaderProps(column.getSortByToggleProps());

                  return (
                    <TableHead
                      data-column-index={index}
                      direction={column.isSortedDesc ? 'desc' : 'asc'}
                      selectedDirection={column.isSorted}
                      hideSortIcon={column.disableSortBy}
                      {...tableHeadProps}
                      color={color}
                      style={{
                        ...tableHeadProps.style,
                        ...(typeof column.maxWidth === 'string' ? { width: column.maxWidth } : {}),
                        flex: 'none',
                        minWidth: column.dataMaxWidth
                          ? column.dataMaxWidth
                          : isWithSelection
                          ? index && tableHeadWidth
                          : tableHeadWidth,
                        width: tableHeadWidths.length ? tableHeadProps.style.width : 'initial'
                      }}
                      onMouseDown={tableHeadMouseDownHandler}
                      onMouseUp={tableHeadMouseUpHandler}
                      align={column.headAlign}
                      className={styles.TableHeadCell}>
                      <span>{column.render('Header')}</span>

                      {draggedCellIndex === index ? (
                        <div
                          style={{
                            position: 'absolute',
                            height: '100vh',
                            top: 0,
                            border: '1px solid #E0E1EE',
                            bottom: '0px',
                            marginLeft: '-10px'
                          }}
                        />
                      ) : null}

                      {!column.dataMaxWidth && !(isWithSelection && !index) && (
                        <div
                          {...resizerProps}
                          onMouseDown={(e) => {
                            e.stopPropagation();

                            // @ts-expect-error Expecting error because resizerProps is void
                            resizerProps.onMouseDown(e);
                          }}
                          onClick={(e) => e.stopPropagation()}
                          className={classNames(styles.TableResizer, {
                            [styles['TableResizer--resizing']]: column.isResizing
                          })}
                        />
                      )}
                    </TableHead>
                  );
                })}
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
                    ? (row.original[loadingRowColumnProperty] as string | number)
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
                                onClick={(e: any) => onClick(data[rowIndex], e, rowIndex)}
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
                        const tableCellWidth = cell.column.dataMaxWidth
                          ? cell.column.dataMaxWidth
                          : typeof cell.column.maxWidth === 'string' || cell.column.maxWidth < 150
                          ? cell.column.maxWidth
                          : `${initialTableHeadWidths.current[index] / rootFontSize}rem`;

                        return (
                          <TableCell
                            key={index}
                            color={color}
                            {...(cell.column || {})}
                            style={{
                              maxWidth: cell.column.dataMaxWidth
                                ? cell.column.dataMaxWidth
                                : cell.column.width
                                ? 'initial'
                                : tableCellWidth,
                              width: cell.column.width,
                              minWidth: isWithSelection ? index && tableCellWidth : tableCellWidth
                            }}
                            className={classNames(
                              {
                                [styles.LastTableCell]: index === row.cells.length - 1
                              },
                              cell.column.className
                            )}>
                            {
                              <TextWithTooltip disabled={!!cell.column.renderColumn}>
                                {cell.column.renderColumn
                                  ? cell.column.renderColumn(cell.render('Cell'), cell.value)
                                  : cell.value || cell.render('Cell')}
                              </TextWithTooltip>
                            }
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

        {tableFooterData && rows[0] ? (
          <Component {...getTableProps()} className={classNames(tableContainerClassNames, styles.TableFooter)}>
            <TBodyComponent {...getTableBodyProps()} className={styles.TableBody} style={{ minWidth: tableHeadWidth }}>
              <FlipMove>
                <TableRow color={color}>
                  {tableFooterTotalInformationsChildren.length ? (
                    <TableCell>
                      {tableFooterTotalInformationsChildren.map((info, index) => {
                        const hasDivider = index !== tableFooterTotalInformationsChildren.length - 1;

                        return (
                          <React.Fragment key={index}>
                            <span
                              className={classNames(styles.TableFooterInfo, {
                                [styles['TableFooterInfo--With-Divider']]: hasDivider
                              })}>
                              {info}
                              {hasDivider && <span className={styles.TableFooterInfoDivider} />}
                            </span>
                          </React.Fragment>
                        );
                      })}
                    </TableCell>
                  ) : null}
                  {rows[0].cells.map((cell: CellType<T>, index) => {
                    const totalInfo = tableFooterData[cell.column.id];

                    const tableCellWidth = cell.column.dataMaxWidth
                      ? cell.column.dataMaxWidth
                      : typeof cell.column.maxWidth === 'string' || cell.column.maxWidth < 150
                      ? cell.column.maxWidth
                      : `${initialTableHeadWidths.current[index] / rootFontSize}rem`;

                    return (
                      <TableCell
                        key={index}
                        style={{
                          maxWidth: cell.column.dataMaxWidth
                            ? cell.column.dataMaxWidth
                            : cell.column.width
                            ? 'initial'
                            : tableCellWidth,
                          width: cell.column.width,
                          minWidth: isWithSelection ? index && tableCellWidth : tableCellWidth
                        }}
                        align={cell.column.align}
                        color={color}
                        className={classNames(styles.TableFooterCell, {
                          [styles.LastTableCell]: index === rows[0].cells.length - 1,
                          [styles['TableFooterCell--empty']]:
                            totalInfo !== undefined && totalInfo.value !== 0 && !totalInfo.value
                        })}>
                        {shouldShowtableFooterRegenerateButton && totalInfo !== undefined && (
                          <Tooltip
                            placement='top'
                            text={
                              !totalInfo?.isLoading && (totalInfo.value === 0 || totalInfo?.value)
                                ? tableFooterRegenerateText
                                : tableFooterGenerateText
                            }
                            showEvent='hover'>
                            <button
                              type='button'
                              className={classNames(styles['TableFooterCell__generateButton'], {
                                [styles['TableFooterCell__generateButton--loading']]: totalInfo?.isLoading
                              })}
                              onClick={() => {
                                if (!totalInfo?.isLoading) totalInfo?.onGenerateButtonClick?.();
                              }}>
                              <div>
                                <RecalculateIcon />
                              </div>
                            </button>
                          </Tooltip>
                        )}

                        <Tooltip placement='top' text={totalInfo?.tooltipText} showEvent='hover'>
                          <span>{totalInfo !== undefined ? totalInfo?.value : null}</span>
                        </Tooltip>
                      </TableCell>
                    );
                  })}
                </TableRow>
              </FlipMove>
            </TBodyComponent>
          </Component>
        ) : null}
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
