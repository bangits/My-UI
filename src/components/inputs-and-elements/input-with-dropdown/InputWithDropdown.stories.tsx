import { action } from '@storybook/addon-actions';
import { object, withKnobs } from '@storybook/addon-knobs';
import React, { useEffect, useState } from 'react';
import InputWithDropdown from './InputWithDropdown';

export default {
  title: 'components/Inputs And Elements/Input With Dropdown',
  component: InputWithDropdown,
  decorators: [withKnobs]
};

export const Default = () => {
  const [options, setOptions] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setOptions([
        {
          label: '+374',
          value: 2
        },
        {
          label: '+375',
          value: 3
        },
        {
          label: '+376',
          value: 4
        },
        {
          label: '+7',
          value: 5
        },
        {
          label: '+886',
          value: 6
        },
        {
          label: '+512',
          value: 7
        },
        {
          label: '+224',
          value: 8
        },
        {
          label: '+612',
          value: 9
        },
        {
          label: '+123',
          value: 10
        }
      ]);
    }, 2000);
  }, []);

  return (
    <InputWithDropdown
      onInputChange={action('onInputChange')}
      onDropdownChange={action('onDropdownChange')}
      dropdownInputProps={object('dropdownInputProps', {
        type: 'number'
      })}
      dropdownProps={{
        noOptionsMessage: ({ inputValue }) => (!inputValue ? '' : 'Try Again'),
        options: options,
        value: 2
      }}
      inputProps={{
        label: 'Mobile Number',
        type: 'number'
      }}
    />
  );
};
