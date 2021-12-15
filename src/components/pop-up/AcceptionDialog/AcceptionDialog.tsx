import { Typography } from '@/components';
import { FC, ReactNode, useCallback, useEffect, useState } from 'react';
import { DialogBody, DialogHeader, Dialog, DialogFooter, BaseDialogProps } from '..';

export interface AcceptionDialogProps {
  icon?: ReactNode;
  title?: ReactNode;
  description?: ReactNode;
  cancelButtonText?: ReactNode;
  submitButtonText?: ReactNode;

  onCancel?(): void;
  onSubmit?(closeFn: () => void): void;
}

const AcceptionDialog: FC<AcceptionDialogProps & BaseDialogProps> = ({
  title,
  icon,
  onCancel,
  onSubmit,
  cancelButtonText,
  submitButtonText,
  description,
  onClose,
  isOpened
}) => {
  return (
    <Dialog onClose={onClose} isOpened={isOpened}>
      <DialogHeader title={title} icon={icon} />
      <DialogBody>
        <Typography component='p' variant='p3'>
          {description}
        </Typography>
      </DialogBody>
      <DialogFooter
        onClose={() => {
          onClose();
          onCancel();
        }}
        cancelButtonText={cancelButtonText}
        submitButtonText={submitButtonText}
        submitButtonProps={{ onClick: () => onSubmit(onClose) }}
      />
    </Dialog>
  );
};

export default AcceptionDialog;
