import ReactDatePicker, { ReactDatePickerProps } from '@em/react-datepicker';
import React from 'react';
import styles from './DatePicker.module.scss';
import DatePickerInput from './DatePickerInput';

export type DatepickerProps = ReactDatePickerProps;

const DatePicker: React.FC<ReactDatePickerProps> = ({ placeholderText, ...datePickerProps }) => {
  return (
    <>
      <ReactDatePicker
        customInput={<DatePickerInput placeholderText={placeholderText} />}
        wrapperClassName={styles.DatePicker}
        popperClassName={styles.DatePicker}
        {...datePickerProps}
      />
    </>
  );
};

export default DatePicker;
