import classNames from 'classnames';
import React, { ReactNode, FC } from 'react';
import styles from './PopUp.module.scss';

export interface DialogBodyProps {
  children: ReactNode;
  className?: string;
}
const DialogBody: FC<DialogBodyProps> = ({ children, className }) => {
  return <div className={classNames(className, styles.PopUpText)}>{children}</div>;
};

export default DialogBody;
