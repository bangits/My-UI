import { boolean, object, text, withKnobs } from '@storybook/addon-knobs';
import { ComponentMeta } from '@storybook/react';
import Select from './Select';

export default {
  component: Select,
  decorators: [withKnobs],
  title: 'components/Dropdown/Select'
} as ComponentMeta<typeof Select>;

export const Default = () => (
  <Select
    inputLabel={text('inputLabelSingle', 'Single Select...')}
    isSearchable
    success={boolean('success', false)}
    error={boolean('error', false)}
    warning={boolean('warning', false)}
    options={object('options', [
      {
        label: 'Jewels and Gems',
        value: 2
      },
      {
        label: 'Fantasy',
        value: 3
      },
      {
        label: 'Halloween',
        value: 4
      },
      {
        label: 'Luxury',
        value: 5
      },
      {
        label: 'Fruits / Vegetables',
        value: 6
      },
      {
        label: 'Asian',
        value: 7
      },
      {
        label: 'Food',
        value: 8
      },
      {
        label: 'Branded',
        value: 9
      },
      {
        label: 'Animals',
        value: 10
      }
    ])}
  />
);

export const MultiSelect = () => (
  <>
    <Select
      inputLabel={text('inputLabelMulti', 'Multi Select...')}
      inputSelectedLabel={text('inputSelectedLabel', 'Selected items: ')}
      isSearchable
      success={boolean('successSingleSelect', false)}
      error={boolean('errorSingleSelect', false)}
      warning={boolean('warningSingleSelect', false)}
      isMulti={boolean('isMulti', true)}
      options={object('multiSelectOptions', [
        {
          label: 'Jewels and Gems',
          value: 2
        },
        {
          label: 'Fantasy',
          value: 3
        },
        {
          label: 'Halloween',
          value: 4
        },
        {
          label: 'Luxury',
          value: 5
        },
        {
          label: 'Fruits / Vegetables',
          value: 6
        },
        {
          label: 'Asian',
          value: 7
        },
        {
          label: 'Food',
          value: 8
        },
        {
          label: 'Branded',
          value: 9
        },
        {
          label: 'Animals',
          value: 10
        }
      ])}
    />
  </>
);
