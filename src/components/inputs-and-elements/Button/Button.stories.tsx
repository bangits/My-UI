import { action } from '@storybook/addon-actions';
import { text, withKnobs } from '@storybook/addon-knobs';
import { ComponentMeta } from '@storybook/react';
import Button from './Button';

export default {
  component: Button,
  decorators: [withKnobs],
  title: 'components/Inputs And Elements/Button'
} as ComponentMeta<typeof Button>;

export const Default = () => <Button onClick={action('onClick')}>{text('Text', 'Hello from design system')}</Button>;
