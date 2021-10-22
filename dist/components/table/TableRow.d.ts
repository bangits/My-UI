import { ComponentType, IComponent } from '../../types/props';
import { CSSProperties, FC } from 'react';
import { UIColors } from '../../types/ui';
export interface TableRowProps extends IComponent {
    hover?: boolean;
    selected?: boolean;
    color?: UIColors;
    component?: ComponentType;
    style?: CSSProperties;
}
export declare const TableRow: FC<TableRowProps>;
declare const _default: FC<TableRowProps>;
export default _default;
