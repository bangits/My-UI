import { useState } from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { TimePicker, TimePickerValue } from './TimePicker';

export default {
  title: 'components/TimePicker',
  component: TimePicker,
  decorators: [withKnobs]
};

export const InputUploader = () => {
  const [value, setValue] = useState<TimePickerValue>({
    hour: '25',
    minutes: '59',
    seconds: '59'
  });

  return (
    <div style={{ marginTop: 7 }}>
      <TimePicker
        color='danger'
        label='Time Picker'
        value={value}
        onChange={(value) => {
          console.log(value);
        }}
      />
    </div>
  );
};
