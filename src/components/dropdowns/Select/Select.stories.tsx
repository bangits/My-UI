import { Select } from '@/components';
import { getColorKnobs } from '@/configs';
import { FilterIcon } from '@/icons';
import { Icons } from '@/my-ui-core';
import { components } from '@my-ui/react-select';
import { action } from '@storybook/addon-actions';
import { boolean, number, object, text, withKnobs } from '@storybook/addon-knobs';
import { ComponentMeta } from '@storybook/react';
import { useEffect, useState } from 'react';

export default {
  component: Select,
  decorators: [withKnobs],
  title: 'components/Dropdown/Select'
} as ComponentMeta<typeof Select>;

export const Default = () => {
  const [value, setValue] = useState([2]);
  const [options, setOptions] = useState([
    {
      label: (
        <svg xmlns='http://www.w3.org/2000/svg' width='50' height='23' viewBox='0 0 50 23' fill='none'>
          <rect width='50' height='23' rx='8' fill='#D6D7D9' />
          <rect x='0.25' y='0.25' width='49.5' height='22.5' rx='7.75' stroke='black' strokeWidth='0.5' />
        </svg>
      ),
      value: 2
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
  ]);

  useEffect(() => {
    // setTimeout(() => {
    //   setOptions([
    //     {
    //       label: 'Jewels and Gems',
    //       value: 2
    //     },
    //     {
    //       label: 'Fantasy',
    //       value: 3
    //     },
    //     {
    //       label: 'Halloween',
    //       value: 4
    //     },
    //     {
    //       label: 'Luxury',
    //       value: 5
    //     },
    //     {
    //       label: 'Fruits / Vegetables',
    //       value: 6
    //     },
    //     {
    //       label: 'Asian',
    //       value: 7
    //     },
    //     {
    //       label: 'Food',
    //       value: 8
    //     },
    //     {
    //       label: 'Branded',
    //       value: 9
    //     },
    //     {
    //       label: 'Animals',
    //       value: 10
    //     }
    //   ]);
    // }, 2000);
  }, []);
  return (
    <>
      <Select
        optionVariant='big'
        value={value}
        isMulti
        onChange={setValue}
        inputLabel={text('inputLabelSingle', 'Single Select...')}
        isSearchable
        maxLength={number('maxLengthSingleSelect', 20)}
        color={getColorKnobs()}
        options={options}
      />
      <Select
        optionVariant='big'
        inputLabel={text('inputLabelSingle', 'Single Select...')}
        maxLength={number('maxLengthSingleSelect', 20)}
        isSearchable
        color={getColorKnobs()}
        options={[
          {
            label: (
              <svg xmlns='http://www.w3.org/2000/svg' width='50' height='23' viewBox='0 0 50 23' fill='none'>
                <rect width='50' height='23' rx='8' fill='#D6D7D9' />
                <rect x='0.25' y='0.25' width='49.5' height='22.5' rx='7.75' stroke='black' strokeWidth='0.5' />
              </svg>
            ),
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
            label: 'Clone',
            value: 11
          },
          {
            label: 'Dol',
            value: 12
          },
          {
            label: 'Gol',
            value: 13
          }
        ]}
      />
    </>
  );
};

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
        color={getColorKnobs()}
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
        isDisabled
      />

      <Select
        clearButtonLabel={text('clearButtonLabel', 'Clear')}
        inputLabel={text('inputLabelMulti', 'Multi Select...')}
        maxLength={number('maxLengthMultiSelect', 50)}
        inputSelectedLabel={text('inputSelectedLabel', 'Selected ')}
        explanation={text('explanation', '')}
        color={getColorKnobs()}
        selectAll
        isMulti={boolean('isMulti', true)}
        options={object('multiSelectOptions2', [
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
            label: 'Provider',
            value: 11
          },
          {
            label: 'Theme',
            value: 12
          },
          {
            label: 'Type',
            value: 13
          },
          {
            label: 'Subtype',
            value: 14
          },
          {
            label: 'Provider',
            value: 15
          },
          {
            label: 'Theme',
            value: 16
          },
          {
            label: 'Type',
            value: 17
          }
        ])}
        onChange={action('onChange')}
        showSetAsDefaultButton
      />
    </>
  );
};

