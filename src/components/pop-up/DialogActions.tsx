import { EditIcon, TrashIndicator } from '@/icons';
import styles from './Dialog.module.scss';

const DialogActions = () => {
  return (
    <div className={styles.DialogActions}>
      <div className={styles.BtnsActions}>
        <button>
          <span>
            <EditIcon />
          </span>
          <span className={styles.BtnLabel}>Edit</span>
        </button>
        <button>
          <span>
            <EditIcon />
          </span>
          <span className={styles.BtnLabel}>Upload</span>
        </button>
      </div>
      <div className={styles.BtnsActions}>
        <button>
          <span>
            <TrashIndicator />
          </span>
          <span className={styles.BtnLabel}>Delete</span>
        </button>
      </div>
    </div>
  );
};

export default DialogActions;
