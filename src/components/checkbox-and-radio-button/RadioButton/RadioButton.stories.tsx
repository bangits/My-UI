import { boolean, text, withKnobs } from '@storybook/addon-knobs';
import React from 'react';
import RadioButton from './RadioButton';

export default {
  component: RadioButton,
  decorators: [withKnobs],
  title: 'components/Checkbox and Radio Button/Radio Button'
};

export const DefaultRadio = () => {
  return <RadioButton value='default' label={text('label', 'Default')} disabled={boolean('disabled', false)}  />;
};
