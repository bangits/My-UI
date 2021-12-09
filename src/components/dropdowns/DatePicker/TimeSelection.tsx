import { TimePicker } from '@/components';
import { FC } from 'react';

export interface TimeSelectionProps {
  currentDate: Date;
  onTimeChange: (date: Date) => void;
  onChange?: (value: string) => void;
}

export const TimeSelection: FC<TimeSelectionProps> = ({ onTimeChange, currentDate, onChange }) => {
  if (!currentDate) return null;

  return (
    <>
      <TimePicker
        numbersCount={24}
        onChange={(hours) => {
          currentDate.setHours(hours);

          onChange(`${currentDate.getHours()}:${currentDate.getMinutes()}`);

          onTimeChange(currentDate);
        }}
      />
      <TimePicker
        numbersCount={60}
        onChange={(minutes) => {
          currentDate.setMinutes(minutes);

          onChange(`${currentDate.getHours()}:${currentDate.getMinutes()}`);

          onTimeChange(currentDate);
        }}
      />
      <TimePicker
        numbersCount={60}
        onChange={(seconds) => {
          currentDate.setSeconds(seconds);

          onChange(`${currentDate.getHours()}:${currentDate.getMinutes()}`);

          onTimeChange(currentDate);
        }}
      />
    </>
  );
};
