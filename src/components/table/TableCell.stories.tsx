import { withKnobs } from '@storybook/addon-knobs';
import React from 'react';
import TableCell from './TableCell';

export default {
  component: TableCell,
  decorators: [withKnobs],
  title: 'components/Table/Table Cell'
};

export const Default = () => {
  return <TableCell align='center'>20Burning Hot</TableCell>;
};
