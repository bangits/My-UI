import { getMyUIPrefix } from '@/configs';
import { Button, ButtonProps } from '@/my-ui-core';
import classNames from 'classnames';
import React, { FC, ReactNode } from 'react';
import styles from './Dialog.module.scss';
export interface DialogActionsProps {
  showCancelButton?: boolean;
  cancelButtonText?: ReactNode;
  showSubmitButton?: boolean;
  submitButtonText?: ReactNode;
  cancelButtonProps?: ButtonProps;
  submitButtonProps?: ButtonProps;
  className?: string;
  onClose?: () => void;
}

const DialogActions: FC<DialogActionsProps> = ({
  showCancelButton = true,
  cancelButtonText,
  showSubmitButton = true,
  submitButtonText,
  cancelButtonProps = {},
  submitButtonProps = {},
  onClose,
  className
}) => {
  return (
    <div className={classNames(styles.DialogBtnGroup, className, `${getMyUIPrefix()}-DialogBtnGroup`)}>
      {showCancelButton && (
        <Button variant='ghost' {...cancelButtonProps} onClick={cancelButtonProps.onClick || onClose}>
          {cancelButtonText}
        </Button>
      )}
      {showSubmitButton && (
        <Button variant='default' {...submitButtonProps}>
          {submitButtonText}
        </Button>
      )}
    </div>
  );
};

export default DialogActions;
