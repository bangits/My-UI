import { getComponentName } from '@/configs';
import { boolean, withKnobs, optionsKnob } from '@storybook/addon-knobs';
import { ComponentMeta } from '@storybook/react';
import { useState } from 'react';
import DatePicker from './DatePicker';
import { getColorKnobs } from '@/configs';

export default {
  component: DatePicker,
  decorators: [withKnobs],
  title: getComponentName('DROPDOWN', 'DatePicker')
} as ComponentMeta<typeof DatePicker>;

export const Default = () => {
  return (
    <>
      <DatePicker
        placeholderText='dd/mm/yyyy Without Range'
        dateFormat={'dd/MM/yyyy'}
        withDropdowns={boolean('withDropdowns', true)}
        disabled={boolean('disabled', false)}
        color={getColorKnobs()}
      />

      <DatePicker
        selectsRange
        placeholderText='dd/mm/yyyy'
        dateFormat={'dd/MM/yyyy'}
        withDropdowns={boolean('withDropdowns', true)}
        disabled={boolean('disabled', false)}
        color={getColorKnobs()}
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
      color={getColorKnobs()}
    />
  );
};
