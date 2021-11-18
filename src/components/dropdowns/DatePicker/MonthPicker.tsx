import { DatepickerArrowIcon } from '@/icons';
import classNames from 'classnames';
import React, { FC, useCallback, useEffect, useState } from 'react';
import styles from './DatePicker.module.scss';
import { getMyUIPrefix } from '@/configs';

const MonthPicker: FC<any> = ({ years, monthDate, customHeaderCount, onChange }) => {
  const [yearSelection, setYearSelection] = useState(years);
  console.log('monthDate', monthDate);
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const calculateYears = useCallback((year) => {
    const max = year + 10;
    const min = max - 11;
    const years = [];

    for (let i = max; i >= min; i--) {
      years.push(i);
    }

    return years.reverse();
  }, []);

  useEffect(() => {
    setYearSelection(calculateYears(monthDate.getFullYear()));
  }, [monthDate]);

  if (!yearSelection) return null;

  return (
    <div className={classNames(styles.MonthPickerWrapper, `${getMyUIPrefix()}-MonthPickerWrapper`)}>
      <button
        aria-label='Previous Month'
        className={'react-datepicker__navigation react-datepicker__navigation--previous'}
        onClick={() => setYearSelection(calculateYears(yearSelection[2] - 2))}>
        <DatepickerArrowIcon />
      </button>
      <div className={classNames(styles.MonthPickerWrapper__Header, `${getMyUIPrefix()}-MonthPickerWrapperHeader`)}>
        {yearSelection[1]}
      </div>
      <button
        aria-label='Next Month'
        className={classNames(
          'react-datepicker__navigation',
          'react-datepicker__navigation--next',
          `${getMyUIPrefix()}-ReactDatepickerNavigation`,
          `${getMyUIPrefix()}-ReactDatepickerNavigationNext`
        )}
        onClick={() => setYearSelection(calculateYears(yearSelection[0] + 2))}>
        <DatepickerArrowIcon />
      </button>

      <div className={classNames(styles.MonthWrapper, `${getMyUIPrefix()}-MonthWrapper`)}>
        {months.map((m, idx) => (
          <div
            onClick={() => onChange(yearSelection[1], idx)}
            className={classNames(styles.button, `${getMyUIPrefix()}-Button`, {
              [styles.selectedYear]: monthDate.getMonth() === idx
            })}>
            {m}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MonthPicker;
