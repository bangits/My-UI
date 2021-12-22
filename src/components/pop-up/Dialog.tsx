import { Portal } from '@/components';
import classNames from 'classnames';
import { FC } from 'react';
import { CSSTransition } from 'react-transition-group';
import styles from './Dialog.module.scss';
export interface DialogProps {
  isOpened?: boolean;
  mode?: 'dark' | 'light';
  size?: 'sm' | 'md' | 'lg';
  onClose?(): void;
}

const Dialog: FC<DialogProps> = ({ onClose, isOpened, children, mode = 'light', size = 'sm' }) => {
  return (
    <Portal>
      <CSSTransition in={isOpened} timeout={500} classNames={{ exit: styles['Dialog--exit'] }} unmountOnExit>
        <div className={styles.DialogWrapper}>
          <div
            className={classNames(styles.Dialog, {
              [styles[`DialogSizeVariant--${size}`]]: size,
              [styles[`DialogModeVariant--${mode}`]]: mode
            })}>
            {children}
          </div>
          <div className={classNames(styles.Overlay)} tabIndex={0} role='button' onClick={onClose} />
        </div>
      </CSSTransition>
    </Portal>
  );
};

export default Dialog;
