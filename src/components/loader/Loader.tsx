import { Typography } from '@/my-ui-core';
import classNames from 'classnames';
import React from 'react';
import styles from './Loader.module.scss';

const Loader = () => {
  return (
    <div className={styles.LoaderWrapper}>
      <div className={classNames(styles.Loader, styles['Loader--primary'])}></div>
    </div>
  );
};

export default Loader;

//remove style
