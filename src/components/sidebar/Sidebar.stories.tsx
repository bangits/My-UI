import { HomeIcon } from '@/icons';
import { number, text, withKnobs } from '@storybook/addon-knobs';
import React from 'react';
import Sidebar from './Sidebar';

export default {
  component: Sidebar,
  decorators: [withKnobs],
  title: 'components/Sidebar/Sidebar'
};

export const Default = () => {
  return (
    <Sidebar
      logoSrc={text('logoSrc', 'https://pbs.twimg.com/profile_images/1220044684791308288/xGeuSMdZ.jpg')}
      position='fixed'
      width={number('width', 21.5)}
      collapsedWidth={number('collapsedWidth', 7.2)}
      menuItems={[
        {
          label: 'Dashboard',
          subItems: [
            { label: 'Sub Menu Item' },
            { label: 'Sub Menu Item' },
            { label: 'Sub Menu Item' },
            { label: 'Sub Menu Item' }
          ],
          icon: <HomeIcon />
        },
        {
          label: 'User Management',
          subItems: [
            { label: 'Sub Menu Item' },
            { label: 'Sub Menu Item' },
            { label: 'Sub Menu Item' },
            { label: 'Sub Menu Item' },
            { label: 'Sub Menu Item' },
            { label: 'Sub Menu Item' },
            { label: 'Sub Menu Item' },
            { label: 'Sub Menu Item' },
            { label: 'Sub Menu Item' },
            { label: 'Sub Menu Item' },
            { label: 'Sub Menu Item' },
            { label: 'Sub Menu Item' }
          ],
          icon: <HomeIcon />
        },
        { label: 'Players', icon: <HomeIcon /> },
        { label: 'Games', isActive: true, icon: <HomeIcon /> },
        { label: 'Resources', icon: <HomeIcon /> },
        { label: 'Providers', icon: <HomeIcon /> },
        { label: 'Partners', icon: <HomeIcon /> },
        { label: 'Module', icon: <HomeIcon /> },
        { label: 'Module', icon: <HomeIcon /> },
        { label: 'Module', icon: <HomeIcon /> },
        {
          label: 'Module',
          subItems: [
            { label: 'Sub Menu Item' },
            { label: 'Sub Menu Item' },
            { label: 'Sub Menu Item' },
            { label: 'Sub Menu Item' },
            { label: 'Sub Menu Item' },
            { label: 'Sub Menu Item' },
            { label: 'Sub Menu Item' },
            { label: 'Sub Menu Item' },
            { label: 'Sub Menu Item' },
            { label: 'Sub Menu Item' },
            { label: 'Sub Menu Item' },
            { label: 'Sub Menu Item' }
          ],
          icon: <HomeIcon />
        }
      ]}
    />
  );
};
