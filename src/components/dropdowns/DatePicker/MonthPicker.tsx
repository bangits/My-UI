import React, { useState, useCallback, useEffect, FC } from 'react';
import styles from './DatePicker.module.scss';
import classNames from 'classnames';

export interface YearsPickerProps {
  years;
  monthDate;
  customHeaderCount;
  onChange;
}

const MonthPicker: FC<YearsPickerProps> = ({ years, monthDate, customHeaderCount, onChange }) => {
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
    <div className={styles.MonthPickerWrapper}>
      <button
        aria-label='Previous Month'
        className={'react-datepicker__navigation react-datepicker__navigation--previous aaa'}
        style={customHeaderCount === 1 ? { visibility: 'hidden' } : null}
        onClick={() => setYearSelection(calculateYears(yearSelection[2] - 2))}>
        <span className={'react-datepicker__navigation-icon react-datepicker__navigation-icon--previous'}>{'<'}</span>
      </button>
      <div className={styles.MonthPickerWrapper__Header}>{yearSelection[1]}</div>
      <button
        aria-label='Next Month'
        className={'react-datepicker__navigation react-datepicker__navigation--next'}
        style={customHeaderCount === 1 ? { visibility: 'hidden' } : null}
        onClick={() => setYearSelection(calculateYears(yearSelection[0] + 2))}>
        <span className={'react-datepicker__navigation-icon react-datepicker__navigation-icon--next'}>{'>'}</span>
      </button>

      <div className={styles.MonthWrapper}>
        {months.map((m, idx) => (
          <div
            onClick={() => onChange(yearSelection[1], idx)}
            className={classNames(styles.button, {
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
