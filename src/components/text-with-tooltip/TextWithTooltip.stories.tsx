import { text, withKnobs } from '@storybook/addon-knobs';
import { ComponentMeta } from '@storybook/react';
import TextWithTooltip from './TextWithTooltip';

export default {
  component: TextWithTooltip,
  decorators: [withKnobs],
  title: 'components/Typography/TextWithTooltip'
} as ComponentMeta<typeof TextWithTooltip>;

export const Default = () => (
  <TextWithTooltip>{text('children', 'H1: The quick brown fox jumps over the lazy dog')}</TextWithTooltip>
);
