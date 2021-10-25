import React, { FC, useState } from 'react';
import MonthPicker from './MonthPicker';
import YearsPicker from './YearsPicker';

export interface DatePickerHeaderProps {
  monthDate: Date;
  date: Date;
  changeYear(year: number): void;
  changeMonth(month: number): void;
  customHeaderCount: number;
  decreaseMonth(): void;
  increaseMonth(): void;
  prevMonthButtonDisabled: boolean;
  nextMonthButtonDisabled: boolean;
  decreaseYear(): void;
  increaseYear(): void;
  prevYearButtonDisabled: boolean;
  nextYearButtonDisabled: boolean;
  oneYear: number;
}

const DatePickerHeader: FC<DatePickerHeaderProps> = ({
  monthDate,
  customHeaderCount,
  decreaseMonth,
  increaseMonth,
  decreaseYear,
  changeYear,
  changeMonth
}) => {
  const [year, setYear] = useState(false);
  const [month, setMonth] = useState(false);

  return (
    <div className='month-and-yearWrapper'>
      <button
        aria-label='Previous Month'
        className={'react-datepicker__navigation react-datepicker__navigation--previous'}
        style={customHeaderCount === 1 ? { visibility: 'hidden' } : undefined}
        onClick={decreaseMonth}>
        <span className={'react-datepicker__navigation-icon react-datepicker__navigation-icon--previous'}>{'<'}</span>
      </button>
      <div className='month-and-yearWrapper' style={{ display: 'flex', justifyContent: 'center' }}>
        <span
          className='react-datepicker__current-month'
          onClick={() => {
            setMonth(true);
            setYear(false);
          }}
          style={{ cursor: 'pointer' }}>
          {monthDate.toLocaleString('en-US', {
            month: 'long'
          })}
        </span>
        <span
          className='react-datepicker__current-month'
          onClick={() => {
            setMonth(false);
            setYear(true);
          }}
          style={{ marginLeft: '8px', cursor: 'pointer' }}>
          {monthDate.toLocaleString('en-US', {
            year: 'numeric'
          })}
        </span>
      </div>
      <button
        aria-label='Next Month'
        className={'react-datepicker__navigation react-datepicker__navigation--next'}
        style={customHeaderCount === 1 ? { visibility: 'hidden' } : undefined}
        onClick={increaseMonth}>
        <span className={'react-datepicker__navigation-icon react-datepicker__navigation-icon--next'}>{'>'}</span>
      </button>

      <div>
        {year && (
          <YearsPicker
            onChange={(year) => {
              changeYear(year);
              setYear(false);
            }}
            monthDate={monthDate}
            customHeaderCount={customHeaderCount}
          />
        )}
        {month && (
          <MonthPicker
            onChange={(year, month) => {
              changeYear(year);
              changeMonth(month);
              setMonth(false);
            }}
            monthDate={monthDate}
            customHeaderCount={customHeaderCount}
          />
        )}
      </div>
    </div>
  );
};

export default DatePickerHeader;