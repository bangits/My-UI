import React, { FC, ReactNode } from 'react';
import { IComponent } from '@/types';
import { NotificationIcon } from '@/icons';
import styles from './Badge.module.scss';
import classNames from 'classnames';
import { typedMemo } from '@/helpers';
export interface BadgeProps extends IComponent {
  quantity?: number;
  icon?: ReactNode;
}

const Badge: FC<BadgeProps> = ({ quantity, icon, className }) => {
  return (
    <div className={classNames(styles.BadgeContainer, className)}>
      {icon}
      <span className={styles.BadgeNumber}>{quantity}</span>
    </div>
  );
};

export default typedMemo(Badge);
