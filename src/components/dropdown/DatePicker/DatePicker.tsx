import React, {FC} from 'react';
import ReactDatePicker, { ReactDatePickerProps,  } from '@em/react-datepicker';
import styles from './DatePicker.module.scss';

export interface DatePickerProps extends ReactDatePickerProps{
  className?: string;
}

const DatePicker: FC<DatePickerProps> = ({ className,...datePickerProps }) => {
  return (
    <>
      <ReactDatePicker
      className={className}
      wrapperClassName={styles.DatePicker}
      popperClassName={styles.DatePicker}
       {...datePickerProps} 
       />
    </>
  );
};

export default DatePicker;
