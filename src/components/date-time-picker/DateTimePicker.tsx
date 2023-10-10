import { FC, useMemo } from 'react';
import { DatePickerProps } from 'antd';
import { InputStatus } from 'antd/lib/_util/statusUtils';
import DatePicker from 'antd/lib/date-picker';
import classNames from 'classnames';
import { UIColors } from '@/types';
import { Typography } from '../typography';
import styles from './DateTimePicker.module.scss';

export type DateTimePickerProps = Omit<DatePickerProps, 'placeholder' | 'value'> & {
  fullWidth?: boolean;
  placeHolderText?: string;
  minDate?: Date;
  maxDate?: Date;
  selected?: DatePickerProps['value'];
  color?: UIColors;
  explanation?: string;
};

const DateTimePicker: FC<DateTimePickerProps> = ({
  explanation,
  selected,
  color,
  minDate,
  maxDate,
  fullWidth,
  placeHolderText,
  className,
  size,
  disabled,
  ...rest
}): JSX.Element => {
  const colorsMap: Record<UIColors, string> = useMemo(
    () => ({
      success: '',
      primary: '',
      warning: 'warning',
      danger: 'error'
    }),
    []
  );

  return (
    <div className={styles.root}>
      <DatePicker
        {...(rest as any)}
        {...(selected ? { value: selected } : {})}
        size={size || 'large'}
        disabled={disabled}
        placeholder={placeHolderText}
        className={classNames(className, styles.InputBase, {
          [styles['InputBase--fullWidth']]: fullWidth,
          [styles['InputBase--defaultWidth']]: !fullWidth,
          [styles['InputBase--defaultColor']]: color !== 'danger' || disabled,
          [styles['InputBase--errorColor']]: color === 'danger' && !disabled
        })}
        status={(colorsMap[color] || '') as InputStatus}
      />
      {!disabled && explanation && (
        <Typography className={styles.Explanation} color={color} variant='p5'>
          {explanation}
        </Typography>
      )}
    </div>
  );
};

export default DateTimePicker;
