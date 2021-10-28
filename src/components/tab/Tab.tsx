import { Typography } from '@/my-ui-core';
import React from 'react';
import styles from './Tab.module.scss';

const Tab = () => {
  return (
    <div className={styles.Tab}>
      <div>
        <button>
          <Typography variant='p4'>Game Informtion</Typography>
        </button>
      </div>
      <span></span>
      <div>
        <button></button>
      </div>
      <span></span>
      <div>
        <button></button>
      </div>
      <span></span>
    </div>
  );
};

export default Tab;
