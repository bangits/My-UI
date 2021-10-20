import { UIColors } from '../../../types';
import { IComponent } from '../../../types/props';
import React from 'react';
import { MenuItemProps } from './sidebar-components/MenuItem';
export declare type SidebarPositions = 'fixed' | 'static';
export interface SidebarProps extends IComponent {
    width?: number;
    color?: UIColors;
    position?: SidebarPositions;
    collapsedWidth?: number;
    logoSrc?: string;
    menuItems?: MenuItemProps[];
}
declare const _default: React.FC<SidebarProps>;
export default _default;
