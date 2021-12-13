import { withKnobs } from '@storybook/addon-knobs';
import React from 'react';
import TimePicker from './TimePicker';

export default {
  component: TimePicker,
  decorators: [withKnobs],
  title: 'components/Others/TimePicker'
};

export const Default = () => {
  return (
    <>
      <TimePicker />
    </>
  );
};
