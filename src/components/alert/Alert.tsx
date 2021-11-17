import { AlertClose } from '@/icons';
import { Typography } from '@/my-ui-core';
import { IComponent } from '@/types';
import classNames from 'classnames';
import React, { FC, ReactNode } from 'react';
import styles from './Alert.module.scss';

export interface AlertProps extends IComponent {
  icon?: ReactNode;
  onClose?: () => void;
  alertLabel?: string;
  id?: string;
}

const Alert: FC<AlertProps> = ({ icon, alertLabel, onClose, className }) => {
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

export default Alert;
