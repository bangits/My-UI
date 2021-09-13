import { withKnobs } from '@storybook/addon-knobs';
import { ComponentMeta } from '@storybook/react';
import { useState } from 'react';
import DatePicker from './DatePicker';

export default {
  component: DatePicker,
  decorators: [withKnobs],
  title: 'components/Dropdown/Date Picker'
} as ComponentMeta<typeof DatePicker>;

export const Default = () => {
  const [dateRange, setDateRange] = useState([null, null]);

  return (
    <DatePicker
      selectsRange
      placeholderText='dd/mm/yyyy'
      startDate={dateRange[0]}
      endDate={dateRange[1]}
      peekNextMonth={true}
      onChange={(range: [Date, Date]) => setDateRange(range)}
    />
  );
};
export const WithTwoMonth = () => {
  const [dateRange, setDateRange] = useState([null, null]);

  return (
    <DatePicker
      selectsRange
      placeholderText='dd/mm/yyyy'
      startDate={dateRange[0]}
      endDate={dateRange[1]}
      peekNextMonth={true}
      monthsShown={2}
      onChange={(range: [Date, Date]) => setDateRange(range)}
    />
  );
};
