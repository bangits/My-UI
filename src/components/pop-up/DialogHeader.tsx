import { Typography } from '@/my-ui-core';
import { FC, ReactNode } from 'react';
import styles from './Dialog.module.scss';

export interface DialogHeaderProps {
  title: ReactNode;
  icon: ReactNode;
  description?: ReactNode;
  className?: string;
}

const DialogHeader: FC<DialogHeaderProps> = ({ title, description, icon }) => {
  return (
    <>
      {icon && <div className={styles.DialogIconContainer}>{icon}</div>}
      {title && (
        <div className={styles.DialogLabel}>
          <Typography component='h2' variant='h2'>
            {title}
          </Typography>
        </div>
      )}
      {description && (
        <Typography component='p' variant='p3'>
          {description}
        </Typography>
      )}
    </>
  );
};
export default DialogHeader;
