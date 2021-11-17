import { Button, ButtonProps } from '@/my-ui-core';
import React, { FC } from 'react';
import styles from './PopUp.module.scss';
import classNames from 'classnames';

export interface DialogActions {
  showCancelButton?: boolean;
  cancelButtonText?: string;
  showSubmitButton?: boolean;
  submitButtonText?: string;
  cancelButtonProps?: ButtonProps;
  submitButtonProps?: ButtonProps;
  className?: string;
  onClose?: () => void;
}

const DialogActions: FC<DialogActions> = ({
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
    <div className={classNames(styles.PopUpBtnGroup, className)}>
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
