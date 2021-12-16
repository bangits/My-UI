import { Typography } from '@/components';
import { FC, ReactNode } from 'react';
import { DialogBody, DialogHeader, Dialog, DialogFooter, DialogProps } from '..';

export interface AcceptionDialogProps {
  icon?: ReactNode;
  title?: ReactNode;
  description?: ReactNode;
  cancelButtonText?: ReactNode;
  submitButtonText?: ReactNode;

  onCancel?(): void;
  onSubmit?(closeFn: () => void): void;
}

const AcceptionDialog: FC<AcceptionDialogProps & DialogProps> = ({
  title,
  icon,
  onCancel,
  onSubmit,
  cancelButtonText,
  submitButtonText,
  description,
  onClose,
  isOpened,
  size,
  mode
}) => {
  return (
    <Dialog onClose={onClose} isOpened={isOpened} size={size} mode={mode}>
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
