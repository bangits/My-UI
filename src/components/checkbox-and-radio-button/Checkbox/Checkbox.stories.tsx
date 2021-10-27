import { getComponentName } from '@/configs';
import { boolean, withKnobs } from '@storybook/addon-knobs';
import { ComponentMeta } from '@storybook/react';
import Checkbox from './Checkbox';

export default {
  component: Checkbox,
  decorators: [withKnobs],
  title: getComponentName('CHECKBOX_AND_RADIO', 'Checkbox')
} as ComponentMeta<typeof Checkbox>;

export const Default = () => <Checkbox defaultChecked disabled={boolean('disabled', false)} />;
