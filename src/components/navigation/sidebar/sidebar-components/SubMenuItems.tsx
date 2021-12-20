import { typedMemo } from '@/helpers';
import { IComponent } from '@/types';
import classNames from 'classnames';
import React, { FC, ReactNode } from 'react';
import styles from './SubMenuItems.module.scss';

export interface SubMenuItemProps extends IComponent {
  label?: string;
  icon?: ReactNode;
  onClick?: () => void;
  isActive?: boolean;
}

const SubMenuItems: FC<SubMenuItemProps> = ({ label, icon, className, onClick, isActive = false, ...subItemProps }) => {
  return (
    <div
      className={classNames(
        styles.SubMenuItemsBase,
        {
          [styles['SubMenuItemsBase--active']]: isActive
        },
        className
      )}
      onClick={onClick}>
      {icon && <div className={styles.SubMenuItemsIcon}>{icon}</div>}
      <a {...subItemProps}>{label}</a>
    </div>
  );
};

export default typedMemo(SubMenuItems);
