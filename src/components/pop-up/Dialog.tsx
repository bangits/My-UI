import { Portal } from '@/components';
import { IComponent } from '@/types';
import classNames from 'classnames';
import { forwardRef, PropsWithChildren } from 'react';
import { CSSTransition } from 'react-transition-group';
import styles from './Dialog.module.scss';
export interface DialogProps extends IComponent {
  isOpened?: boolean;
  mode?: 'dark' | 'light';
  size?: 'sm' | 'md' | 'lg';
  onClose?(): void;
}

const Dialog = forwardRef<HTMLDivElement, PropsWithChildren<DialogProps>>(
  ({ onClose, isOpened, children, mode = 'light', size = 'sm', className, style }, ref) => (
    <Portal>
      <CSSTransition in={isOpened} timeout={500} classNames={{ exit: styles['Dialog--exit'] }} unmountOnExit>
        <div className={styles.DialogWrapper} ref={ref}>
          <div
            className={classNames(
              styles.Dialog,
              {
                [styles[`DialogSizeVariant--${size}`]]: size,
                [styles[`DialogModeVariant--${mode}`]]: mode
              },
              className
            )}
            style={style}>
            {children}
          </div>
          <div className={classNames(styles.Overlay)} tabIndex={0} role='button' onClick={onClose} />
        </div>
      </CSSTransition>
    </Portal>
  )
);

export default Dialog;
