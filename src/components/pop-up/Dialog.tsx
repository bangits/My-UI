import styles from './Dialog.module.scss';
import { Portal } from '@/components';
import { CSSTransition } from 'react-transition-group';
import { FC } from 'react';

export interface DialogProps {
  onClose?(): void;
  isOpened?: boolean;
}

const Dialog: FC<DialogProps> = ({ onClose, isOpened, children }) => {
  return (
    <Portal>
      <CSSTransition in={isOpened} timeout={500} classNames={{ exit: styles['PopUp--exit'] }} unmountOnExit>
        <div>
          <div className={styles.PopUp}>{children}</div>
          <div className={styles.Overlay} tabIndex={0} role='button' onClick={onClose} />
        </div>
      </CSSTransition>
    </Portal>
  );
};

export default Dialog;
