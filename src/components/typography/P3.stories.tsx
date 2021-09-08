import { action } from '@storybook/addon-actions';
import { text, withKnobs } from '@storybook/addon-knobs';
import { ComponentMeta } from '@storybook/react';
import Typography from './Typography';

export default {
  component: Typography,
  decorators: [withKnobs],
  title: 'components/Typography/P3'
} as ComponentMeta<typeof Typography>;

export const Default = () => <Typography>P3: The quick brown fox jumps over the lazy dog</Typography>;