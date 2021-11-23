import { getComponentName } from '@/configs';
import { COLOR_TYPES } from '@/types';
import { boolean, optionsKnob, withKnobs } from '@storybook/addon-knobs';
import React from 'react';
import RadioButton from './RadioButton';
import { getColorKnobs } from '@/configs';

export default {
  component: RadioButton,
  decorators: [withKnobs],
  title: getComponentName('CHECKBOX_AND_RADIO', 'Radio Button')
};

export const DefaultRadio = () => {
  return <RadioButton color={getColorKnobs()} value='default' disabled={boolean('disabled', false)} />;
};
