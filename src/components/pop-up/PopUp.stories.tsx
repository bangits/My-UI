import { number, withKnobs } from '@storybook/addon-knobs';
import React from 'react';
import PopUp from './PopUp';

export default {
  component: PopUp,
  decorators: [withKnobs],
  title: 'components/PopUp/PopUp'
};

export const Default = () => {
  return <PopUp></PopUp>;
};