export const Dropdown = () => {
  return (
    <Select
      showSetAsDefaultButton
      clearButton
      clearButtonLabel='Clear'
      dropdown
      isDisabled={boolean('isDisabled', false)}
      dropdownIcon={
        <FilterIcon style={{ fill: '#505d6e', position: 'relative', left: '6px', top: '7px', width: '18px' }} />
      }
      isSearchable={false}
      dropdownLabel={text('dropdownLabel', 'Columns')}
      onChange={action('onChange')}
      color={getColorKnobs()}
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
          label: 'Provider',
          value: 11
        },
        {
          label: 'Theme',
          value: 12
        },
        {
          label: 'Type',
          value: 13
        },
        {
          label: 'Subtype',
          value: 14
        },
        {
          label: 'Provider',
          value: 15
        },
        {
          label: 'Theme',
          value: 16
        },
        {
          label: 'Type',
          value: 17
        }
      ]}
      selectAll
      selectAllLabel='All'
      selectTopPart='Assign to Slider'
      applyButton
      applyButtonLabel='Apply'
      onApplyButtonClick={action('onApplyButtonClick')}
    />
  );
};

export const RenderInput = () => {
  return (
    <Select
      defaultValue={2}
      renderInput={({ value, isMenuOpen }) => (
        <>
          <span style={{ color: '#505D6E', letterSpacing: '.14rem', fontSize: '1.4rem', height: '1.7rem' }}>
            {value.label}
          </span>
          <span
            style={{
              color: '#505D6E',
              width: '2.4rem',
              height: '2.4rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transform: isMenuOpen ? 'rotate(0deg)' : 'rotate(180deg)'
            }}>
            <svg xmlns='http://www.w3.org/2000/svg' width='1rem' viewBox='0 0 10 5' fill='currentColor'>
              <path d='M.122,4.383,4.657.123a.572.572,0,0,1,.71,0l4.512,4.26c.273.239.056.617-.355.617H.476C.066,5-.152,4.622.122,4.383Z' />
            </svg>
          </span>
        </>
      )}
      isSearchable={false}
      onChange={action('onChange')}
      color={getColorKnobs()}
      options={object('dropdownOptions', [
        {
          label: 'Row per page: 20',
          value: 2
        },
        {
          label: 'Row per page: 30',
          value: 3
        },
        {
          label: 'Row per page: 40',
          value: 4
        }
      ])}
    />
  );
};

export const TreeView = () => {
  const [value, setValue] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      // setValue();
    }, 1500);
  }, []);

  return (
    <Select
      onChange={action('onChange')}
      onBlur={action('onBlur')}
      isSearchable
      isDisabled={boolean('isDisabled', false)}
      isTree
      treeData={[
        {
          name: 'Document 1',
          id: '1',
          children: [
            {
              name: 'Document 1-2',
              id: '1-1',
              children: [
                {
                  name: 'Document 1-2',
                  id: '1-2',
                  children: [
                    {
                      name: 'Document 1-2',
                      id: '1-1-2',
                      children: [
                        {
                          name: 'Document 1-2',
                          id: '1-2',
                          children: [
                            {
                              name: 'Document 1-2',
                              id: '1-1-2',
                              children: [
                                {
                                  name: 'Document 1-2',
                                  id: '1-2',
                                  children: [
                                    {
                                      name: 'Document 1-2Document 1-2Document 1-2Document 1-2Document 1-2Document 1-2',
                                      id: '1-1-2'
                                    }
                                  ]
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              name: 'Document 1-2',
              id: '1-2',
              children: [
                {
                  name: 'Document 1-2',
                  id: '1-2-1',
                  children: [
                    {
                      name: 'Document 1-2',
                      id: '1-2-2'
                    }
                  ]
                }
              ]
            },
            {
              name: 'Document 1-3',
              id: '1-3'
            },
            {
              name: 'Document 1-4',
              id: '1-4'
            }
          ]
        }
      ]}
      value={value}
    />
  );
};

export const Test = () => {
  const [isMulti, setIsMulti] = useState(false);
  const [value, setValue] = useState(null);

  return (
    <>
      <Select
        options={[
          {
            label: 'Test1',
            value: 1
          },
          {
            label: 'Test2',
            value: 2
          }
        ]}
        isMulti={isMulti}
        inputLabel='inputLabel'
        value={!isMulti ? value : value ? (Array.isArray(value) ? value : [value]) : []}
        onChange={(value) => {
          setValue(value);
        }}
      />

      <button
        type='button'
        onClick={() => {
          setIsMulti(!isMulti);

          if (!isMulti) setValue([]);
        }}>
        Toggle multi
      </button>
    </>
  );
};
