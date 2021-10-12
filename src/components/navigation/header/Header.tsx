import React, { FC } from 'react';
import { IComponent } from '@/types';
import { AvatarProps } from './../avatar/Avatar';
import { BadgeProps } from './../badge/Badge';
import styles from './Header.module.scss';
import { Avatar, Badge } from '@/components';
export interface HeaderProps extends IComponent {
  avatarProps?: AvatarProps;
  notificationProps?: BadgeProps;
}

const Header: FC<HeaderProps> = () => {
  return (
    <header className={styles.Header}>
      <div className={styles.HeaderContainer}>
        <Badge />
        <Avatar className={styles.AvatarContainer} />
      </div>
    </header>
  );
};

export default Header;
