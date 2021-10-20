import { IComponent } from '../../../../types';
import React, { ReactNode } from 'react';
export interface SubMenuItemProps extends IComponent {
    label?: string;
    icon?: ReactNode;
    onClick?: () => void;
}
declare const _default: React.FC<SubMenuItemProps>;
export default _default;
