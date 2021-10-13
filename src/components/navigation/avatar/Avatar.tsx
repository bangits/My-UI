import { IComponent } from '@/types';
import React, { FC, ReactNode } from 'react';
import styles from './Avatar.module.scss';
import { Card, Typography } from '@/components';
import SubMenuItems from '../sidebar/sidebar-components/SubMenuItems';
import { HomeIcon } from '@/icons';

export interface AvatarProps extends IComponent {
  imageSource?: string;
  avatarLabel?: string;
  dropdownTitle?: string;
  topButtonLabel?: string;
  onTopButtonClick?: () => void;
  dropdownLinks?: {
    label?: string;
    icon?: ReactNode;
    onClick?: () => void;
  }[];
  bottomButtonLabel?: string;
  onBottomButtonClick?: () => void;
}

const Avatar: FC<AvatarProps> = ({ imageSource }) => {
  return (
    <div className={styles.Avatar}>
      <span className={styles.AvatarLabel}>Evgenia</span>
      <div className={styles.AvatarImg}>
        <img src={imageSource} alt='avatar' />
      </div>
      <Card borderRadius={0.8} className={styles.AvatarDropdownCard}>
        <Typography className={styles.AvatarDropdownTitle} variant='p5' color='primary'>
          Profile Settings
        </Typography>
        <SubMenuItems label='View Profile' className={styles.AvatarSubMenuItemsLink} />
        <hr className={styles.AvatarDropdownDivider} />
        <ul className={styles.AvatarDropdownMenu}>
          <li>
            <SubMenuItems className={styles.AvatarSubMenuItems} icon={<HomeIcon />} label='Lorem Ipsum' />
          </li>
          <li>
            <SubMenuItems icon={<HomeIcon />} label='Lorem Ipsum' />
          </li>
          <li>
            <SubMenuItems icon={<HomeIcon />} label='Lorem Ipsum' />
          </li>
        </ul>
        <hr className={styles.AvatarDropdownDivider} />
        <SubMenuItems label='Log Out' />
      </Card>
    </div>
  );
};

export default Avatar;
