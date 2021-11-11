import { number, withKnobs } from '@storybook/addon-knobs';
import React from 'react';
import Tooltip from './Tooltip';

export default {
  component: Tooltip,
  decorators: [withKnobs],
  title: 'components/Tooltip/Tooltip'
};

export const Default = () => {
  return <Tooltip></Tooltip>;
};
