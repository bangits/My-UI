import { getMyUIPrefix } from '@/configs';
import ReactDatePicker, { ReactDatePickerProps } from '@my-ui/react-datepicker';
import classNames from 'classnames';
import React, { useCallback, useMemo, useState } from 'react';
import styles from './DatePicker.module.scss';
import DatePickerHeader from './DatePickerHeader';
import DatePickerInput from './DatePickerInput';
import { UIColors } from '@/types';

export interface DatepickerProps extends Omit<ReactDatePickerProps, 'onChange'> {
  withDropdowns?: boolean;
  fullWidth?: boolean;
  color?: UIColors;
  onChange?: ReactDatePickerProps['onChange'];
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
  fullWidth,
  selected,
  startDate,
  endDate,
  onChange,
  color,
  ...datePickerProps
}) => {
  const [date, setDate] = useState<Date | null>(null);
  const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([null, null]);

  const defaultWeekDayFormating = useCallback((weekDay) => weekDay.substr(0, 3), []);

  const renderCustomHeader = useCallback((params) => <DatePickerHeader {...params} />, []);

  const customInput = useMemo(
    () => <DatePickerInput color={color} fullWidth={fullWidth} placeholderText={placeholderText} />,
    [placeholderText, color]
  );

  const defaultOnChange = useCallback((date: Date | [Date, Date]) => {
    if (Array.isArray(date)) setDateRange(date);
    else setDate(date);
  }, []);

  return (
    <>
      <ReactDatePicker
        formatWeekDay={defaultWeekDayFormating}
        {...datePickerProps}
        wrapperClassName={classNames(
          styles.DatePicker,

          styles['DatePicker--primary'],
          wrapperClassName,
          `${getMyUIPrefix()}-Datepicker`
        )}
        popperClassName={classNames(
          styles.DatePicker,
          styles[`DatePicker--${color}`],
          styles['DatePicker--primary'],
          {
            [styles['DatePicker--withDropdowns']]: withDropdowns,
            [styles['DatePicker--withTwoMonths']]: monthsShown === 2
          },
          popperClassName
        )}
        customInput={customInput}
        renderCustomHeader={renderCustomHeader}
        fixedHeight
        selected={selected !== undefined ? selected : date}
        startDate={startDate !== undefined ? startDate : dateRange[0]}
        endDate={endDate !== undefined ? endDate : dateRange[1]}
        onChange={(value, event) => {
          defaultOnChange(value);

          if (onChange) onChange(value, event);
        }}
        monthsShown={monthsShown}
        showYearDropdown={withDropdowns}
        showMonthDropdown={withDropdowns}
        useShortMonthInDropdown={withDropdowns}
      />
    </>
  );
};

export default DatePicker;
