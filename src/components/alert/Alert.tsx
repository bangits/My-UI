import { typedMemo } from '@/helpers';
import { AlertClose } from '@/icons';
import { Typography } from '@/my-ui-core';
import { IComponent } from '@/types';
import classNames from 'classnames';
import React, { FC, ReactNode, useEffect } from 'react';
import styles from './Alert.module.scss';

export interface AlertProps extends IComponent {
  icon?: ReactNode;
  onClose?: () => void;
  alertLabel?: string;
  id?: string;
  autoCloseDelay?: number;
  autoClose?: boolean;
}

const Alert: FC<AlertProps> = ({ icon, alertLabel, onClose, className, autoClose, autoCloseDelay = 5000 }) => {
  useEffect(() => {
    if (autoClose) {
      const timeout = setTimeout(onClose, autoCloseDelay);

      return () => clearTimeout(timeout);
    }
  }, []);

  return (
    <div className={classNames(styles.AlertBase, className)}>
      {icon}
      <Typography variant='p4' component='span' className={styles.AlertText}>
        {alertLabel}
      </Typography>
      <AlertClose onClick={() => onClose()} className={styles.AlertClose} />
    </div>
  );
};

export default typedMemo(Alert);
