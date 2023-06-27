import { useState } from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { InputTimePicker, TimePickerValue } from './InputTimePicker';

export default {
  title: 'components/Others/InputTimePicker',
  component: InputTimePicker,
  decorators: [withKnobs]
};

export const InputUploader = () => {
  const [value, setValue] = useState<TimePickerValue>({
    hour: '22',
    minutes: '59',
    seconds: '59'
  });

  return (
    <div style={{ marginTop: 7 }}>
      <InputTimePicker label='Time Picker' />
    </div>
  );
};
