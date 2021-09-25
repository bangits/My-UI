import { withKnobs } from '@storybook/addon-knobs';
import React from 'react';
import Status from './Status';

export default {
  component: Status,
  decorators: [withKnobs],
  title: 'components/Status/Status'
};

export const Default = () => {
  return (
    <>
      <Status variant="active">Active</Status>

      <h1></h1>

      <Status variant='blocked'>Blocked</Status>
    </>
  );
};
