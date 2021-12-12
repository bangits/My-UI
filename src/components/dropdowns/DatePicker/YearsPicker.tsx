import { DatepickerArrowIcon } from '@/icons';
import classNames from 'classnames';
import React, { FC, useCallback, useEffect, useState } from 'react';
import styles from './DatePicker.module.scss';

// export interface YearsPickerProps {
//   years;
//   monthDate;
//   customHeaderCount;
//   onChange;
// }

const YearsPicker: FC<any> = ({ years, monthDate, customHeaderCount, onChange }) => {
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
          type='button'
          className={'react-datepicker__navigation react-datepicker__navigation--previous'}
          onClick={() => setYearSelection(calculateYears(yearSelection[2] + 1))}>
          <DatepickerArrowIcon />
        </button>
        <div className={styles.MonthPickerWrapper__Header}>
          {yearSelection[1]} - {yearSelection[yearSelection.length - 2]}
        </div>

        <button
          type='button'
          className={'react-datepicker__navigation react-datepicker__navigation--next'}
          onClick={() => setYearSelection(calculateYears(yearSelection[0] + 5))}>
          <DatepickerArrowIcon />
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
