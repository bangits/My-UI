import { action } from '@storybook/addon-actions';
import { text, withKnobs } from '@storybook/addon-knobs';
import { ComponentMeta } from '@storybook/react';
import Checkbox from './Checkbox';

export default {
  component: Checkbox,
  decorators: [withKnobs],
  title: 'components/Inputs And Elements/Checkbox'
} as ComponentMeta<typeof Checkbox>;

export const Default = () => <Checkbox></Checkbox>;
