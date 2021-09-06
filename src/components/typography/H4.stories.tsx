import { action } from '@storybook/addon-actions';
import { text, withKnobs } from '@storybook/addon-knobs';
import { ComponentMeta } from '@storybook/react';
import Typography from './Typography';

export default {
  component: Typography,
  decorators: [withKnobs],
  title: 'components/Typography/H4'
} as ComponentMeta<typeof Typography>;

export const Default = () => <Typography>H4: The quick brown fox jumps over the lazy dog</Typography>;
