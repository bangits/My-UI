import { CloseIcon } from '@/icons';
import { Typography } from '..';
import styles from './Dialog.module.scss';

export interface DialogHeaderWithClose {
  onClose: () => void;
  title: string;
}

export const DialogHeaderWithClose = ({ onClose, title }: DialogHeaderWithClose) => {
  return (
    <div className={styles.DialogHeaderWithClose}>
      <div className={styles.HeaderTitle}>
        <Typography variant='p4' component='h3'>
          {title}
        </Typography>
      </div>
      <div onClick={onClose}>
        <CloseIcon />
      </div>
    </div>
  );
};
