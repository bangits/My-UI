import classNames from 'classnames';
import React, { FC } from 'react';
import styles from './Status.module.scss';

export interface StatusProps {
  variant?: 'active' | 'blocked' | 'inactive' | 'expired';
}

const Status: FC<StatusProps> = ({ children, variant = 'active' }) => {
  return (
    <>
      <div className={classNames(styles.Status, styles[`Status--${variant}`])}>
        <span className={styles.StatusCircle}></span>
        <span className={styles.StatusLabel}>{children}</span>
      </div>
    </>
  );
};

export default Status;
