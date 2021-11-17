import styles from './PopUp.module.scss';
import { Portal } from '@/components';
import { CSSTransition } from 'react-transition-group';

const Dialog = ({ onClose, isOpened, children }) => {
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
