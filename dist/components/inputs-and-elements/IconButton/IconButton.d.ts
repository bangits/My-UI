import { ButtonProps } from '../..';
import { IComponent } from '../../../types';
import React, { ReactNode } from 'react';
export declare type IconButtonVariants = 'dark' | 'light';
export interface IconButtonProps extends Omit<ButtonProps, 'variant'>, IComponent {
    icon?: ReactNode;
    variant?: IconButtonVariants;
}
declare const _default: React.FC<IconButtonProps>;
export default _default;
