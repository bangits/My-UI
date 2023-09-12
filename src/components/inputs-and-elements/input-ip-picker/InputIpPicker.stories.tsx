import { withKnobs } from '@storybook/addon-knobs';
import { InputIpPicker } from './InputIpPicker';
import { useState } from 'react';

export default {
  component: InputIpPicker,
  decorators: [withKnobs],
  title: 'components/Inputs And Elements/Input Ip Picker'
};

export const Default = () => {
  const [value, setValue] = useState('138');

  return (
    <div style={{ width: '234px' }}>
      <InputIpPicker onChange={(value) => setValue(value)} value={value} label='IP Address' />
    </div>
  );
};
