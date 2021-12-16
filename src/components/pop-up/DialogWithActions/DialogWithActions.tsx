import { Typography } from '@/components';
import { FC, ReactNode, useCallback, useEffect, useMemo, useState } from 'react';
import { DialogBody, DialogHeader, Dialog, DialogActions, DialogProps } from '..';
import { DialogHeaderWithClose } from '../DialogHeaderWithClose';
import styles from '../Dialog.module.scss';
import { EditIcon, TrashIndicator } from '@/icons';
import { DialogActionProps } from './../DialogActions';

export interface DialogWithActionsProps {
  title?: ReactNode;
}

const DialogWithActions: FC<DialogWithActionsProps & DialogProps> = ({ title, onClose, isOpened, size, mode }) => {
  const dialogActionsArray = useMemo<DialogActionProps['actions']>(
    () => [
      {
        icon: <EditIcon />,
        label: 'edit',
        position: 'left'
      },
      {
        icon: <EditIcon />,
        label: 'upload',
        position: 'left'
      },
      {
        icon: <TrashIndicator />,
        label: 'delete',
        position: 'right'
      }
    ],
    []
  );

  return (
    <Dialog onClose={onClose} isOpened={isOpened} size={size} mode={mode}>
      <DialogHeaderWithClose />
      <div className={styles.DialogContent}>
        <img
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png'
          alt=''
        />
      </div>
      <hr />
      <DialogActions actions={dialogActionsArray} />
    </Dialog>
  );
};

export default DialogWithActions;
