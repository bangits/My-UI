import { TimePicker } from '@/components';
import { FC, useMemo } from 'react';

export interface TimeSelectionProps {
  currentDate: Date;
  onTimeChange: (date: Date) => void;
  onChange?: (value: string) => void;
  maxDate?: Date;
  minDate?: Date;
}

export const TimeSelection: FC<TimeSelectionProps> = ({ onTimeChange, currentDate, onChange, maxDate, minDate }) => {
  const { maxSeconds, maxMinutes, maxHours } = useMemo(() => {
    if (!currentDate || !maxDate) return {};

    const needToCheckHours =
      maxDate &&
      maxDate.getFullYear() <= currentDate.getFullYear() &&
      maxDate.getMonth() <= currentDate.getMonth() &&
      maxDate.getDate() <= currentDate.getDate();

    const maxHours = needToCheckHours && maxDate.getHours();

    const needToCheckMinutes = needToCheckHours && maxHours <= currentDate.getHours();

    const maxMinutes = needToCheckMinutes && maxDate.getMinutes();

    const needToCheckSeconds = needToCheckMinutes && maxMinutes <= currentDate.getMinutes();

    const maxSeconds = needToCheckSeconds && maxDate?.getSeconds();

    return { maxSeconds, maxMinutes, maxHours };
  }, [maxDate, currentDate?.getHours(), currentDate?.getMinutes(), currentDate?.getSeconds()]);

  const { minMinutes, minHours, minSeconds } = useMemo(() => {
    if (!currentDate || !minDate) return {};

    const needToCheckHours =
      minDate &&
      minDate.getFullYear() >= currentDate.getFullYear() &&
      minDate.getMonth() >= currentDate.getMonth() &&
      minDate.getDate() >= currentDate.getDate();

    const minHours = needToCheckHours && minDate.getHours();

    const needToCheckMinutes = needToCheckHours && minDate.getHours() >= currentDate.getHours();

    const minMinutes = needToCheckMinutes && minDate.getMinutes();

    const needToCheckSeconds = needToCheckMinutes && minMinutes >= currentDate.getMinutes();

    const minSeconds = needToCheckSeconds && minDate?.getSeconds();

    return { minMinutes, minHours, minSeconds };
  }, [minDate, currentDate?.getHours(), currentDate?.getMinutes(), currentDate?.getSeconds()]);

  if (!currentDate) return null;

  return (
    <>
      <TimePicker
        numbersCount={24}
        onChange={(hours) => {
          const currentDateDay = currentDate.getDate();

          currentDate.setHours(hours);
          currentDate.setDate(currentDateDay);

          onChange(`${currentDate.getHours()}:${currentDate.getMinutes()}`);

          onTimeChange(currentDate);
        }}
        minValue={minHours}
        maxValue={maxHours}
        defaultValue={currentDate?.getHours()}
      />
      <TimePicker
        numbersCount={60}
        onChange={(minutes) => {
          const currentDateHour = currentDate.getHours();

          currentDate.setMinutes(minutes);
          currentDate.setHours(currentDateHour);

          onChange(`${currentDate.getHours()}:${currentDate.getMinutes()}`);

          onTimeChange(currentDate);
        }}
        minValue={minMinutes}
        maxValue={maxMinutes}
        defaultValue={currentDate?.getMinutes()}
      />
      <TimePicker
        numbersCount={60}
        onChange={(seconds) => {
          const currentDateMinutes = currentDate.getMinutes();

          currentDate.setSeconds(seconds);
          currentDate.setMinutes(currentDateMinutes);

          onChange(`${currentDate.getHours()}:${currentDate.getMinutes()}`);

          onTimeChange(currentDate);
        }}
        minValue={minSeconds}
        maxValue={maxSeconds}
        defaultValue={currentDate?.getSeconds()}
      />
    </>
  );
};
