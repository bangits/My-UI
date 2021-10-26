import { getComponentName } from '@/configs';
import { boolean, withKnobs } from '@storybook/addon-knobs';
import React from 'react';
import RadioButton from './RadioButton';

export default {
  component: RadioButton,
  decorators: [withKnobs],
  title: getComponentName('CHECKBOX_AND_RADIO', 'Radio Button')
};

export const DefaultRadio = () => {
  return <RadioButton value='default' disabled={boolean('disabled', false)} />;
};
