import styles from './Avatar.module.scss';
import { IComponent } from '@/types';
import React, { FC } from 'react';

const Avatar: FC<IComponent> = () => {
  return <div className={styles.Avatar}></div>;
};

export default Avatar;
