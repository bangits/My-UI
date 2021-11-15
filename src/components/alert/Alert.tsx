import { AlertClose } from '@/icons';
import { Typography } from '@/my-ui-core';
import React, { FC, ReactNode } from 'react';
import styles from './Alert.module.scss';

export interface AlertProps {
  icon?: ReactNode;
  onClose?: () => void;
  alertLabel?: string;
  id?: string;
}

const Alert: FC<AlertProps> = ({ icon, alertLabel, onClose }) => {
  return (
    <div className={styles.AlertBase}>
      {icon}
      <Typography variant='p4' className={styles.AlertText}>
        {alertLabel}
      </Typography>
      <AlertClose onClick={() => onClose()} className={styles.AlertClose} />
    </div>
  );
};

export default Alert;
