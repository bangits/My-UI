import { SubscriptionService } from '@/services';
import { DialogProps } from '.';
import { AcceptionDialogProps } from './AcceptionDialog';
import { DialogWithActionsProps } from './DialogWithActions';

export enum DialogTypes {
  ACCEPTION_DIALOG = 'ACCEPTION_DIALOG',
  DIALOG_WITH_ACTIONS = 'DIALOG_WITH_ACTIONS'
}

export interface BaseDialogConfig {
  type: DialogTypes;
}

export type DialogConfig =
  | {
      type: DialogTypes.ACCEPTION_DIALOG;
      config: AcceptionDialogProps;
    }
  | {
      type: DialogTypes.DIALOG_WITH_ACTIONS;
      config: DialogWithActionsProps;
    };

class DialogService extends SubscriptionService<DialogConfig> {
  constructor() {
    super();
  }

  acceptionDialog(config: AcceptionDialogProps & DialogProps) {
    super.publish({
      type: DialogTypes.ACCEPTION_DIALOG,
      config
    });
  }

  dialogWithActions(config: DialogWithActionsProps & DialogProps) {
    super.publish({
      type: DialogTypes.DIALOG_WITH_ACTIONS,
      config
    });
  }
}

export const dialog = new DialogService();
