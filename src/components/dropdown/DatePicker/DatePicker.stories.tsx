import { action } from '@storybook/addon-actions';
import { text, withKnobs } from '@storybook/addon-knobs';
import { ComponentMeta } from '@storybook/react';
import DatePicker from './DatePicker';

export default {
  component: DatePicker,
  decorators: [withKnobs],
  title: 'components/Dropdown/Date Picker'
} as ComponentMeta<typeof DatePicker>;

export const Default = () => <DatePicker placeholderText='dd/mm/yyyy' selected={new Date()} startDate={new Date()} endDate={new Date('09/21/21')} peekNextMonth={true}   onChange={x => x}/>;
