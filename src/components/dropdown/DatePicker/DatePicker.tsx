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
  monthsShown,
  ...datePickerProps
}) => {
  return (
    <>
      <ReactDatePicker
        customInput={<DatePickerInput placeholderText={placeholderText} />}
        formatWeekDay={(nameOfDay) => nameOfDay.substr(0, 3)}
        wrapperClassName={styles.DatePicker}
        popperClassName={classNames(styles.DatePicker, {
          [styles['DatePicker--withDropdowns']]: withDropdowns,
          [styles['DatePicker-outside-days--hidden']]: monthsShown
        })}
        monthsShown={monthsShown}
        showYearDropdown={withDropdowns}
        showMonthDropdown={withDropdowns}
        useShortMonthInDropdown={withDropdowns}
        {...datePickerProps}
      />
    </>
  );
};

export default DatePicker;
