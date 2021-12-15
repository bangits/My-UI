import { Typography } from '@/components';
import { FC, ReactNode, useCallback, useEffect, useState } from 'react';
import { DialogBody, DialogHeader, Dialog, DialogActions, BaseDialogProps } from '..';
import { DialogHeaderWithClose } from '../DialogHeaderWithClose';
import styles from '../Dialog.module.scss';

export interface DialogWithActionsProps {
  title?: ReactNode;
}

const DialogWithActions: FC<DialogWithActionsProps & BaseDialogProps> = ({ title, onClose, isOpened }) => {
  return (
    <Dialog onClose={onClose} isOpened={isOpened}>
      <DialogHeaderWithClose />
      <div className={styles.DialogContent}>
        <img
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png'
          alt=''
        />
      </div>
      <hr />
      <DialogActions />
    </Dialog>
  );
};

export default DialogWithActions;
