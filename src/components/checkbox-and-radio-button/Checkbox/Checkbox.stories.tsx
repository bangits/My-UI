import { withKnobs } from '@storybook/addon-knobs';
import { ComponentMeta } from '@storybook/react';
import Checkbox from './Checkbox';

export default {
  component: Checkbox,
  decorators: [withKnobs],
  title: 'components/Checkbox and Radio Button/Checkbox'
} as ComponentMeta<typeof Checkbox>;

export const Default = () => <Checkbox defaultChecked  />;
