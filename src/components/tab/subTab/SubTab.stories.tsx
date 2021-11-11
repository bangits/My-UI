import { action } from '@storybook/addon-actions';
import { number, object, withKnobs } from '@storybook/addon-knobs';
import React from 'react';
import SubTab from './SubTab';

export default {
  component: SubTab,
  decorators: [withKnobs],
  title: 'components/Tab/SubTab'
};

export const Default = () => {
  return (
    <SubTab
      options={object('options', [
        { title: 'Player Details', value: 1, count: 1 },
        { title: 'Player KPIs', value: 2, count: 15 },
        { title: 'Documents', value: 3, count: 0 },
        { title: 'Messages', value: 4, count: 345 },
        { title: 'Notes', value: 5, count: 0 },
        { title: 'Game Image', value: 6, count: 1 },
        { title: 'Game Data', value: 7, count: 999 },
        { title: 'Game Name', value: 8, count: 99999 }
      ])}
      defaultValue={number('defaultValue', 2)}
      onChange={action('onChange')}
    />
  );
};
