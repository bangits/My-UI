import ReactDatePicker, { ReactDatePickerProps } from '@em/react-datepicker';
import classNames from 'classnames';
import React from 'react';
import styles from './DatePicker.module.scss';
import DatePickerInput from './DatePickerInput';

export interface DatepickerProps extends ReactDatePickerProps {
  withDropdowns?: boolean;
}

const DatePicker: React.FC<DatepickerProps> = ({
  placeholderText,
  withDropdowns,
  showMonthDropdown,
  showYearDropdown,
  useShortMonthInDropdown,
  ...datePickerProps
}) => {
  return (
    <>
      <ReactDatePicker
        customInput={<DatePickerInput placeholderText={placeholderText} />}
        wrapperClassName={styles.DatePicker}
        popperClassName={classNames(styles.DatePicker, { [styles['DatePicker--withDropdowns']]: withDropdowns })}
        showYearDropdown={withDropdowns ? true : false}
        showMonthDropdown={withDropdowns ? true : false}
        useShortMonthInDropdown={withDropdowns ? true : false}
        {...datePickerProps}
      />
    </>
  );
};

export default DatePicker;
