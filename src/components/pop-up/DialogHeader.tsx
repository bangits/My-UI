import { ReactNode, FC } from 'react';
import styles from './PopUp.module.scss';
import { Typography } from '@/my-ui-core';

export interface DialogHeaderProps {
  title: string;
  className?: string;
  icon: ReactNode;
}

const DialogHeader: FC<DialogHeaderProps> = ({ title, className, icon }) => {
  return (
    <>
      {icon && <div className={styles.PopUpIconContainer}>{icon}</div>}
      {title && (
        <div className={styles.PopUpLabel}>
          <Typography component='h2' variant='h2'>
            {title}
          </Typography>
        </div>
      )}
    </>
  );
};
export default DialogHeader;
