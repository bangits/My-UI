import { IComponent } from '@/types';
import { FC, ReactNode } from 'react';
import styles from './Avatar.module.scss';
export interface AvatarProps extends IComponent {
  imageSource?: string;
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

const Avatar: FC<AvatarProps> = ({}) => {
  return <div className={styles.Avatar}></div>;
};

export default Avatar;
