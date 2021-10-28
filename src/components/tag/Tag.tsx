import { AlertClose } from '@/icons';
import { Typography } from '@/my-ui-core';
import React from 'react';
import styles from './Tag.module.scss';

const Tag = () => {
  return (
    <>
      <div className={styles.Tag}>
        <Typography variant='p4' className={styles.TagText}>
          Armenian
        </Typography>
      </div>

      {/* //remove margin style */}

      <div style={{ marginTop: '2rem' }} className={`${styles.Tag} ${styles['Tag--icon']}`}>
        <Typography variant='p4' className={styles.TagText}>
          Armenian
        </Typography>
        <span className={styles.IconContainer}>
          <AlertClose />
        </span>
      </div>

      {/* //remove margin style */}
      <div style={{ marginTop: '2rem' }} className={`${styles.Tag} ${styles['Tag--primary']}`}>
        <Typography variant='p4' className={styles.TagText}>
          Jackpot Support
        </Typography>
      </div>
    </>
  );
};

export default Tag;
