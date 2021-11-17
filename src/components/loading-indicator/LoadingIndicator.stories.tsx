import { number, withKnobs, optionsKnob } from '@storybook/addon-knobs';
import React from 'react';
import LoadingIndicator from './LoadingIndicator';

export default {
  component: LoadingIndicator,
  decorators: [withKnobs],
  title: 'components/LoadingIndicator/LoadingIndicator'
};

export const Default = () => {
  return (
    <LoadingIndicator
      percent={number('percent', 75)}
      variant={optionsKnob(
        'variant',
        {
          circle: 'circle',
          square: 'square'
        },
        'circle',
        {
          display: 'inline-radio'
        }
      )}
    />
  );
};
