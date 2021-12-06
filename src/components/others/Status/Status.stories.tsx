import { optionsKnob, text, withKnobs } from '@storybook/addon-knobs';
import React from 'react';
import Status from './Status';
import STATUS_TYPES from './status-types';

export default {
  component: Status,
  decorators: [withKnobs],
  title: 'components/Others/Status'
};

export const Default = () => {
  return (
    <>
      <Status
        variant={optionsKnob('variant', STATUS_TYPES, STATUS_TYPES.ACTIVE, { display: 'inline-radio' }, 'active')}>
        {text('children', 'Active')}
      </Status>
    </>
  );
};
