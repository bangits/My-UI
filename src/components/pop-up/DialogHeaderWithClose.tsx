import { CloseIcon } from '@/icons';
import { Typography } from '..';
import styles from './Dialog.module.scss';

export const DialogHeaderWithClose = () => {
  return (
    <div className={styles.DialogHeaderWithClose}>
      <div className={styles.HeaderTitle}>
        <Typography variant='p4' component='h3'>
          Game Icon
        </Typography>
      </div>
      <div>
        <CloseIcon />
      </div>
    </div>
  );
};
