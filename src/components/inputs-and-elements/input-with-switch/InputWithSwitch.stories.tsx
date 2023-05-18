import { withKnobs } from '@storybook/addon-knobs';
import { InputWithSwitch } from './InputWithSwitch';
import { useState } from 'react';

export default {
  title: 'components/Inputs And Elements/Input With Switch',
  component: InputWithSwitch,
  decorators: [withKnobs]
};

const options = [
  { id: 1, label: 'Fixed' },
  { id: 2, label: '%' }
];

export const Default = () => {
  const [inputValue, setInputValue] = useState('');
  const [switchValue, setSwitchValue] = useState(1);

  return (
    <InputWithSwitch
      inputProps={{ label: 'Monthly fee', type: 'number' }}
      inputValue={inputValue}
      switchValue={switchValue}
      switchOptions={options}
      onSwitchChange={(value) => setSwitchValue(value)}
      onInputChange={(value) => setInputValue(value)}
    />
  );
};
