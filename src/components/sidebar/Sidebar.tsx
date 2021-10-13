import { typedMemo } from '@/helpers';
import { IconButtonLeft, IconButtonRight } from '@/icons';
import { UIColors } from '@/types';
import { IComponent } from '@/types/props';
import classNames from 'classnames';
import React, { FC, useCallback, useState } from 'react';
import IconButton from '../inputs-and-elements/IconButton/IconButton';
import { MenuItem, MenuItemProps } from './sidebar-components/MenuItem';
import styles from './Sidebar.module.scss';

export type SidebarPositions = 'fixed' | 'static';
export interface SidebarProps extends IComponent {
  width?: number;
  color?: UIColors;
  position?: SidebarPositions;
  collapsedWidth?: number;
  logoSrc?: string;
  menuItems?: MenuItemProps[];
}

const Sidebar: FC<SidebarProps> = ({ width, color, position, collapsedWidth, logoSrc, menuItems }) => {
  const [sidebar, setSidebar] = useState(false);

  const toggleSidebar = useCallback(() => {
    setSidebar(!sidebar);
  }, [sidebar]);

  return (
    <div
      style={{ width: sidebar ? `${collapsedWidth}rem` : `${width}rem` }}
      className={classNames({ [styles[`SidebarWrapper--${position}`]]: position })}>
      <div
        className={classNames(styles.SidebarBase, {
          [styles['SidebarBase--closed']]: sidebar,
          [styles[`SidebarBase--${color}`]]: color
        })}
        style={{ width: sidebar ? `${collapsedWidth}rem` : `${width}rem` }}>
        <div className={classNames(styles['SidebarBase--logo'])}>{logoSrc && <img src={logoSrc} alt='Logo' />}</div>

        <div className={classNames(styles['SidebarBase--button-container'])} onClick={toggleSidebar}>
          <IconButton
            variant='light'
            icon={sidebar ? <IconButtonRight /> : <IconButtonLeft />}
            className={classNames(styles['SidebarBase--button'])}
          />
        </div>

        <ul className={classNames(styles['SidebarBase--item-container'])}>
          {menuItems.map((item, key) => (
            <MenuItem
              key={key}
              className={classNames(styles['SidebarBase--menu-item'])}
              label={item.label}
              icon={item.icon}
              onClick={item.onClick}
              subItems={item.subItems}
              component={item.component}
              isActive={item.isActive}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default typedMemo(Sidebar);
