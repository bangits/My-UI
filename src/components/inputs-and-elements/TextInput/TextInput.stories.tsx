import { action } from '@storybook/addon-actions';
import { text, withKnobs } from '@storybook/addon-knobs';
import { ComponentMeta } from '@storybook/react';
import TextInputs from './TextInput';

export default {
  component: TextInputs,
  decorators: [withKnobs],
  title: 'components/Inputs And Elements/Text Input'
} as ComponentMeta<typeof TextInputs>;

export const Default = () => <TextInputs>{text('Text', 'Hello from design system')}</TextInputs>;
