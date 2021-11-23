import { IconButton } from '@/components';
import { typedMemo } from '@/helpers';
import { IconButtonLeft, IconButtonRight } from '@/icons';
import { UIColors } from '@/types';
import { IComponent } from '@/types/props';
import classNames from 'classnames';
import React, { FC, useCallback, useState } from 'react';
import { MenuItem, MenuItemProps } from './sidebar-components/MenuItem';
import styles from './Sidebar.module.scss';
import { getMyUIPrefix } from '@/configs';

export type SidebarPositions = 'fixed' | 'static';
export interface SidebarProps extends IComponent {
  width?: number;
  color?: UIColors;
  position?: SidebarPositions;
  collapsedWidth?: number;
  logoSrc?: string;
  menuItems?: MenuItemProps[];
  height?: string | number;
}

const Sidebar: FC<SidebarProps> = ({ width, height, color, position, collapsedWidth, logoSrc, menuItems }) => {
  const [sidebar, setSidebar] = useState(false);

  const toggleSidebar = useCallback(() => {
    setSidebar(!sidebar);
  }, [sidebar]);

  return (
    <div
      style={{ width: sidebar ? `${collapsedWidth}rem` : `${width}rem`, height }}
      className={`${getMyUIPrefix()}-SidebarWrapper`}>
      <div
        className={classNames(styles.SidebarBase, `${getMyUIPrefix()}-SidebarBase`, {
          [styles['SidebarBase--closed']]: sidebar,
          [styles[`SidebarBase--${color}`]]: color,
          [styles[`SidebarBase--${position}`]]: position
        })}
        style={{ width: sidebar ? `${collapsedWidth}rem` : `${width}rem`, height }}>
        <div className={classNames(styles['SidebarBase--logo'], `${getMyUIPrefix()}-SidebarBaseLogo`)}>
          {logoSrc && <img src={logoSrc} alt='Logo' className={`${getMyUIPrefix()}-SidebarBaseLogoImg`} />}
        </div>

        <div
          className={classNames(
            styles['SidebarBase--button-container'],
            `${getMyUIPrefix()}-SidebarBaseButtonContainer`
          )}
          onClick={toggleSidebar}>
          <IconButton
            icon={sidebar ? <IconButtonRight /> : <IconButtonLeft />}
            className={classNames(styles['SidebarBase--button'], `${getMyUIPrefix()}-SidebarBaseButton`)}
          />
        </div>

        <ul
          className={classNames(styles['SidebarBase--item-container'], `${getMyUIPrefix()}-SidebarBaseItemContainer`)}>
          {menuItems.map((item, key) => (
            <MenuItem
              key={key}
              className={classNames(styles['SidebarBase--menu-item'], `${getMyUIPrefix()}-SidebarBaseMenuItem`)}
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
