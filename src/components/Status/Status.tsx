import React, { FC } from 'react';
import classNames from 'classnames';
import styles from './Status.module.scss';

export interface StatusProps {
    variant?: "active" | "blocked"
}

const Status: FC<StatusProps>= ({ children, variant}) => {
    return (
        <>
        <div className={styles.StatusBlocked}>
          <span></span>  {children}
        </div>
        </>
    )
}

export default Status;
