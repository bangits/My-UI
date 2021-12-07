import { number, withKnobs } from '@storybook/addon-knobs';
import React from 'react';
import CheckboxCircle from './CheckboxCircle';

export default {
  component: CheckboxCircle,
  decorators: [withKnobs],
  title: 'components/CheckboxCircle/CheckboxCircle'
};

export const Default = () => {
  return <CheckboxCircle />;
};
