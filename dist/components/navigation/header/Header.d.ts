import { IComponent } from '../../../types';
import { FC } from 'react';
import { AvatarProps } from './../avatar/Avatar';
import { BadgeProps } from './../badge/Badge';
export interface HeaderProps extends IComponent {
    avatarProps?: AvatarProps;
    notificationProps: BadgeProps;
}
declare const Header: FC<HeaderProps>;
export default Header;
