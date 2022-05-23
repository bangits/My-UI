import { action } from '@storybook/addon-actions';
import { number, object, optionsKnob, withKnobs } from '@storybook/addon-knobs';
import React from 'react';
import Tab from './Tab';

export default {
  component: Tab,
  decorators: [withKnobs],
  title: 'components/Tab/Tab'
};

export const Default = () => {
  return (
    <Tab
      options={object('options', [
        { title: 'Game Information', value: 1 },
        { title: 'Game Properties', value: 2 },
        { title: 'Game Details', value: 3 },
        { title: 'Game ID', value: 4 },
        { title: 'Game Name', value: 5 },
        { title: 'Game Image', value: 6 },
        { title: 'Game Data', value: 7 }
      ])}
      defaultValue={number('defaultValue', 2)}
      onChange={action('onChange')}
      variant={optionsKnob(
        'variant',
        {
          default: 'default',
          bordered: 'bordered'
        },
        'default',
        {
          display: 'inline-radio'
        }
      )}
    />
  );
};
