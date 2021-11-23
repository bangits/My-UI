import { Avatar, Badge } from '@/components';
import { IComponent } from '@/types';
import classNames from 'classnames';
import React, { FC } from 'react';
import { AvatarProps } from './../avatar/Avatar';
import { BadgeProps } from './../badge/Badge';
import styles from './Header.module.scss';
import { getMyUIPrefix } from '@/configs';
export interface HeaderProps extends IComponent {
  avatarProps?: AvatarProps;
  notificationProps: BadgeProps;
}

const Header: FC<HeaderProps> = ({ className, avatarProps, notificationProps }) => {
  return (
    <header className={classNames(styles.Header, className, `${getMyUIPrefix()}-Header`)}>
      <div className={classNames(styles.HeaderContainer, `${getMyUIPrefix()}-HeaderContainer`)}>
        <Badge {...notificationProps} />
        <Avatar className={classNames(styles.AvatarContainer, `${getMyUIPrefix()}-AvatarContainer`)} {...avatarProps} />
      </div>
    </header>
  );
};

export default Header;
