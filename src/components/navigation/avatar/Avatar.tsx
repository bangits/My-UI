import styles from './Avatar.module.scss';
import { IComponent } from '@/types';
import React, { FC } from 'react';
import AvatarImg from '@/images/avatar.png';

const Avatar: FC<IComponent> = () => {
  return (
    <div className={styles.Avatar}>
      <span className={styles.AvatarLabel}>Evgenia</span>
      <div className={styles.AvatarImg}>
        <img src={AvatarImg} alt='avatar' />
      </div>
    </div>
  );
};

export default Avatar;
