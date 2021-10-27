import { getComponentName } from '@/configs';
import { withKnobs } from '@storybook/addon-knobs';
import React from 'react';
import RadioButton from './RadioButton';
import RadioGroup from './RadioGroup';

export default {
  component: RadioGroup,
  decorators: [withKnobs],
  subcomponents: { RadioButton },
  title: getComponentName('CHECKBOX_AND_RADIO', 'Radio Group')
};

export const DefaultRadioGroup = () => {
  return (
    <RadioGroup defaultValue='female'>
      <RadioButton value='male' style={{ marginBottom: 5 }} />
      <RadioButton value='female' style={{ marginBottom: 5 }} />
      <RadioButton value='other' />
    </RadioGroup>
  );
};
