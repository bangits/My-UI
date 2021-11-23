import { getMyUIPrefix } from '@/configs';
import classNames from 'classnames';
import React, { FC, ReactNode } from 'react';
import styles from './Dialog.module.scss';
export interface DialogBodyProps {
  children: ReactNode;
  className?: string;
}
const DialogBody: FC<DialogBodyProps> = ({ children, className }) => {
  return <div className={classNames(className, styles.DialogText, `${getMyUIPrefix()}-DialogText`)}>{children}</div>;
};

export default DialogBody;
