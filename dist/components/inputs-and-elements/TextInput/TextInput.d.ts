import { TypographyProps } from '../..';
import { UIColors } from '../../../types';
import { DetailedHTMLProps, FC, InputHTMLAttributes, ReactNode } from 'react';
export interface TextInputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    color?: UIColors;
    disabled?: boolean;
    fullWidth?: boolean;
    endIcon?: ReactNode;
    startIcon?: ReactNode;
    maxLength?: number;
    explanation?: string;
    containerClassName?: string;
    explanationProps?: TypographyProps;
    label?: string;
}
declare const TextInputs: FC<TextInputProps>;
export default TextInputs;
