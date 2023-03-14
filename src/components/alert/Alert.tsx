import { typedMemo } from '@/helpers';
import { AlertClose } from '@/icons';
import { Typography } from '@/my-ui-core';
import { IComponent } from '@/types';
import classNames from 'classnames';
import { FC, ReactNode, useEffect } from 'react';
import styles from './Alert.module.scss';

export interface AlertProps extends IComponent {
  icon?: ReactNode;
  onClose?: () => void;
  alertLabel?: string;
  id?: string;
  updateId?: string;
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
      <span className={classNames(styles['AlertSymbol'], 'AlertSymbol')}>{icon}</span>
      <Typography variant='p4' component='span' className={classNames(styles['AlertText'], 'AlertText')}>
        {alertLabel}
      </Typography>
      <AlertClose
        onClick={() => onClose()}
        className={classNames(styles['AlertClose'], styles['AlertClose--PopUp'], 'AlertClose', 'AlertClose--PopUp')}
      />
    </div>
  );
};

export default typedMemo(Alert);
