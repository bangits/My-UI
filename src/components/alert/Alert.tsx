import { typedMemo } from '@/helpers';
import { AlertClose } from '@/icons';
import { Typography } from '@/my-ui-core';
import { IComponent } from '@/types';
import classNames from 'classnames';
import React, { FC, ReactNode } from 'react';
import styles from './Alert.module.scss';
import { getMyUIPrefix } from '@/configs';
export interface AlertProps extends IComponent {
  icon?: ReactNode;
  onClose?: () => void;
  alertLabel?: string;
  id?: string;
}

const Alert: FC<AlertProps> = ({ icon, alertLabel, onClose, className }) => {
  return (
    <div className={classNames(styles.AlertBase, className, `${getMyUIPrefix()}-AlertBase`)}>
      {icon}
      <Typography
        variant='p4'
        component='span'
        className={classNames(styles.AlertText, `${getMyUIPrefix()}-AlertText`)}>
        {alertLabel}
      </Typography>
      <AlertClose
        onClick={() => onClose()}
        className={classNames(styles.AlertClose, `${getMyUIPrefix()}-AlertClose`)}
      />
    </div>
  );
};

export default typedMemo(Alert);
