import { getComponentName } from '@/configs';
import { COLOR_TYPES } from '@/types';
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
    color={optionsKnob('checkboxColor', COLOR_TYPES, COLOR_TYPES.PRIMARY, {
      display: 'inline-radio'
    })}
    defaultChecked
    disabled={boolean('disabled', false)}
  />
);
