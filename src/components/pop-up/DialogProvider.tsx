import React, { useCallback, useEffect, useState } from 'react';
import { AcceptionDialog } from './AcceptionDialog';
import { dialog, DialogConfig } from './DialogService';

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

  // There should be switch case when adding more dialog options
  return <AcceptionDialog {...(dialogConfig?.config || {})} isOpened={isOpenedDialog} onClose={onClose} />;
};

export default DialogProvider;
