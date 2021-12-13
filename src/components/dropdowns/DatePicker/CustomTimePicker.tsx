import React, { FC, useState } from 'react';

export interface CustomTimePickerProps {}

const CustomTimePicker: FC<CustomTimePickerProps> = () => {
  const [getHour, setGetHour] = useState(10);
  const [getMinute, setGetMinute] = useState(12);
  const [getSeconds, setGetSeconds] = useState(24);

  const hour = Array(12).fill(1);
  const minute = Array(60).fill(1);
  const second = Array(60).fill(1);

  return (
    <div>
      <div>
        {hour.map((h, i) => (
          <span key={i}>{i + 1}</span>
        ))}
      </div>
      <div>
        {minute.map((h, i) => (
          <span key={i}>{i + 1}</span>
        ))}
      </div>
      <div>
        {second.map((h, i) => (
          <span key={i}>{i + 1}</span>
        ))}
      </div>
    </div>
  );
};

export default CustomTimePicker;
