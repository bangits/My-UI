import { IComponent } from '../../../types/props';
import React, { ReactNode } from 'react';
export interface RadioGroupProps extends IComponent {
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    value?: string;
    defaultValue?: string;
    name?: string;
    children?: ReactNode;
}
declare const _default: React.FC<RadioGroupProps>;
export default _default;
