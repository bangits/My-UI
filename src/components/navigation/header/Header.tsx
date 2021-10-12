import React, { FC } from 'react';
import { IComponent } from '@/types';
import { AvatarProps } from './../avatar/Avatar';
import { BadgeProps } from './../badge/Badge';
import styles from './Header.module.scss';
import { Avatar, Badge } from '@/components';
import { NotificationIcon } from '@/icons';
import AvatarImg from '@/images/avatar.png';

export interface HeaderProps extends IComponent {
  avatarProps?: AvatarProps;
  notificationProps?: BadgeProps;
}

const Header: FC<HeaderProps> = () => {
  return (
    <header className={styles.Header}>
      <div className={styles.HeaderContainer}>
        <Badge icon={<NotificationIcon />} quantity={0} />
        <Avatar className={styles.AvatarContainer} imageSource={AvatarImg} />
      </div>
    </header>
  );
};

export default Header;
