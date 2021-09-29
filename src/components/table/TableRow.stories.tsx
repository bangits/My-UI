import { withKnobs } from '@storybook/addon-knobs';
import React from 'react';
import { TableCell } from './TableCell';
import TableRow from './TableRow';

export default {
  component: TableRow,
  decorators: [withKnobs],
  title: 'components/Table/Table Row'
};

export const Default = () => {
  return (
    <TableRow hover>
      <TableCell>ID44584219</TableCell>
    </TableRow>
  );
};
