import React, { FC } from 'react';

interface DatePickerInputProps {
  onClick?: () => void;
  value?: string;
  placeholderText?: string;
}

const DatePickerInput: FC<DatePickerInputProps> = ({ onClick, value, placeholderText }) => (
  <>
    <input
      type='text'
      value={value}
      onClick={onClick}
      placeholder={placeholderText}
      onChange={(e) => e.preventDefault()}
    />
    <svg xmlns='http://www.w3.org/2000/svg' width='17' height='19' onClick={onClick}>
      <path
        data-name='Path 2119'
        d='M307.556 17v3.6m-7.112-3.6v3.6M296 24.2h16m-14.222-5.4h12.444A1.789 1.789 0 0 1 312 20.6v12.6a1.789 1.789 0 0 1-1.778 1.8h-12.444A1.789 1.789 0 0 1 296 33.2V20.6a1.789 1.789 0 0 1 1.778-1.8z'
        transform='translate(-295.5 -16.5)'
        style={{ fill: 'none', stroke: '#00194c', strokeLinecap: 'round', strokeLinejoin: 'round' }}
      />
    </svg>
  </>
);

export default DatePickerInput;
