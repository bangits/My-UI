import { UIColors } from '../../../types';
import { Props } from '@my-ui/react-select';
import { FC } from 'react';
export declare type SelectProps = {
    selectAllLabel?: string;
    selectAllValue?: string;
    inputLabel?: string;
    inputSelectedLabel?: string;
    explanation?: string;
    fullWidth?: boolean;
    color?: UIColors;
    maxLength?: number;
    clearButton?: boolean;
    clearButtonLabel?: string;
} & Props;
declare const Select: FC<SelectProps>;
export default Select;
