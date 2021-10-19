import { boolean, number, object, optionsKnob, text, withKnobs } from '@storybook/addon-knobs';
import { ComponentMeta } from '@storybook/react';
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

export const MultiSelect = () => (
  <>
    <Select
      clearButton
      clearButtonLabel={text('clearButtonLabel', 'Clear')}
      maxLength={number('maxLengthMultiSelect', 50)}
      menuIsOpen={boolean('isMenuOpenMulti', true)}
      inputLabel={text('inputLabelMulti', 'Multi Select...')}
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

    <Select
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
