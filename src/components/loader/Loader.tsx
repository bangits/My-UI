import { Typography } from '@/my-ui-core';
import React from 'react';
import styles from './Loader.module.scss';

const Loader = () => {
  return (
    <div className={styles.LoadWrapper}>
      <div className={styles.Loader}></div>
    </div>
  );
};

export default Loader;
