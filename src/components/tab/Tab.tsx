import { Typography } from '@/my-ui-core';
import classNames from 'classnames';
import React from 'react';
import styles from './Tab.module.scss';

const Tab = () => {
  return (
    <div className={styles.Tab}>
      <div className={styles.TabContent}>
        <button className={classNames(styles.TabButton, styles.Active)}>
          <Typography component='span' variant='p4' className={styles.TabButtonLabel}>
            Game Information
          </Typography>
        </button>
        <button className={styles.TabButton}>
          <Typography component='span' variant='p4'>
            Game Properties
          </Typography>
        </button>
        <button className={styles.TabButton}>
          <Typography component='span' variant='p4'>
            Other Details
          </Typography>
        </button>
      </div>
      <span className={styles.TabButtonBg}></span>
    </div>
  );
};

export default Tab;
