import { IComponent } from '../../../types';
import { FC, ReactNode } from 'react';
export interface AvatarProps extends IComponent {
    imageSource?: string;
    avatarLabel: string;
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
declare const Avatar: FC<AvatarProps>;
export default Avatar;
