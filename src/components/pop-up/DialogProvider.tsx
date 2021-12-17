import React, { useCallback, useEffect, useState } from 'react';
import { DialogTypes } from '.';
import { AcceptionDialog } from './AcceptionDialog';
import { dialog, DialogConfig } from './DialogService';
import { DialogWithActions } from './DialogWithActions';

const DialogProvider = () => {
  const [dialogConfig, setDialogConfig] = useState<DialogConfig>(null);
  const [isOpenedDialog, setOpenedDialog] = useState(false);

  const onClose = useCallback(() => {
    setOpenedDialog(false);
  }, []);

  useEffect(() => {
    dialog.subscribe((config) => {
      setOpenedDialog(true);
      setDialogConfig(config);
    });
  }, []);

  if (!dialogConfig) return null;

  switch (dialogConfig.type) {
    case DialogTypes.ACCEPTION_DIALOG:
      return <AcceptionDialog {...(dialogConfig?.config || {})} isOpened={isOpenedDialog} onClose={onClose} />;

    case DialogTypes.DIALOG_WITH_ACTIONS:
      return <DialogWithActions {...(dialogConfig?.config || {})} isOpened={isOpenedDialog} onClose={onClose} />;
  }
};

export default DialogProvider;
