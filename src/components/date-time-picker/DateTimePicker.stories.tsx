import { useState } from 'react';
import DateTimePicker from './DateTimePicker';
import dayjs from 'dayjs';

export default {
  title: 'components/DateTimePicker/DateTimePicker'
};

export const Default = () => {
  const [value, setValue] = useState(dayjs());

  return <DateTimePicker placeHolderText='Date' selected={value} onChange={(value) => setValue(value)} />;
};
