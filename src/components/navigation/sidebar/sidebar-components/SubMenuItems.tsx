import { typedMemo } from '@/helpers';
import { IComponent } from '@/types';
import classNames from 'classnames';
import { FC, ReactNode } from 'react';
import styles from './SubMenuItems.module.scss';

export interface SubMenuItemProps extends IComponent {
  label?: string;
  icon?: ReactNode;
  onClick?: () => void;
  href?: string;
  isActive?: boolean;
  isSidebarOpened?: boolean;
}

const SubMenuItems: FC<SubMenuItemProps> = ({
  label,
  icon,
  className,
  onClick,
  isActive = false,
  isSidebarOpened = false,
  ...subItemProps
}) => {
  return (
    <div
      className={classNames(
        styles.SubMenuItemsBase,
        'SubMenuItemsBase',
        {
          [`${styles['SubMenuItemsBase--active']} SubMenuItemsBase--active`]: isActive,
          [styles['SubMenuItemsBase--sidebar-opened']]: isSidebarOpened
        },
        className
      )}>
      {icon && <div className={classNames(styles['SubMenuItemsIcon'], 'SubMenuItemsIcon')}>{icon}</div>}
      <a
        {...subItemProps}
        onClick={(e) => {
          e.preventDefault();

          onClick();
        }}>
        {label}
      </a>
    </div>
  );
};

export default typedMemo(SubMenuItems);
