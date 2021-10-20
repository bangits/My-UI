import { ComponentType, IComponent } from '../../types/props';
import { UIColors } from '../../types/ui';
import React, { CSSProperties, FC } from 'react';
export interface TableHeadProps extends IComponent {
    component?: ComponentType;
    selectedDirection?: boolean;
    direction?: 'asc' | 'desc';
    color?: UIColors;
    hideSortIcon?: boolean;
    style?: CSSProperties;
}
export declare const TableHead: FC<TableHeadProps>;
declare const _default: React.FC<TableHeadProps>;
export default _default;
