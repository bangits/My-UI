import { IconButton } from '@/components';
import { typedMemo } from '@/helpers';
import { IconButtonLeft, IconButtonRight } from '@/icons';
import { UIColors } from '@/types';
import { IComponent } from '@/types/props';
import classNames from 'classnames';
import React, { FC, useCallback, useState } from 'react';
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
  height?: string | number;
  defaultClosed?: boolean;
}

const Sidebar: FC<SidebarProps> = ({
  width,
  height,
  color,
  position,
  collapsedWidth,
  logoSrc,
  menuItems,
  defaultClosed = false
}) => {
  const [isSidebarClosed, setSidebarClosed] = useState(defaultClosed);

  const toggleSidebar = useCallback(() => {
    setSidebarClosed(!isSidebarClosed);
  }, [isSidebarClosed]);

  return (
    <div
      style={{
        width: isSidebarClosed ? `${collapsedWidth}rem` : `${width}rem`,
        height
      }}
      className={styles.SidebarContainer}>
      <div
        className={classNames(styles.SidebarBase, {
          [styles['SidebarBase--closed']]: isSidebarClosed,
          [styles[`SidebarBase--${color}`]]: color,
          [styles[`SidebarBase--${position}`]]: position
        })}
        style={{
          width: isSidebarClosed ? `${collapsedWidth}rem` : `${width}rem`,
          height,
          border: 'solid #ff0000 1px!Important'
        }}>
        <div style={{ position: 'relative' }} className={styles.SidebarContent}>
          <div className={classNames(styles['SidebarBase--logo-container'], 'SidebarBase--logo-container')}>
            <div className={classNames(styles['SidebarBase--logo'], 'SidebarBase--logo')}>
              {logoSrc && <img src={logoSrc} alt='Logo' />}
            </div>
          </div>

          <div className={classNames(styles['SidebarBase--button-container'])} onClick={toggleSidebar}>
            <IconButton
              icon={
                isSidebarClosed ? (
                  <IconButtonRight className={classNames(styles['SidebarBase-ToggleIcon'])} width='0.8rem' />
                ) : (
                  <IconButtonLeft className={classNames(styles['SidebarBase-ToggleIcon'])} width='0.8rem' />
                )
              }
              className={classNames(styles['SidebarBase--button'])}
            />
          </div>

          <ul className={classNames(styles['SidebarBase--item-container'])}>
            {menuItems.map((item, key) => (
              <MenuItem
                key={key}
                linkContainerClassName={classNames(styles['SidebarBase--menu-item'])}
                label={item.label}
                icon={item.icon}
                onClick={item.onClick}
                subItems={item.subItems}
                component={item.component}
                isActive={item.isActive}
                isSidebarOpened={!isSidebarClosed}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default typedMemo(Sidebar);
