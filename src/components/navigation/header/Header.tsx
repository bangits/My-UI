import React, { FC } from 'react';
import { IComponent } from '@/types';
import { AvatarProps } from './../avatar/Avatar';
import { Badge } from './../badge/Badge';

export interface HeaderProps extends IComponent {
  avatarProps: AvatarProps;
  notificationProps: Badge;
}

const Header: FC<HeaderProps> = () => {
  return <>Header</>;
};

export default Header;
