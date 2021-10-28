import { number, withKnobs } from '@storybook/addon-knobs';
import React from 'react';
import Tab from './Tab';

export default {
  component: Tab,
  decorators: [withKnobs],
  title: 'components/Tab/Tab'
};

export const Default = () => {
  return <Tab />;
};
