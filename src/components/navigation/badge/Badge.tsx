import { NotificationIcon } from '@/icons';
import { IComponent } from '@/types';
import React, { FC } from 'react';
import styles from './Badge.module.scss';
const Badge: FC<IComponent> = () => {
  return (
    <div className={styles.BadgeContainer}>
      <NotificationIcon />
      <span className={styles.BadgeNumber}>5555</span>
    </div>
  );
};

export default Badge;
