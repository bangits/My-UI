import { typedMemo } from '@/helpers/typedMemo';
import { IComponent } from '@/types';
import classNames from 'classnames';
import React, { FC } from 'react';
import styles from './SubMenuItems.module.scss';

export interface SubMenuItemProps extends IComponent {
  label?: string;
  onClick?: () => void;
}

const SubMenuItems: FC<SubMenuItemProps> = ({ label, ...subItemProps }) => {
  return (
    <>
      <a {...subItemProps} className={classNames(styles.SubMenuItemsBase)}>
        {label}
      </a>
    </>
  );
};

export default typedMemo(SubMenuItems);
