import React, { FC } from 'react';
import styles from './Status.module.scss';

export interface StatusProps {
  variant?: 'active' | 'blocked';
}

const Status: FC<StatusProps> = ({ children, variant = 'active' }) => {
  return (
    <>
      <div className={styles[`status--${variant}`]}>
        <span></span> {children}
      </div>
    </>
  );
};

export default Status;
