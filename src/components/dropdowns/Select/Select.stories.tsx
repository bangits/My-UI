import { Select } from '@/components';
import { FilterIcon } from '@/icons';
import { boolean, number, object, optionsKnob, text, withKnobs } from '@storybook/addon-knobs';
import { ComponentMeta } from '@storybook/react';
import { useState } from 'react';

export default {
  component: Select,
  decorators: [withKnobs],
  title: 'components/Dropdown/Select'
} as ComponentMeta<typeof Select>;

export const Default = () => (
  <>
    <Select
      inputLabel={text('inputLabelSingle', 'Single Select...')}
      selectAll
      isSearchable
      maxLength={number('maxLengthSingleSelect', 20)}
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
      options={object('options1', [
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
      maxLength={number('maxLengthSingleSelect', 20)}
      isSearchable
      selectAll={boolean('selectAll1', true)}
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
      options={object('options2', [
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

export const MultiSelect = () => {
  const [value, setValue] = useState([2]);

  return (
    <>
      <Select
        isMulti
        value={value}
        onChange={setValue}
        selectAll={boolean('selectAll2', true)}
        clearButton
        clearButtonLabel={text('clearButtonLabel', 'Clear')}
        maxLength={number('maxLengthMultiSelect', 50)}
        inputLabel={text('inputLabelMulti', 'Multi Select...')}
        inputSelectedLabel={text('inputSelectedLabel', 'Selected ')}
        explanation={text('explanation', '')}
        fullWidth={boolean('fullWidth', false)}
        isSearchable
        color={optionsKnob(
          'color',
          {
            danger: 'danger',
            warning: 'warning',
            primary: 'primary'
          },
          'primary',
          {
            display: 'inline-radio'
          }
        )}
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
        defaultValue={[2, 3, 4, 5, 6, 7, 8, 9, 10]}
      />

      <Select
        selectAll
        clearButton
        clearButtonLabel={text('clearButtonLabel', 'Clear')}
        inputLabel={text('inputLabelMulti', 'Multi Select...')}
        maxLength={number('maxLengthMultiSelect', 50)}
        inputSelectedLabel={text('inputSelectedLabel', 'Selected ')}
        explanation={text('explanation', '')}
        isSearchable
        color={optionsKnob(
          'color',
          {
            danger: 'danger',
            warning: 'warning',
            primary: 'primary'
          },
          'primary',
          {
            display: 'inline-radio'
          }
        )}
        isMulti={boolean('isMulti', true)}
        options={object('multiSelectOptions2', [
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
          },
          {
            label: 'Animals 2',
            value: 11
          },
          {
            label: 'Animals',
            value: 12
          },
          {
            label: 'Animals 2',
            value: 13
          },
          {
            label: 'Animals',
            value: 14
          },
          {
            label: 'Animals 2',
            value: 15
          }
        ])}
      />
    </>
  );
};

export const Dropdown = () => {
  return (
    <Select
      dropdown
      dropdownIcon={<FilterIcon />}
      isSearchable={false}
      dropdownLabel={text('dropdownLabel', 'Columns')}
      color={optionsKnob(
        'color',
        {
          danger: 'danger',
          warning: 'warning',
          primary: 'primary',
          success: 'success'
        },
        'primary',
        {
          display: 'inline-radio'
        }
      )}
      isMulti={boolean('isMulti', true)}
      options={[
        {
          label: 'Game data',
          value: 7
        },
        {
          label: 'Provider',
          value: 8
        },
        {
          label: 'Theme',
          value: 9
        },
        {
          label: 'Type',
          value: 10
        },
        {
          label: 'Subtype',
          value: 11
        }
      ]}
      selectAll
      selectAllLabel='All'
    />
  );
};
