import { ComponentType, IComponent } from '../../types';
import React from 'react';
export interface CardProps extends IComponent {
    component?: ComponentType;
    borderRadius?: number;
}
declare const _default: React.FC<CardProps>;
export default _default;
