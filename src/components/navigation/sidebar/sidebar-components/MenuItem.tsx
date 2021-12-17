import { typedMemo } from '@/helpers';
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
  );
};

export default typedMemo(MenuItem);
