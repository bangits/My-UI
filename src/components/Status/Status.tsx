import { IComponent } from '@/types/props';
import classNames from 'classnames';
import React, { FC } from 'react';

export interface StatusProps extends IComponent {
  variant?: 'active' | 'blocked';
}

const Status: FC<StatusProps> = ({ children, variant, className }) => {
  return (
    <>
      <div className={classNames(`${variant}--status`)}>{children}</div>
    </>
  );
};

export default Status;
