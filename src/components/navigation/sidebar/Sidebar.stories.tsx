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
        width={number('width', 24)}
        collapsedWidth={number('collapsedWidth', 7.2)}
        bottomContent={(isSidebarOpened) => <Typography variant='p4'>Bottom Component</Typography>}
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
            icon: <HomeIcon width='1.8rem' fill='currentColor' />
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
            icon: <HomeIcon width='1.8rem' fill='currentColor' />
          },
          { label: 'Players', icon: <HomeIcon width='1.8rem' fill='currentColor' /> },
          { label: 'Games', isActive: true, icon: <HomeIcon width='1.8rem' fill='currentColor' /> },
          { label: 'Resources', icon: <HomeIcon width='1.8rem' fill='currentColor' /> },
          { label: 'Providers', icon: <HomeIcon width='1.8rem' fill='currentColor' /> },
          { label: 'Partners', icon: <HomeIcon width='1.8rem' fill='currentColor' /> },
          { label: 'Module', icon: <HomeIcon width='1.8rem' fill='currentColor' /> },
          { label: 'Module', icon: <HomeIcon width='1.8rem' fill='currentColor' /> },
          { label: 'Module', icon: <HomeIcon width='1.8rem' fill='currentColor' /> },
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
            icon: <HomeIcon width='1.8rem' fill='currentColor' />
          }
        ]}
      />
      <Typography variant='h1'>Sidebar Component</Typography>
    </div>
  );
};
