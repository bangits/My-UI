import { AlertCheck, AlertClose } from '@/icons';
import { Typography } from '@/my-ui-core';
import React from 'react';
import styles from './Alert.module.scss';

const Alert = () => {
  return (
    <div className={styles.AlertBase}>
      <AlertCheck />
      <Typography variant='p4' className={styles.AlertText}>
        Game Successfully Added!
      </Typography>
      <AlertClose className={styles.AlertClose} />
    </div>
  );
};

export default Alert;
