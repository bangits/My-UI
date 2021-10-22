import { ComponentType, IComponent } from '../../types/props';
import { UIColors } from '../../types/ui';
import { CSSProperties, FC } from 'react';
export interface TableCellProps extends IComponent {
    component?: ComponentType;
    align?: 'left' | 'right' | 'center';
    color?: UIColors;
    style?: CSSProperties;
}
export declare const TableCell: FC<TableCellProps>;
declare const _default: FC<TableCellProps>;
export default _default;
