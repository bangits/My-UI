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
    <div style={{ display: 'flex', position: 'relative', top: 0, left: 0 }}>
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
            isActive: true,
            subItems: [
              { label: 'Sub Menu Item', isActive: true },
              { label: 'Sub Menu Item' },
              { label: 'Sub Menu Item' },
              { label: 'Sub Menu Item' }
            ],
            icon: <HomeIcon width='1.8rem' />
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
            icon: <HomeIcon width='1.8rem' />
          },
          { label: 'Players', icon: <HomeIcon width='1.8rem' /> },
          { label: 'Games', isActive: true, icon: <HomeIcon width='1.8rem' /> },
          { label: 'Resources', icon: <HomeIcon width='1.8rem' /> },
          { label: 'Providers', icon: <HomeIcon width='1.8rem' /> },
          { label: 'Partners', icon: <HomeIcon width='1.8rem' /> },
          { label: 'Module', icon: <HomeIcon width='1.8rem' /> },
          { label: 'Module', icon: <HomeIcon width='1.8rem' /> },
          { label: 'Module', icon: <HomeIcon width='1.8rem' /> },
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
            icon: <HomeIcon width='1.8rem' />
          }
        ]}
      />
      <Typography variant='h1'>Sidebar Component</Typography>
    </div>
  );
};
