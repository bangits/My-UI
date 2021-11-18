import classNames from 'classnames';
import React, { FC } from 'react';
import styles from './Status.module.scss';
import { getMyUIPrefix } from '@/configs';
export interface StatusProps {
  variant?: 'active' | 'blocked';
}

const Status: FC<StatusProps> = ({ children, variant = 'active' }) => {
  return (
    <>
      <div className={classNames(styles.Status, styles[`Status--${variant}`], `${getMyUIPrefix()}-Status`)}>
        <span className={classNames(styles.StatusCircle, `${getMyUIPrefix()}-StatusCircle`)}></span>
        <span className={classNames(styles.StatusLabel, `${getMyUIPrefix()}-StatusLabel`)}>{children}</span>
      </div>
    </>
  );
};

export default Status;
