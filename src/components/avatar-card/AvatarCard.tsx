import { Typography } from '@/my-ui-core';
import React from 'react';
import styles from './AvatarCard.module.scss';
import AvatarMdImg from '../../images/md-avatar.png';
import AvatarSmImg from '../../images/small-avatar.png';
import classNames from 'classnames';

const AvatarCard = () => {
  return (
    <>
      <div style={{ display: 'flex', width: '10%', justifyContent: 'space-around', alignItems: 'center' }}>
        <div className={styles.AvatarMediumCardWrapper}>
          <img src={AvatarMdImg} />
        </div>
        <div className={styles.AvatarSmallCardWrapper}>
          <img src={AvatarSmImg} />
        </div>
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
