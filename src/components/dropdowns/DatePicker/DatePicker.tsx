import { getMyUIPrefix } from '@/configs';
import ReactDatePicker, { ReactDatePickerProps } from '@my-ui/react-datepicker';
import classNames from 'classnames';
import React, { useCallback, useMemo } from 'react';
import styles from './DatePicker.module.scss';
import DatePickerHeader from './DatePickerHeader';
import DatePickerInput from './DatePickerInput';

export interface DatepickerProps extends ReactDatePickerProps {
  withDropdowns?: boolean;
  fullWidth?: boolean;
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
  ...datePickerProps
}) => {
  const defaultWeekDayFormating = useCallback((weekDay) => weekDay.substr(0, 3), []);

  const renderCustomHeader = useCallback((params) => <DatePickerHeader {...params} />, []);

  const customInput = useMemo(
    () => <DatePickerInput fullWidth={fullWidth} placeholderText={placeholderText} />,
    [placeholderText]
  );

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
