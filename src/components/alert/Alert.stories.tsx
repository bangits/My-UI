import { number, withKnobs } from '@storybook/addon-knobs';
import React from 'react';
import Alert from './Alert';

export default {
  component: Alert,
  decorators: [withKnobs],
  title: 'components/Alert/Alert'
};

export const Default = () => {
  return <Alert></Alert>;
};
