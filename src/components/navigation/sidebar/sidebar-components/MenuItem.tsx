import { typedMemo } from '@/helpers';
import { UIColors } from '@/types';
import { ComponentType, IComponent } from '@/types/props';
import classNames from 'classnames';
import React, { FC, ReactNode } from 'react';
import styles from './MenuItem.module.scss';
import SubMenuItems from './SubMenuItems';
import { SidebarArrowTop, SidebarArrowBottom, HomeSidebar } from '@/icons';

export interface MenuItemProps extends IComponent {
  component?: ComponentType;
  isActive?: boolean;
  label?: string;
  icon?: ReactNode;
  color?: UIColors;
  onClick?: () => void;
  subItems?: {
    label?: string;
    onClick?: () => void;
  }[];
  isSidebarOpened: boolean;
}

export const MenuItem: FC<MenuItemProps> = ({
  icon,
  label,
  color,
  component: Component = 'li',
  isActive,
  subItems,
  isSidebarOpened,
  ...menuItemProps
}) => {
  return (
    <ul className={classNames(styles['ParentList'], 'ParentList')}>
      {isSidebarOpened ? (
        <li className={classNames(styles['ParentList__Item'], 'ParentList__Item')}>
          <a className={classNames(styles['ParentList__Item-Link'], 'ParentList__Item-Link')}>
            <i className={classNames(styles['ParentCatIcon'], 'ParentCatIcon')}>
              <HomeSidebar width='15px' />
            </i>
            Dashboard
            <i className={classNames(styles['ArrowTopCell'], 'ArrowTopCell')}>
              <SidebarArrowBottom width='11px' />
            </i>
          </a>
          <div className={classNames(styles['ChildListCell'], 'ChildListCell')}>
            <div className={classNames(styles['ChildListCell-Height-Detect'], 'ChildListCell-Height-Detect')}>
              <ul className={classNames(styles['ChildList'], 'ChildList')}>
                <li className={classNames(styles['ChildList__Item'], 'ChildList__Item')}>
                  <a className={classNames(styles['ChildList__Item-Link'], 'ChildList__Item-Link')}>Lorem Ipsum</a>
                </li>
                <li className={classNames(styles['ChildList__Item'], 'ChildList__Item')}>
                  <a className={classNames(styles['ChildList__Item-Link'], 'ChildList__Item-Link')}>Lorem Ipsum</a>
                </li>
                <li className={classNames(styles['ChildList__Item'], 'ChildList__Item')}>
                  <a className={classNames(styles['ChildList__Item-Link'], 'ChildList__Item-Link')}>Lorem Ipsum</a>
                </li>
                <li className={classNames(styles['ChildList__Item'], 'ChildList__Item')}>
                  <a className={classNames(styles['ChildList__Item-Link'], 'ChildList__Item-Link')}>Lorem Ipsum</a>
                </li>
              </ul>
            </div>
          </div>
        </li>
      ) : (
        <Component
          {...menuItemProps}
          className={classNames(
            styles.MenuItemBase,
            {
              [styles[`MenuItemBase--${color}`]]: color,
              [styles['MenuItemBase--isActive']]: isActive
            },
            menuItemProps.className
          )}>
          <div className={classNames(styles['MenuItemBase--icon'])}>{icon}</div>
          <a className={classNames(styles['MenuItemBase--label'])}>{label}</a>
          <div className={classNames({ [styles['MenuItemBase--sub']]: subItems?.length > 0 })}>
            <p className={classNames([styles['MenuItemBase--sub-header']])}>{label}</p>
            {subItems?.map((item, key) => (
              <SubMenuItems key={key} label={item.label} onClick={item.onClick} />
            ))}
          </div>
        </Component>
      )}
    </ul>
  );
};

export default typedMemo(MenuItem);
