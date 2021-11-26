import { Button, CustomNumbersScroll, DatePicker, DatepickerProps } from '@/components';
import { typedMemo } from '@/helpers';
import React, { FC, useState } from 'react';
import styles from './DateTimePicker.module.scss';

export interface CustomTimePickerProps extends DatepickerProps {
  onChange?: (value: any) => void;
}

const DateTimePicker: FC<CustomTimePickerProps> = ({ onChange, ...datePickerProps }) => {
  const [startDate, setStartDate] = useState(null);
  const [getHour, setGetHour] = useState(11);
  const [getMinute, setGetMinute] = useState(12);
  const [getSeconds, setGetSeconds] = useState(55);
  const [onClose, setOnClose] = useState(false);

  const addTime = (date, hours, minutes, seconds) => {
    date.setHours(0, 0, 0, 0);
    return new Date(date.getTime() + hours * 60 * 60 * 1000 + minutes * 60 * 1000 + seconds * 1000);
  };

  const CustomTimePicker = () => {
    return (
      <div className={styles.TimePickerWrapper}>
        <div className={styles.TimeContainer}></div>
        <CustomNumbersScroll quantity={24} adjustPlace={20} /* onValueChange={(value) => console.log(value)} */ />
        <CustomNumbersScroll quantity={60} adjustPlace={56} />
        <CustomNumbersScroll quantity={60} adjustPlace={56} /* onValueChange={(value) => console.log(value)} */ />
      </div>
    );
  };

  return (
    <DatePicker
      {...datePickerProps}
      shouldCloseOnSelect={onClose}
      dateFormat={datePickerProps.dateFormat || "dd-MM-yyyy' 'HH:mm:ss"}
      showTimeInput
      selected={startDate}
      onChange={(date: Date) => {
        setStartDate(addTime(date, getHour, getMinute, getSeconds));
      }}
      customTimeInput={<CustomTimePicker />}>
      <Button>Ok</Button>
    </DatePicker>
  );
};

export default typedMemo(DateTimePicker);
