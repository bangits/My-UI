/// <reference types="react" />
import { ObjectMock } from '../../types';
import { ComponentType, IComponent } from '../../types/props';
import { UIColors } from '../../types/ui';
import { HeaderGroup, HeaderPropGetter, TableState, UseTableRowProps } from '@my-ui/react-table';
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
    component: React.ComponentType<{
        onClick?: (...args: any[]) => void;
    }>;
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
        maxWidth?: number | string;
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
declare const _default: <T extends ObjectMock>({ data, columns, color, fetch, component: Component, isResizing, theadComponent: THeadComponent, tbodyComponent: TBodyComponent, isWithSelection, actions }: TableProps<T>) => JSX.Element;
export default _default;
