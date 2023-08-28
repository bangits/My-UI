import { typedMemo } from '@/helpers';
import { NewArrowIcon } from '@/icons';
import { UIColors } from '@/types';
import { ComponentType, IComponent } from '@/types/props';
import classNames from 'classnames';
import { FC, ReactNode, useCallback, useState } from 'react';
import styles from './MenuItem.module.scss';
import SubMenuItems from './SubMenuItems';

export interface MenuItemProps extends IComponent {
  component?: ComponentType;
  isActive?: boolean;
  label?: string;
  linkContainerClassName?: string;
  icon?: ReactNode;
  color?: UIColors;
  onClick?: () => void;
  subItems?: {
    label?: string;
    href?: string;
    onClick?: () => void;
    isActive?: boolean;
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
  linkContainerClassName,
  ...menuItemProps
}) => {
  const [isOpenendSidebarMenus, setOpenedSidebarMenus] = useState(false);

  const toggleOpenedSidebarMenus = useCallback(() => setOpenedSidebarMenus((prevOpened) => !prevOpened), []);

  return (
    <Component
      {...menuItemProps}
      className={classNames(
        styles.MenuItemBase,
        {
          [styles[`MenuItemBase--${color}`]]: color,
          [styles['MenuItemBase--isActive']]: isActive,
          [styles['MenuItemBase--sidebarClosed']]: !isSidebarOpened,
          [styles['MenuItemBase--sidebarOpened']]: isSidebarOpened,
          [styles['MenuItemBase--opened']]: isOpenendSidebarMenus
        },
        menuItemProps.className
      )}>
      <div
        role='button'
        onClick={toggleOpenedSidebarMenus}
        className={classNames(styles.MenuItemLinkContainer, linkContainerClassName)}>
        <div className={classNames(styles['MenuItemBase--icon'])}>{icon}</div>
        <a className={classNames(styles['MenuItemBase--label'])}>{label}</a>
        {subItems?.length > 0 && (
          <span
            className={classNames(styles.MenuItemArrow, {
              [styles['MenuItemArrow--opened']]: isOpenendSidebarMenus
            })}>
            {/* <ArrowIcon width='1rem' /> */}
            <NewArrowIcon width='1rem' fill='currentColor' />
          </span>
        )}
      </div>
      <div className={classNames({ [styles['MenuItemBase--sub']]: subItems?.length > 0 })}>
        <p className={classNames([styles['MenuItemBase--sub-header']])}>{label}</p>
        {subItems?.map((item, key) => (
          <SubMenuItems
            isSidebarOpened={isSidebarOpened}
            key={key}
            href={item.href}
            label={item.label}
            onClick={item.onClick}
            isActive={item.isActive}
          />
        ))}
      </div>
    </Component>
  );
};

export default typedMemo(MenuItem);
