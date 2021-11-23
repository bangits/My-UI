import { Button } from '@/my-ui-core';
import { number, withKnobs, text, optionsKnob } from '@storybook/addon-knobs';
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
        showEvent={optionsKnob(
          'showEvent',
          {
            click: 'click',
            hover: 'hover'
          },
          'click',
          {
            display: 'inline-radio'
          }
        )}
        color={optionsKnob(
          'color',
          {
            danger: 'danger',
            warning: 'warning',
            success: 'success',
            primary: 'primary'
          },
          'primary',
          {
            display: 'inline-radio'
          }
        )}>
        <Button>Hover me</Button>
      </Tooltip>
    </div>
  );
};
