import { IComponent } from '@/types';
import classNames from 'classnames';
import React, { FC } from 'react';
import styles from './AvatarCard.module.scss';
import { getMyUIPrefix } from '@/configs';

export type AvatarImgSizes = 'md' | 'sm';
export type AvatarVariant = 'online' | 'offline' | 'default';
export interface AvatarCardProps extends IComponent {
  imageSize?: AvatarImgSizes;
  avatarImg?: string;
  variant?: AvatarVariant;
}
const AvatarCard: FC<AvatarCardProps> = ({ imageSize = 'md', avatarImg, variant = 'online' }) => {
  return (
    <div className={classNames(styles.AvatarWrapper, `${getMyUIPrefix()}-AvatarWrapper`)}>
      <div
        className={classNames(
          styles.AvatarBase,
          {
            [styles.AvatarMediumCardWrapper]: imageSize === 'md',
            [styles.AvatarSmallCardWrapper]: imageSize === 'sm'
          },
          {
            [styles.AvatarOfflineState]: variant === 'offline',
            [styles.AvatarOnlineState]: variant === 'online',
            [styles.AvatarDefaultState]: variant === 'default'
          },
          `${getMyUIPrefix()}-AvatarBase`
        )}>
        <img src={avatarImg} className={`${getMyUIPrefix()}-AvatarImg`} />
        <span className={classNames(styles.AvatarStateStatus, `${getMyUIPrefix()}-AvatarStateStatus`)}></span>
      </div>
    </div>
  );
};

export default AvatarCard;
