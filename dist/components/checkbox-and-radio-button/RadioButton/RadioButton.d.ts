import { IComponent, UIColors } from '../../../types';
import React from 'react';
export interface RadioButtonProps extends IComponent, React.InputHTMLAttributes<HTMLInputElement> {
    name?: string;
    color?: UIColors;
    value?: string | number;
}
declare const _default: React.ForwardRefExoticComponent<RadioButtonProps & React.RefAttributes<HTMLInputElement>>;
export default _default;
