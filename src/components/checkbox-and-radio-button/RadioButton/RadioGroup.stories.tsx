import { withKnobs } from '@storybook/addon-knobs';
import React from 'react';
import RadioButton from './RadioButton';
import RadioGroup from './RadioGroup';

export default {
  component: RadioGroup,
  decorators: [withKnobs],
  subcomponents: { RadioButton },
  title: 'components/Checkbox and Radio Button/Radio Group'
};

export const DefaultRadioGroup = () => {
  return (
    <RadioGroup defaultValue='female'>
      <RadioButton value='male' label='Male' style={{ marginBottom: 5 }} />
      <RadioButton value='female' label='Female' style={{ marginBottom: 5 }} />
      <RadioButton value='other' label='Other' />
    </RadioGroup>
  );
};
