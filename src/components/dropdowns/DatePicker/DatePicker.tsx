import ReactDatePicker, { ReactDatePickerProps } from '@my-ui/react-datepicker';
import classNames from 'classnames';
import React, { useCallback } from 'react';
import styles from './DatePicker.module.scss';
import DatePickerHeader from './DatePickerHeader';
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
  const formatWDay = useCallback((nameOfDay) => nameOfDay.substr(0, 3), []);

  const renderCustomHeader = useCallback((params) => <DatePickerHeader {...params} />, []);

  return (
    <>
      <ReactDatePicker
        customInput={<DatePickerInput placeholderText={placeholderText} />}
        formatWeekDay={formatWDay}
        renderCustomHeader={renderCustomHeader}
        wrapperClassName={styles.DatePicker}
        popperClassName={classNames(styles.DatePicker, {
          [styles['DatePicker--withDropdowns']]: withDropdowns,
          [styles['DatePicker--withTwoMonths']]: monthsShown === 2
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
