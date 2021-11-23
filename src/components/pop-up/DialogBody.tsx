import classNames from 'classnames';
import React, { ReactNode, FC } from 'react';
import styles from './Dialog.module.scss';
import { getMyUIPrefix } from '@/configs';
export interface DialogBodyProps {
  children: ReactNode;
  className?: string;
}
const DialogBody: FC<DialogBodyProps> = ({ children, className }) => {
  return <div className={classNames(className, styles.PopUpText, `${getMyUIPrefix()}-PopUpText`)}>{children}</div>;
};

export default DialogBody;
