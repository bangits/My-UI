import { HomeIcon } from '@/icons';
import { Typography } from '@/my-ui-core';
import { number, optionsKnob, text, withKnobs } from '@storybook/addon-knobs';
import React from 'react';
import Sidebar from './Sidebar';
import { SidebarPositions } from './sidebar-types';

export default {
  component: Sidebar,
  decorators: [withKnobs],
  title: 'components/Navigation/Sidebar'
};

export const Default = () => {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar
        logoSrc={text('logoSrc', 'https://pbs.twimg.com/profile_images/1220044684791308288/xGeuSMdZ.jpg')}
        position={optionsKnob('position', SidebarPositions, SidebarPositions.static, {
          display: 'inline-radio'
        })}
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
      <Typography variant='h1'>Sidebar Component</Typography>
    </div>
  );
};
