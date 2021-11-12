import { Typography } from '@/my-ui-core';
import React, { FC } from 'react';
import styles from './AvatarCard.module.scss';
import AvatarMdImg from '../../images/md-avatar.png';
import AvatarSmImg from '../../images/small-avatar.png';
import classNames from 'classnames';
import { IComponent } from '@/types';

export type AvatarImgSizes = 'md' | 'sm';
export type AvatarVariant = 'online' | 'offline' | 'default';
export interface AvatarCardProps extends IComponent {
  imageSize?: AvatarImgSizes;
  avatarImg?: string;
  variant?: AvatarVariant;
}
const AvatarCard: FC<AvatarCardProps> = ({ imageSize = 'md', avatarImg, variant = 'online' }) => {
  return (
    <div className={styles.AvatarWrapper}>
      <div
        className={classNames(
          {
            [styles.AvatarMediumCardWrapper]: imageSize === 'md',
            [styles.AvatarSmallCardWrapper]: imageSize === 'sm'
          },
          {
            [styles.AvatarOfflineState]: variant === 'offline',
            [styles.AvatarOnlineState]: variant === 'online',
            [styles.AvatarDefaultState]: variant === 'default'
          }
        )}>
        <img src={avatarImg ? avatarImg : AvatarSmImg} />
        <span className={styles.AvatarStateStatus}></span>
      </div>
    </div>
  );
};

export default AvatarCard;
