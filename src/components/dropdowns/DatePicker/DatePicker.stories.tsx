import { getComponentName } from '@/configs';
import { boolean, withKnobs } from '@storybook/addon-knobs';
import { ComponentMeta } from '@storybook/react';
import { useState } from 'react';
import DatePicker from './DatePicker';

export default {
  component: DatePicker,
  decorators: [withKnobs],
  title: getComponentName('DROPDOWN', 'DatePicker')
} as ComponentMeta<typeof DatePicker>;

export const Default = () => {
  const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([null, null]);
  const [date, setDate] = useState<Date | null>(null);

  return (
    <>
      <DatePicker
        placeholderText='dd/mm/yyyy Without Range'
        dateFormat={'dd/MM/yyyy'}
        // onChange={(date: Date) => setDate(date)}
        // selected={date}
        withDropdowns={boolean('withDropdowns', true)}
        disabled={boolean('disabled', false)}
      />

      <DatePicker
        selectsRange
        placeholderText='dd/mm/yyyy'
        dateFormat={'dd/MM/yyyy'}
        startDate={dateRange[0]}
        endDate={dateRange[1]}
        onChange={(range: [Date, Date]) => setDateRange(range)}
        withDropdowns={boolean('withDropdowns', true)}
        disabled={boolean('disabled', false)}
      />
    </>
  );
};

export const WithTwoMonth = () => {
  const [dateRange, setDateRange] = useState([null, null]);

  return (
    <DatePicker
      dateFormat={'dd/MM/yyyy'}
      selectsRange
      placeholderText='dd/mm/yyyy'
      startDate={dateRange[0]}
      endDate={dateRange[1]}
      monthsShown={2}
      onChange={(range: [Date, Date]) => setDateRange(range)}
      withDropdowns={boolean('withDropdowns', true)}
      disabled={boolean('disabled', false)}
    />
  );
};
