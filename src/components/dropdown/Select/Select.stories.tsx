import { withKnobs } from '@storybook/addon-knobs';
import { ComponentMeta } from '@storybook/react';
import Select from './Select';

export default {
  component: Select,
  decorators: [withKnobs],
  title: 'components/Dropdown/Select'
} as ComponentMeta<typeof Select>;

export const Default = () => (
  <Select
    isSearchable={true}
    isMulti
    removeSelected={false}
    options={[
      {
        label: 'Test',
        value: 1
      },
      {
        label: 'Test2',
        value: 2
      },
      {
        label: 'Test3',
        value: 3
      },
      {
        label: 'Test4',
        value: 4
      },
      {
        label: 'Test5',
        value: 5
      },
      {
        label: 'Test6',
        value: 6
      },
      {
        label: 'Test7',
        value: 7
      }
    ]}
  />
);
