import { Typography } from '@/my-ui-core';
import React from 'react';
import styles from './Loader.module.scss';

const Loader = () => {
  return (
    <div className={styles.LoadWrapper}>
      <div className={styles.Loader} style={{ margin: '100px auto' }}></div>
    </div>
  );
};

export default Loader;

//remove style
