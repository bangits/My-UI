import { DatepickerArrowIcon } from '@/icons';
import React, { FC, useCallback, useEffect, useState } from 'react';
import styles from './DatePicker.module.scss';
import classNames from 'classnames';
import { getMyUIPrefix } from '@/configs';

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
          aria-label='Previous Year'
          className={classNames(
            'react-datepicker__navigation',
            'react-datepicker__navigation--previous',
            `${getMyUIPrefix()}-ReactDatepickerNavigation`,
            `${getMyUIPrefix()}-ReactDatepickerNavigationNext`
          )}
          onClick={() => setYearSelection(calculateYears(yearSelection[2] + 1))}>
          <DatepickerArrowIcon />
        </button>
        <div className={classNames(styles.MonthPickerWrapper__Header, `${getMyUIPrefix()}-MonthPickerWrapperHeader`)}>
          {yearSelection[1]} - {yearSelection[yearSelection.length - 2]}
        </div>

        <button
          aria-label='Next Year'
          className={classNames(
            'react-datepicker__navigation',
            'react-datepicker__navigation--next',
            `${getMyUIPrefix()}-ReactDatepickerNavigation`,
            `${getMyUIPrefix()}-ReactDatepickerNavigationNext`
          )}
          onClick={() => setYearSelection(calculateYears(yearSelection[0] + 5))}>
          <DatepickerArrowIcon />
        </button>
      </div>
      <div className={classNames(styles.YearsWrapper, `${getMyUIPrefix()}-YearsWrapper`)}>
        {yearSelection.map((y, idx) => (
          <button
            onClick={() => {
              onChange(y);
            }}
            disabled={!idx || idx === yearSelection.length - 1}
            className={classNames(styles.button, `${getMyUIPrefix()}-Button`, {
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
