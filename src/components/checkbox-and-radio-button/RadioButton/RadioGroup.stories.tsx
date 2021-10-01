import { withKnobs } from '@storybook/addon-knobs';
import React from 'react';
import RadioGroup from './RadioGroup';
import RadioButton from './RadioButton';

export default {
  component: RadioGroup,
  subcomponents: { RadioButton },
  decorators: [withKnobs],
  title: 'components/Checkbox and Radio Button/Radio Group'
};

export const DefaultRadioGroup = () => {
  return (
    <RadioGroup defaultValue='female'>
      <RadioButton value='male' label='Male' />
      <RadioButton value='female' label='Female' />
      <RadioButton value='other' label='Other' />
    </RadioGroup>
  );
};
