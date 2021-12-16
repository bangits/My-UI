import { typedMemo } from '@/helpers';
import { SidebarArrowBottom, SidebarArrowTop } from '@/icons';
import { UIColors } from '@/types';
import { ComponentType, IComponent } from '@/types/props';
import classNames from 'classnames';
import React, { FC, ReactNode, useState } from 'react';
import styles from './MenuItem.module.scss';
import SubMenuItems from './SubMenuItems';

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
  isSidebarOpened?: boolean;
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
  const [isOpen, isOpenCount] = useState(false);

  const handleArrowClick = () => {
    isOpenCount(!isOpen);
  };

  return (
    <ul className={classNames(styles['ParentList'], 'ParentList')}>
      {isSidebarOpened ? (
        <li className={classNames(styles['ParentList__Item'], 'ParentList__Item')}>
          <a
            className={classNames(
              styles['ParentList__Item-Link'],
              {
                [styles['ParentList__Item-Link--Current']]: isActive
              },
              'ParentList__Item-Link'
            )}
            onClick={handleArrowClick}>
            <div className={classNames(styles['ParentCatIcon'], 'ParentCatIcon')}>{icon}</div>
            {label}
            <i className={classNames(styles['ArrowTopCell'], 'ArrowTopCell')}>
              {!isOpen ? <SidebarArrowBottom width='11px' /> : <SidebarArrowTop width='11px' />}
            </i>
          </a>
          <div
            className={classNames(styles.ChildListCell, {
              [styles[`ChildListCell--Hidden`]]: !isOpen
            })}>
            <div className={classNames(styles['ChildListCell-Height-Detect'], 'ChildListCell-Height-Detect')}>
              <ul className={classNames(styles['ChildList'], 'ChildList')}>
                {subItems?.map((item, index) => (
                  <li className={classNames(styles['ChildList__Item'], 'ChildList__Item')} key={index}>
                    <a
                      className={classNames(styles['ChildList__Item-Link'], 'ChildList__Item-Link')}
                      onClick={(e) => {
                        e.preventDefault();

                        item.onClick();
                      }}>
                      {item.label}
                    </a>
                  </li>
                ))}
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
