import { Button, DatePicker, DatepickerProps } from '@/components';
import { typedMemo } from '@/helpers';
import { IComponent } from '@/types';
import classNames from 'classnames';
import React, { FC, useEffect, useState } from 'react';
import styles from './DateTimePicker.module.scss';
import { TimeSelection } from './TimeSelection';

export interface DateTimePickerProps extends DatepickerProps, IComponent {
  onChange?: (value: Date) => void;
  defaultOpened?: boolean;
  selected?: Date;
}

const DateTimePicker: FC<DateTimePickerProps> = ({
  onChange,
  defaultOpened = false,
  className,
  selected,
  ...datePickerProps
}) => {
  const [selectedDateTime, setSelectedDateTime] = useState<Date>(null);

  const [isOpenedDateTimePicker, setOpenedDateTimePicker] = useState(defaultOpened);

  const finalDateTimeValue = selected !== undefined ? selected : selectedDateTime;

  useEffect(() => {
    onChange?.(selectedDateTime);
  }, [selectedDateTime]);

  return (
    <div
      className={classNames(
        styles.TimePickerBase,
        {
          [styles.TimePickerBaseWithoutTime]: !finalDateTimeValue
        },
        className
      )}>
      <DatePicker
        {...datePickerProps}
        dateFormat={datePickerProps.dateFormat || 'dd-MM-yyyy HH:mm:ss'}
        showTimeInput
        open={isOpenedDateTimePicker}
        customTimeInput={
          <TimeSelection
            onTimeChange={setSelectedDateTime}
            currentDate={finalDateTimeValue}
            maxDate={datePickerProps.maxDate}
            minDate={datePickerProps.minDate}
          />
        }
        onFocus={() => setOpenedDateTimePicker(true)}
        onClickOutside={() => setOpenedDateTimePicker(false)}
        selected={finalDateTimeValue}
        shouldCloseOnSelect={false}
        selectsRange={false}
        onChange={(date) => {
          if (!Array.isArray(date)) {
            setSelectedDateTime(date);
          }
        }}>
        {finalDateTimeValue && (
          <>
            {/* <hr className={styles.TimePickerDivider} /> */}
            <Button className={styles.TimePickerButton} onClick={() => setOpenedDateTimePicker(false)}>
              OK
            </Button>
          </>
        )}
      </DatePicker>
    </div>
  );
};

export default typedMemo(DateTimePicker);
