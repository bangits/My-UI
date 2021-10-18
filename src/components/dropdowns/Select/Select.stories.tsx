import { boolean, object, optionsKnob, text, withKnobs } from '@storybook/addon-knobs';
import { ComponentMeta } from '@storybook/react';
import { Option } from './Options';
import Select from './Select';

export default {
  component: Select,
  decorators: [withKnobs],
  title: 'components/Dropdown/Select'
} as ComponentMeta<typeof Select>;

export const Default = () => (
  <>
    <Select
      menuIsOpen={boolean('isMenuOpenSingle', true)}
      inputLabel={text('inputLabelSingle', 'Single Select...')}
      isSearchable
      color={optionsKnob(
        'color',
        {
          danger: 'danger',
          warning: 'warning',
          success: 'success',
          primary: 'primary'
        },
        'primary',
        {
          display: 'inline-radio'
        }
      )}
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
    <Select
      inputLabel={text('inputLabelSingle', 'Single Select...')}
      isSearchable
      color={optionsKnob(
        'color',
        {
          danger: 'danger',
          warning: 'warning',
          success: 'success',
          primary: 'primary'
        },
        'primary',
        {
          display: 'inline-radio'
        }
      )}
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
  </>
);

export const MultiSelect = () => (
  <Select
    placeholder='Multi Select...'
    components={{ Option }}
    isMulti
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
