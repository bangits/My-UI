import { withKnobs } from '@storybook/addon-knobs';
import React from 'react';
import BrowsersCard from './BrowsersCard';

export default {
  component: BrowsersCard,
  decorators: [withKnobs],
  title: 'components/Others/Browsers Card'
};

export const Default = () => {
  return <BrowsersCard />;
};
