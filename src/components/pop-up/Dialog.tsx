import { Portal } from '@/components';
import { getMyUIPrefix } from '@/configs';
import classNames from 'classnames';
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
        <div className={`${getMyUIPrefix()}-PopupWrapper`}>
          <div className={classNames(styles.PopUp, `${getMyUIPrefix()}-PopUp`)}>{children}</div>
          <div
            className={classNames(styles.Overlay, `${getMyUIPrefix()}-Overlay`)}
            tabIndex={0}
            role='button'
            onClick={onClose}
          />
        </div>
      </CSSTransition>
    </Portal>
  );
};

export default Dialog;
