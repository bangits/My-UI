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
  const [date, setDate] = useState(null);

  return (
    <>
      <DatePicker
        placeholderText='dd/mm/yyyy Without Range'
        peekNextMonth={true}
        onChange={(date: Date) => setDate(date)}
        selected={date}
      />

      <h1> </h1>

      <DatePicker
        selectsRange
        placeholderText='dd/mm/yyyy'
        startDate={dateRange[0]}
        endDate={dateRange[1]}
        peekNextMonth={true}
        onChange={(range: [Date, Date]) => setDateRange(range)}
      />
    </>
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
