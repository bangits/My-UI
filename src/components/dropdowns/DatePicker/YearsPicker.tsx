import React, { FC, useCallback, useEffect, useState } from 'react';
import styles from './DatePicker.module.scss';
import classNames from 'classnames';

export interface YearsPickerProps {
  years;
  monthDate;
  customHeaderCount;
  onChange;
}

const YearsPicker: FC<YearsPickerProps> = ({ years, monthDate, customHeaderCount, onChange }) => {
  const [yearSelection, setYearSelection] = useState(years);

  const calculateYears = useCallback((year) => {
    const max = year + 7;
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
    <div className={styles.YearPickerWrapper}>
      <div className={styles.YearHeader}>
        <button
          aria-label='Previous Month'
          className={'react-datepicker__navigation react-datepicker__navigation--previous aaa'}
          style={customHeaderCount === 1 ? { visibility: 'hidden' } : null}
          onClick={() => setYearSelection(calculateYears(yearSelection[2] + 1))}>
          <span className={'react-datepicker__navigation-icon react-datepicker__navigation-icon--previous'}>{'<'}</span>
        </button>
        <div className={styles.MonthPickerWrapper__Header}>
          {yearSelection[1]} - {yearSelection[yearSelection.length - 2]}
        </div>

        <button
          aria-label='Next Month'
          className={'react-datepicker__navigation react-datepicker__navigation--next'}
          style={customHeaderCount === 1 ? { visibility: 'hidden' } : null}
          onClick={() => setYearSelection(calculateYears(yearSelection[0] + 5))}>
          <span className={'react-datepicker__navigation-icon react-datepicker__navigation-icon--next'}>{'>'}</span>
        </button>
      </div>
      <div className={styles.YearsWrapper}>
        {yearSelection.map((y, idx) => (
          <button
            onClick={() => {
              onChange(y);
            }}
            disabled={!idx || idx === yearSelection.length - 1}
            className={classNames(styles.button, {
              [styles.buttonDisabled]: !idx || idx === yearSelection.length - 1,
              [styles.selectedYear]: monthDate.getFullYear() === +y
            })}>
            {y}
          </button>
        ))}
      </div>
    </div>
  );
};

export default YearsPicker;
