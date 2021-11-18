import { Portal } from '@/components';
import { FC } from 'react';
import { CSSTransition } from 'react-transition-group';
import styles from './Dialog.module.scss';

export interface DialogProps {
  isOpened?: boolean;
  onClose?(): void;
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
