import { HomeIcon } from '@/icons';
import { withKnobs } from '@storybook/addon-knobs';
import React from 'react';
import MenuItem from './MenuItem';

export default {
  component: MenuItem,
  decorators: [withKnobs],
  title: 'components/Sidebar/Menu Item'
};

export const Default = () => {
  return (
    <>
      <MenuItem label='Games' isActive icon={<HomeIcon />} isSidebarOpened={true} />
      <MenuItem label='Games' icon={<HomeIcon />} isSidebarOpened={true} />
      <MenuItem label='Games' icon={<HomeIcon />} isSidebarOpened={true} />
      <MenuItem label='Games' icon={<HomeIcon />} isSidebarOpened={true} />
      <MenuItem label='Games' icon={<HomeIcon />} isSidebarOpened={true} />
      <MenuItem label='Games' icon={<HomeIcon />} isSidebarOpened={true} />
    </>
  );
};
