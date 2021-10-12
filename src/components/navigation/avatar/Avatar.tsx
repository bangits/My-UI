import { IComponent } from '@/types';
import { FC, ReactNode } from 'react';

export interface AvatarProps extends IComponent {
  imageSource: string;
  dropdownTitle: string;
  topButtonLabel: string;
  onTopButtonClick: () => void;
  dropdownLinks: {
    label: string;
    icon: ReactNode;
    onClick: () => void;
  }[];
  bottomButtonLabel: string;
  onBottomButtonClick: () => void;
}

const Avatar: FC<AvatarProps> = ({}) => {
  return <>Avatar</>;
};

export default Avatar;
