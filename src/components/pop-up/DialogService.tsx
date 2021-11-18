import { SubscriptionService } from '@/services';
import { AcceptionDialogProps } from './AcceptionDialog';

export enum DialogTypes {
  ACCEPTION_DIALOG = 'ACCEPTION_DIALOG'
}

export interface BaseDialogProps {
  isOpened: boolean;
  onClose(): void;
}

export interface BaseDialogConfig {
  type: DialogTypes;
}

export type DialogConfig = {
  type: DialogTypes.ACCEPTION_DIALOG;
  config: AcceptionDialogProps;
};

class DialogService extends SubscriptionService<DialogConfig> {
  constructor() {
    super();
  }

  acceptionDialog(config: AcceptionDialogProps) {
    super.publish({
      type: DialogTypes.ACCEPTION_DIALOG,
      config
    });
  }
}

export const dialog = new DialogService();
