import { number, withKnobs } from '@storybook/addon-knobs';
import React from 'react';
import Pagination from './Pagination';

export default {
  component: Pagination,
  decorators: [withKnobs],
  title: 'components/Pagination/Pagination'
};

export const Default = () => {
  return <Pagination />;
};
