import { Button, DatePicker, DatepickerProps } from '@/components';
import { typedMemo } from '@/helpers';
import React, { FC, useState } from 'react';
import styles from './DateTimePicker.module.scss';
import { TimeSelection } from './TimeSelection';

export interface CustomTimePickerProps extends DatepickerProps {
  onChange?: (value: Date) => void;
  defaultOpened?: boolean;
}

const DateTimePicker: FC<CustomTimePickerProps> = ({ onChange, defaultOpened = false, ...datePickerProps }) => {
  const [selectedDateTime, setSelectedDateTime] = useState<Date>(null);

  const [isOpenedDateTimePicker, setOpenedDateTimePicker] = useState(defaultOpened);

  return (
    <div className={styles.TimePickerBase}>
      <DatePicker
        {...datePickerProps}
        dateFormat={datePickerProps.dateFormat || 'dd-MM-yyyy HH:mm:ss'}
        showTimeInput
        open={isOpenedDateTimePicker}
        customTimeInput={<TimeSelection onTimeChange={setSelectedDateTime} currentDate={selectedDateTime} />}
        onFocus={() => setOpenedDateTimePicker(true)}
        onClickOutside={() => setOpenedDateTimePicker(false)}
        selected={selectedDateTime}
        shouldCloseOnSelect={false}
        selectsRange={false}
        onChange={(date) => {
          if (!Array.isArray(date)) {
            setSelectedDateTime(date);

            onChange?.(date);
          }
        }}>
        <hr className={styles.TimePickerDivider} />
        <Button className={styles.TimePickerButton} onClick={() => setOpenedDateTimePicker(false)}>
          OK
        </Button>
      </DatePicker>
    </div>
  );
};

export default typedMemo(DateTimePicker);
