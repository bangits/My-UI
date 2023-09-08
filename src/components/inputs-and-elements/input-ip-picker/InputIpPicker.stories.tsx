import { withKnobs } from '@storybook/addon-knobs';
import { InputIpPicker } from './InputIpPicker';
import { useState } from 'react';

export default {
  component: InputIpPicker,
  decorators: [withKnobs],
  title: 'components/Inputs And Elements/Input Ip Picker'
};

export const Default = () => {
  const [value, setValue] = useState('');
  console.log(value);

  return <InputIpPicker onChange={(value) => setValue(value)} value={value} label='IP Address' />;
};
