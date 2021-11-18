import { getComponentName } from '@/configs';
import { boolean, optionsKnob, withKnobs } from '@storybook/addon-knobs';
import { ComponentMeta } from '@storybook/react';
import Checkbox from './Checkbox';

export default {
  component: Checkbox,
  decorators: [withKnobs],
  title: getComponentName('CHECKBOX_AND_RADIO', 'Checkbox')
} as ComponentMeta<typeof Checkbox>;

export const Default = () => (
  <Checkbox
    color={optionsKnob(
      'color',
      {
        danger: 'danger',
        warning: 'warning',
        success: 'success',
        primary: 'primary'
      },
      'primary',
      {
        display: 'inline-radio'
      }
    )}
    defaultChecked
    disabled={boolean('disabled', false)}
  />
);
