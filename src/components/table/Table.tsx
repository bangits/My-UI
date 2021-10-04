import { typedMemo } from '@/helpers/typedMemo';
import { ObjectMock } from '@/types';
import { ComponentType, IComponent } from '@/types/props';
import { UIColors } from '@/types/ui';
import { useEffect } from 'react';
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
} from 'react-table';
import selectionHook from './selectionHook';
import TableCell from './TableCell';
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
  }[];
  color?: UIColors;
  fetch?: (state: State<T>) => any;
  gridLayout?: boolean;
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
  actions
}: TableProps<T>) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow, state } = useTable<T>(
    { columns, data },
    useSortBy,
    ...(isResizing ? [useFlexLayout, useResizeColumns] : []),
    useRowSelect,
    selectionHook
  );

  const typedState = state as State<T>;

  const onFetchDataDebounced = useAsyncDebounce(fetch, 100);

  useEffect(() => {
    onFetchDataDebounced(typedState);
  }, [onFetchDataDebounced, typedState.sortBy]);

  return (
    <Component {...getTableProps()} style={{ borderCollapse: 'collapse' }}>
      <THeadComponent>
        {headerGroups.map((headerGroup) => (
          <TableRow {...headerGroup.getHeaderGroupProps()} color={color}>
            {headerGroup.headers.map((column: Column<T>) => (
              <TableHead
                direction={column.isSortedDesc ? 'desc' : 'asc'}
                selectedDirection={column.isSorted}
                hideSortIcon={column.disableSortBy}
                {...column.getHeaderProps(column.getSortByToggleProps())}
                color={color}>
                {column.render('Header')}

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
      <TBodyComponent {...getTableBodyProps()}>
        {rows.map((row: Row<T>, index) => {
          prepareRow(row);
          return (
            <TableRow hover selected={row.isSelected} {...row.getRowProps()} color={color}>
              {row.cells.map((cell) => (
                <TableCell {...cell.getCellProps()} color={color}>
                  {cell.render('Cell')}
                </TableCell>
              ))}

              {actions &&
                actions.map(({ component: Component, onClick, props }) => (
                  <TableCell {...actions} color={color}>
                    <Component {...props} onClick={(...args: any[]) => onClick(data[index], ...args)} />
                  </TableCell>
                ))}
            </TableRow>
          );
        })}
      </TBodyComponent>
    </Component>
  );
};

export default typedMemo(Table);
