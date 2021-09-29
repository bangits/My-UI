import React, { FC, ReactHTML, ReactSVG, useEffect } from 'react';
import { useAbsoluteLayout, useBlockLayout, useGridLayout, useResizeColumns, useRowSelect, useSortBy, useTable } from 'react-table';
import TableCell from './TableCell';
import TableHead from './TableHead';
import TableRow from './TableRow';

export interface TableProps {
  component?: keyof ReactHTML | keyof ReactSVG;
  data?: any[];
  columns?: any[];
  color?: string;
  fetch?: (...args: any) => {};
  gridLayout?: boolean,
  absoluteLayout?: boolean;
  blockLayout?: boolean;
  isResizing?: boolean;
}

const IndeterminateCheckbox = React.forwardRef(({ indeterminate, ...rest }, ref) => {
  const defaultRef = React.useRef();
  const resolvedRef = ref || defaultRef;

  React.useEffect(() => {
    resolvedRef.current.indeterminate = indeterminate;
  }, [resolvedRef, indeterminate]);

  return (
    <>
      <input type='checkbox' ref={resolvedRef} {...rest} />
    </>
  );
});

const Table: FC<TableProps> = ({ data, columns, color, fetch, component: Component = 'table', isResizing, absoluteLayout, blockLayout, gridLayout }) => {

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow, selectedFlatRows, state } = useTable(
    { columns, data },
    useSortBy,
    useGridLayout,
    absoluteLayout ? useAbsoluteLayout : false,
    gridLayout ? useGridLayout : false,
    blockLayout ? useBlockLayout : false,
    isResizing ? useResizeColumns : false,
    useRowSelect,
    (hooks) => {
      hooks.visibleColumns.push((columns) => {
        return [
          {
            id: 'selection',
            Header: ({ getToggleAllRowsSelectedProps }) => (
              <div>
                <IndeterminateCheckbox {...getToggleAllRowsSelectedProps()} />
              </div>
            ),
            Cell: ({ row }) => (
              <div>
                <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />
              </div>
            )
          },
          ...columns
        ];
      });
    }
  );

  const { sortBy } = state;

  useEffect(() => {
    if (!fetch) return;
    fetch(selectedFlatRows);
  }, [sortBy, selectedFlatRows]);

  return (
    <Component {...getTableProps()} style={{ borderCollapse: 'collapse' }}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <TableRow {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => {
              return (
                <TableHead
                  direction={column.isSortedDesc}
                  hideSortIcon={column.isSorted}
                  withSorting={{ ...column.getHeaderProps(column.getSortByToggleProps()) }}>
                  {column.render('Header')}
                </TableHead>
              );
            })}
          </TableRow>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <TableRow hover {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <TableCell {...cell.getCellProps()}>{cell.render('Cell')}</TableCell>;
              })}
            </TableRow>
          );
        })}
      </tbody>
    </Component>
  );
};

export default Table;
