import { number, withKnobs } from '@storybook/addon-knobs';
import React from 'react';
import LoadingIndicator from './LoadingIndicator';

export default {
  component: LoadingIndicator,
  decorators: [withKnobs],
  title: 'components/LoadingIndicator/LoadingIndicator'
};

export const Default = () => {
  return <LoadingIndicator></LoadingIndicator>;
};
