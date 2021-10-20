import { UIColors } from '../../../types';
import { ButtonHTMLAttributes, DetailedHTMLProps, FC, ReactNode } from 'react';
export declare type ButtonVariants = 'ghost' | 'default';
export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, null> {
    color?: UIColors;
    startIcon?: ReactNode;
    endIcon?: ReactNode;
    fullWidth?: boolean;
    variant?: ButtonVariants;
}
declare const Button: FC<ButtonProps>;
export default Button;
