import React, { ReactNode } from 'react';
import { IComponent } from '../../../types';
export interface BadgeProps extends IComponent {
    quantity?: number;
    icon?: ReactNode;
}
declare const _default: React.FC<BadgeProps>;
export default _default;
