import { UIColors } from '../../../../types';
import { ComponentType, IComponent } from '../../../../types/props';
import React, { FC, ReactNode } from 'react';
export interface MenuItemProps extends IComponent {
    component?: ComponentType;
    isActive?: boolean;
    label?: string;
    icon?: ReactNode;
    color?: UIColors;
    onClick?: () => void;
    subItems?: {
        label?: string;
        onClick?: () => void;
    }[];
}
export declare const MenuItem: FC<MenuItemProps>;
declare const _default: React.FC<MenuItemProps>;
export default _default;
