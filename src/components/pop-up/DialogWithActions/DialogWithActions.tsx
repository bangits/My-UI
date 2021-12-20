import { FC } from 'react';
import { Dialog, DialogActions, DialogProps } from '..';
import styles from '../Dialog.module.scss';
import { DialogHeaderWithClose } from '../DialogHeaderWithClose';
import { DialogActionProps } from './../DialogActions';

export interface DialogWithActionsProps {
  title?: string;
  actions?: DialogActionProps['actions'];
}

const DialogWithActions: FC<DialogWithActionsProps & DialogProps> = ({
  actions,
  onClose,
  isOpened,
  size,
  mode,
  children,
  title
}) => {
  return (
    <Dialog onClose={onClose} isOpened={isOpened} size={size} mode={mode}>
      <DialogHeaderWithClose title={title} onClose={onClose} />
      <div className={styles.DialogContent}>{children}</div>
      <hr className={styles.DialogWithActionsDivider} />
      <DialogActions actions={actions} />
    </Dialog>
  );
};

export default DialogWithActions;
