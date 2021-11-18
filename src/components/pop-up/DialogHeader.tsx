import { ReactNode, FC } from 'react';
import styles from './Dialog.module.scss';
import { Typography } from '@/my-ui-core';
import classNames from 'classnames';
import { getMyUIPrefix } from '@/configs';
export interface DialogHeaderProps {
  title: ReactNode;
  className?: string;
  icon: ReactNode;
}

const DialogHeader: FC<DialogHeaderProps> = ({ title, className, icon }) => {
  return (
    <>
      {icon && (
        <div className={classNames(styles.PopUpIconContainer, className, `${getMyUIPrefix()}-PopUpIconContainer`)}>
          {icon}
        </div>
      )}
      {title && (
        <div className={classNames(styles.PopUpLabel, `${getMyUIPrefix()}-PopUpLabel`)}>
          <Typography component='h2' variant='h2'>
            {title}
          </Typography>
        </div>
      )}
    </>
  );
};
export default DialogHeader;
