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
        { title: 'Player Details', value: 1, badgeCount: 1 },
        { title: 'Player KPIs', value: 2, badgeCount: 15 },
        { title: 'Documents', value: 3, badgeCount: 0 },
        { title: 'Messages', value: 4, badgeCount: 345 },
        { title: 'Notes', value: 5, badgeCount: 99 }
      ])}
      defaultValue={number('defaultValue', 2)}
      onChange={action('onChange')}
    />
  );
};