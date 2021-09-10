import React from 'react';
import ReactDatePicker, { ReactDatePickerProps } from '@em/react-datepicker';
import styles from './DatePicker.module.scss';

const DatePicker: React.FC<ReactDatePickerProps> = ({ ...datePickerProps }) => {
  return (
    <>
      <ReactDatePicker 
      wrapperClassName={styles.DatePicker}
      popperClassName={styles.DatePicker}
       {...datePickerProps} 
       />
    </>
  );
};

export default DatePicker;
