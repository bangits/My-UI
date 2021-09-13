import { action } from '@storybook/addon-actions';
import { text, withKnobs } from '@storybook/addon-knobs';
import { ComponentMeta } from '@storybook/react';
import DatePicker from './DatePicker';

export default {
  component: DatePicker,
  decorators: [withKnobs],
  title: 'components/Dropdown/Date Picker'
} as ComponentMeta<typeof DatePicker>;

export const Default = () => (
  <DatePicker
    yearItemNumber={5}
    yearDropdownItemNumber={5}
    showMonthDropdown
    showYearDropdown
    scrollableYearDropdown
    placeholderText='dd/mm/yyyy'
    onChange={action('onChange')}
  />
);
