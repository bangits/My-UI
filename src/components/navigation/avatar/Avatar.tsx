import { IComponent } from '@/types';
import React, { FC, ReactNode } from 'react';
import styles from './Avatar.module.scss';
import AvatarImg from '@/images/avatar.png';
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
    </div>
  );
};

export default Avatar;
