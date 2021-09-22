import React, { FC } from 'react';
import classNames from 'classnames';

export interface StatusProps {
    variant?: "active" | "blocked"
}

const Status: FC<StatusProps>= ({ children, variant}) => {
    return (
        <>
        <div className={classNames(`${variant}--status`)}>
            {children}
        </div>
        </>
    )
}

export default Status;
