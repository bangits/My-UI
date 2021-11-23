import { getMyUIPrefix } from '@/configs';
import { Typography } from '@/my-ui-core';
import classNames from 'classnames';
import { FC, ReactNode } from 'react';
import styles from './Dialog.module.scss';
export interface DialogHeaderProps {
  title: ReactNode;
  className?: string;
  icon: ReactNode;
}

const DialogHeader: FC<DialogHeaderProps> = ({ title, className, icon }) => {
  return (
    <>
      {icon && (
        <div className={classNames(styles.DialogIconContainer, className, `${getMyUIPrefix()}-DialogIconContainer`)}>
          {icon}
        </div>
      )}
      {title && (
        <div className={classNames(styles.DialogLabel, `${getMyUIPrefix()}-DialogLabel`)}>
          <Typography component='h2' variant='h2'>
            {title}
          </Typography>
        </div>
      )}
    </>
  );
};
export default DialogHeader;
