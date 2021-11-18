import { getMyUIPrefix } from '@/configs';
import ReactDatePicker, { ReactDatePickerProps } from '@my-ui/react-datepicker';
import classNames from 'classnames';
import React, { useCallback, useMemo, useState } from 'react';
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
  popperClassName,
  wrapperClassName,
  ...datePickerProps
}) => {
  const defaultWeekDayFormating = useCallback((weekDay) => weekDay.substr(0, 3), []);

  const renderCustomHeader = useCallback((params) => <DatePickerHeader {...params} />, []);

  const customInput = useMemo(() => <DatePickerInput placeholderText={placeholderText} />, [placeholderText]);
  const [date, setDate] = useState<Date | null>(null);
  return (
    <>
      <ReactDatePicker
        formatWeekDay={defaultWeekDayFormating}
        {...datePickerProps}
        wrapperClassName={classNames(styles.DatePicker, wrapperClassName, `${getMyUIPrefix()}-Datepicker`)}
        popperClassName={classNames(
          styles.DatePicker,
          {
            [styles['DatePicker--withDropdowns']]: withDropdowns,
            [styles['DatePicker--withTwoMonths']]: monthsShown === 2
          },
          popperClassName
        )}
        onChange={(date: Date) => setDate(date)}
        selected={date}
        customInput={customInput}
        renderCustomHeader={renderCustomHeader}
        fixedHeight
        monthsShown={monthsShown}
        showYearDropdown={withDropdowns}
        showMonthDropdown={withDropdowns}
        useShortMonthInDropdown={withDropdowns}
      />
    </>
  );
};

export default DatePicker;
