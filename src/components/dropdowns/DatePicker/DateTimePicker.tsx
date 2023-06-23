import { Button, DatePicker, DatepickerProps } from '@/components';
import { typedMemo } from '@/helpers';
import { IComponent } from '@/types';
import classNames from 'classnames';
import { FC, useState } from 'react';
import styles from './DateTimePicker.module.scss';
import { TimeSelection } from './TimeSelection';

export interface DateTimePickerProps extends DatepickerProps, IComponent {
  onChange?: (value: Date) => void;
  defaultOpened?: boolean;
  selected?: Date;
  hideTimeSelection?: boolean;
}

const DateTimePicker: FC<DateTimePickerProps> = ({
  onChange,
  defaultOpened = false,
  className,
  selected,
  hideTimeSelection,
  ...datePickerProps
}) => {
  const [selectedDateTime, setSelectedDateTime] = useState<Date>(null);

  const [isOpenedDateTimePicker, setOpenedDateTimePicker] = useState(defaultOpened);

  const finalDateTimeValue = selected !== undefined ? selected : selectedDateTime;

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
        showTimeInput={!hideTimeSelection}
        open={isOpenedDateTimePicker}
        customTimeInput={
          !hideTimeSelection && (
            <TimeSelection
              onTimeChange={(date) => {
                setSelectedDateTime(date);

                onChange?.(date);
              }}
              currentDate={finalDateTimeValue}
              maxDate={datePickerProps.maxDate}
              minDate={datePickerProps.minDate}
            />
          )
        }
        onFocus={() => setOpenedDateTimePicker(true)}
        onClickOutside={() => setOpenedDateTimePicker(false)}
        selected={finalDateTimeValue}
        shouldCloseOnSelect={false}
        selectsRange={false}
        onChange={(date) => {
          if (!Array.isArray(date)) {
            setSelectedDateTime(date);

            onChange?.(date);

            if (hideTimeSelection) setOpenedDateTimePicker(false);
          }
        }}>
        {finalDateTimeValue && !hideTimeSelection && (
          <>
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
