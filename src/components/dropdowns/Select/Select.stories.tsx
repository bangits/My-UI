import { Select } from '@/components';
import { getColorKnobs } from '@/configs';
import { FilterIcon } from '@/icons';
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
  const [value, setValue] = useState(2);

  useEffect(() => {
    setTimeout(() => {
      setValue(null);
    }, 2000);
  }, []);

  return (
    <>
      <Select
        value={value}
        onChange={setValue}
        inputLabel={text('inputLabelSingle', 'Single Select...')}
        isSearchable
        maxLength={number('maxLengthSingleSelect', 20)}
        color={getColorKnobs()}
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
        color={getColorKnobs()}
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

      {/* SELECT TREE */}
      {/* <div className={classNames(styles['Select-Tree'], `${getMyUIPrefix()}-Select-Tree`)}> */}
      <Select
        menuIsOpen
        value={value}
        onChange={setValue}
        inputLabel={text('inputLabelSingle', 'Single Select...')}
        isSearchable
        maxLength={number('maxLengthSingleSelect', 20)}
        color={getColorKnobs()}
        options={object('options3', [
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
      <div className='react-select__menu css-aey3sy-Menu' id='react-select-4-listbox'>
        <div className='react-select__menu-list css-1atlt6n-MenuList'>
          <div
            className='K9BBSDk_idl7G44NXGsr'
            style={{
              position: 'relative',
              overflow: 'hidden',
              width: '100%',
              height: 'auto',
              minHeight: '0px',
              maxHeight: '28.8rem'
            }}>
            <div
              style={{
                position: 'relative',
                overflow: 'scroll',
                marginRight: '-17px',
                marginBottom: '-17px',
                minHeight: '17px',
                maxHeight: 'calc(28.8rem + 17px)'
              }}></div>
          </div>
        </div>
      </div>
      {/* </div> */}
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
      />

      <Select
        clearButtonLabel={text('clearButtonLabel', 'Clear')}
        inputLabel={text('inputLabelMulti', 'Multi Select...')}
        maxLength={number('maxLengthMultiSelect', 50)}
        inputSelectedLabel={text('inputSelectedLabel', 'Selected ')}
        explanation={text('explanation', '')}
        color={getColorKnobs()}
        isMulti={boolean('isMulti', true)}
        options={object('multiSelectOptions2', [])}
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
          label: 'Subtype',
          value: 11
        }
      ]}
      selectAll
      selectAllLabel='All'
    />
  );
};

