import { number, withKnobs } from '@storybook/addon-knobs';
import React from 'react';
import Loader from './Loader';

export default {
  component: Loader,
  decorators: [withKnobs],
  title: 'components/Loader/Loader'
};

export const Default = () => {
  return <Loader></Loader>;
};
