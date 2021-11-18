import { Button } from '@/my-ui-core';
import { COLOR_TYPES } from '@/types';
import { optionsKnob, text, withKnobs } from '@storybook/addon-knobs';
import React from 'react';
import Tooltip from './Tooltip';

export default {
  component: Tooltip,
  decorators: [withKnobs],
  title: 'components/Tooltip/Tooltip'
};

export const Default = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: 500 }}>
      <Tooltip
        text={text('text', 'tooltip')}
        placement={optionsKnob(
          'placement',
          {
            bottom: 'bottom',
            top: 'top',
            left: 'left',
            right: 'right'
          },
          'bottom',
          {
            display: 'inline-radio'
          }
        )}
        color={optionsKnob('color', COLOR_TYPES, COLOR_TYPES.PRIMARY, {
          display: 'inline-radio'
        })}>
        <Button>Hover me</Button>
      </Tooltip>
    </div>
  );
};