export const RenderInput = () => {
  return (
    <Select
      defaultValue={2}
      renderInput={(value, isMenuOpen) => (
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
            <svg xmlns='http://www.w3.org/2000/svg' width='12' height='6' viewBox='0 0 10 5'>
              <path
                id='Shape'
                d='M.122,4.383,4.657.123a.572.572,0,0,1,.71,0l4.512,4.26c.273.239.056.617-.355.617H.476C.066,5-.152,4.622.122,4.383Z'
                fill='currentColor'
              />
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
  const [treeValue, setTreeValue] = useState<number | string>();

  /*  console.log(treeValue);
   */

  return (
    <Select
      onChange={(value) => console.log(value)}
      menuIsOpen
      isSearchable
      isTree
      treeData={[
        {
          label: 'Document 1',
          value: '1',
          children: [
            {
              label: 'Document 1-2',
              value: '1-1',
              children: [
                {
                  label: 'Document 1-2',
                  value: '1-2',
                  children: [
                    {
                      label: 'Document 1-2',
                      value: '1-1-2',
                      children: [
                        {
                          label: 'Document 1-2',
                          value: '1-2',
                          children: [
                            {
                              label: 'Document 1-2',
                              value: '1-1-2',
                              children: [
                                {
                                  label: 'Document 1-2',
                                  value: '1-2',
                                  children: [
                                    {
                                      label: 'Document 1-2',
                                      value: '1-1-2'
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
              label: 'Document 1-2',
              value: '1-2',
              children: [
                {
                  label: 'Document 1-2',
                  value: '1-2-1',
                  children: [
                    {
                      label: 'Document 1-2',
                      value: '1-2-2'
                    }
                  ]
                }
              ]
            },
            {
              label: 'Document 1-3',
              value: '1-3'
            },
            {
              label: 'Document 1-4',
              value: '1-4'
            }
          ]
        },
        {
          label: 'Document 2',
          value: '2',
          children: [
            {
              label: 'Document 2-1',
              value: '2-1',
              children: [
                {
                  label: 'Document 2-1',
                  value: '2-1-1',
                  children: [
                    {
                      label: 'Document 2-1',
                      value: '2-1-2'
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          label: 'Document 1',
          value: '1',
          children: [
            {
              label: 'Document 1-2',
              value: '1-1',
              children: [
                {
                  label: 'Document 1-2',
                  value: '1-2',
                  children: [
                    {
                      label: 'Document 1-2',
                      value: '1-1-2',
                      children: [
                        {
                          label: 'Document 1-2',
                          value: '1-2',
                          children: [
                            {
                              label: 'Document 1-2',
                              value: '1-1-2',
                              children: [
                                {
                                  label: 'Document 1-2',
                                  value: '1-2',
                                  children: [
                                    {
                                      label: 'Document 1-2',
                                      value: '1-1-2'
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
              label: 'Document 1-2',
              value: '1-2',
              children: [
                {
                  label: 'Document 1-2',
                  value: '1-2-1',
                  children: [
                    {
                      label: 'Document 1-2',
                      value: '1-2-2'
                    }
                  ]
                }
              ]
            },
            {
              label: 'Document 1-3',
              value: '1-3'
            },
            {
              label: 'Document 1-4',
              value: '1-4'
            }
          ]
        },
        {
          label: 'New Document 1 Document 1 Document 1 Document 1 Document 1 Document 1',
          value: '145454',
          children: [
            {
              label: 'Document 1-2',
              value: '1-1',
              children: [
                {
                  label: 'Document 1-2',
                  value: '1-2',
                  children: [
                    {
                      label: 'Document 1-2',
                      value: '1-1-2',
                      children: [
                        {
                          label: 'Document 1-2',
                          value: '1-2',
                          children: [
                            {
                              label: 'Document 1-2',
                              value: '1-1-2',
                              children: [
                                {
                                  label: 'Document 1-2',
                                  value: '1-2',
                                  children: [
                                    {
                                      label: 'Document 1-2',
                                      value: '1-1-2'
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
              label: 'Document 1-2',
              value: '1-2',
              children: [
                {
                  label: 'Document 1-2',
                  value: '1-2-1',
                  children: [
                    {
                      label: 'Document 1-2',
                      value: '1-2-2'
                    }
                  ]
                }
              ]
            },
            {
              label: 'Document 1-3',
              value: '1-3'
            },
            {
              label: 'Document 1-4',
              value: '1-4'
            }
          ]
        },
        {
          label: 'Document 2',
          value: '2',
          children: [
            {
              label: 'Document 2-1',
              value: '2-1',
              children: [
                {
                  label: 'Document 2-1',
                  value: '2-1-1',
                  children: [
                    {
                      label: 'Document 2-1',
                      value: '2-1-2'
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          label: 'Document 1',
          value: '1',
          children: [
            {
              label: 'Document 1-2',
              value: '1-1',
              children: [
                {
                  label: 'Document 1-2',
                  value: '1-2',
                  children: [
                    {
                      label: 'Document 1-2',
                      value: '1-1-2',
                      children: [
                        {
                          label: 'Document 1-2',
                          value: '1-2',
                          children: [
                            {
                              label: 'Document 1-2',
                              value: '1-1-2',
                              children: [
                                {
                                  label: 'Document 1-2',
                                  value: '1-2',
                                  children: [
                                    {
                                      label: 'Document 1-2',
                                      value: '1-1-2'
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
              label: 'Document 1-2',
              value: '1-2',
              children: [
                {
                  label: 'Document 1-2',
                  value: '1-2-1',
                  children: [
                    {
                      label: 'Document 1-2',
                      value: '1-2-2'
                    }
                  ]
                }
              ]
            },
            {
              label: 'Document 1-3',
              value: '1-3'
            },
            {
              label: 'Document 1-4',
              value: '1-4'
            }
          ]
        }
      ]}
    />
  );
};
