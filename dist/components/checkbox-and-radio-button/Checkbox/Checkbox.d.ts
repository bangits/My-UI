import { IComponent, UIColors } from '../../../types';
import React from 'react';
export interface CheckboxProps extends IComponent, React.InputHTMLAttributes<HTMLInputElement> {
    color?: UIColors;
}
declare const _default: React.ForwardRefExoticComponent<CheckboxProps & React.RefAttributes<HTMLInputElement>>;
export default _default;
