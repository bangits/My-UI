import { Typography } from '@/components';
import { FC, ReactNode } from 'react';
import { Dialog, DialogBody, DialogFooter, DialogHeader, DialogProps } from '..';

export interface AcceptionDialogProps {
  icon?: ReactNode;
  title?: ReactNode;
  description?: ReactNode;
  cancelButtonText?: ReactNode;
  submitButtonText?: ReactNode;
  showCancelButton?: boolean;
  showSubmitButton?: boolean;
  showFooter?: boolean;

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
  mode,
  showCancelButton,
  showSubmitButton,
  showFooter = true
}) => {
  return (
    <Dialog onClose={onClose} isOpened={isOpened} size={size} mode={mode}>
      <DialogHeader title={title} icon={icon} />
      <DialogBody>
        <Typography component='p' variant='p3'>
          {description}
        </Typography>
      </DialogBody>
      {showFooter && (
        <DialogFooter
          onClose={() => {
            onClose();
            onCancel();
          }}
          cancelButtonText={cancelButtonText}
          submitButtonText={submitButtonText}
          showCancelButton={showCancelButton}
          showSubmitButton={showSubmitButton}
          submitButtonProps={{ onClick: () => onSubmit(onClose) }}
        />
      )}
    </Dialog>
  );
};

export default AcceptionDialog;
