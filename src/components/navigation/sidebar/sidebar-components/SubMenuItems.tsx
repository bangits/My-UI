import { typedMemo } from '@/helpers';
import { IComponent } from '@/types';
import classNames from 'classnames';
import React, { FC, ReactNode } from 'react';
import styles from './SubMenuItems.module.scss';

export interface SubMenuItemProps extends IComponent {
  label?: string;
  onClick?: () => void;
  icon?: ReactNode;
}

const SubMenuItems: FC<SubMenuItemProps> = ({ label, icon, ...subItemProps }) => {
  return (
    <div className={classNames(styles.SubMenuItemsBase)}>
      {icon && <div className={styles.SubMenuItemsIcon}>{icon}</div>}
      <a {...subItemProps}>{label}</a>
    </div>
  );
};

export default typedMemo(SubMenuItems);
