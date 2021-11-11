import { Typography } from '@/my-ui-core';
import React, { FC } from 'react';
import styles from './AvatarCard.module.scss';
import AvatarMdImg from '../../images/md-avatar.png';
import AvatarSmImg from '../../images/small-avatar.png';
import classNames from 'classnames';
import { IComponent } from '@/types';
export interface AvatarCardProps extends IComponent {
  imageSize: string;
  avatarImg?: string;
}
const AvatarCard: FC<AvatarCardProps> = ({ imageSize = 'md', avatarImg }) => {
  return (
    <>
      <div
      // style={{ display: 'flex', width: '10%', justifyContent: 'space-around', alignItems: 'center' }}
      >
        <div
          className={classNames({
            [styles.AvatarMediumCardWrapper]: imageSize === 'md',
            [styles.AvatarSmallCardWrapper]: imageSize === 'sm'
          })}>
          {<img src={avatarImg ? avatarImg : AvatarMdImg} />}
        </div>
        {/* <div className={styles.AvatarSmallCardWrapper}>
          <img src={AvatarSmImg} />
        </div> */}
      </div>

      <div
        style={{
          display: 'flex',
          width: '10%',
          justifyContent: 'space-around',
          alignItems: 'center',
          marginTop: '3rem'
        }}>
        <div className={classNames(styles.AvatarOfflineState, styles['AvatarOnlineState'])}>
          <img src={AvatarSmImg} />
          <span className={styles.AvatarStateStatus}></span>
        </div>
      </div>
    </>
  );
};

export default AvatarCard;
