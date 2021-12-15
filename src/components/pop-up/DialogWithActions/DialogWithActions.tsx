import { Typography } from '@/components';
import { FC, ReactNode, useCallback, useEffect, useState } from 'react';
import { DialogBody, DialogHeader, Dialog, DialogActions, BaseDialogProps } from '..';
import { DialogHeaderWithClose } from '../DialogHeaderWithClose';

export interface DialogWithActionsProps {
  title?: ReactNode;
}

const DialogWithActions: FC<DialogWithActionsProps & BaseDialogProps> = ({ title, onClose, isOpened }) => {
  return (
    <Dialog onClose={onClose} isOpened={isOpened}>
      <DialogHeaderWithClose />
      content
      <DialogActions />
    </Dialog>
  );
};

export default DialogWithActions;
