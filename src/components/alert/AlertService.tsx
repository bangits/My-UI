import { AlertCheck, AlertError, AlertInfo, AlertWarning } from '@/icons';
import { SubscriptionService } from '@/services';
import { AlertProps } from './Alert';

class AlertService extends SubscriptionService<AlertProps> {
  constructor() {
    super();
  }

  success(alert: AlertProps) {
    super.publish({ ...alert, icon: alert.icon || <AlertCheck /> });
  }

  warning(alert: AlertProps) {
    super.publish({ ...alert, icon: alert.icon || <AlertWarning /> });
  }

  error(alert: AlertProps) {
    super.publish({ ...alert, icon: alert.icon || <AlertError /> });
  }

  info(alert: AlertProps) {
    super.publish({ ...alert, icon: alert.icon || <AlertInfo /> });
  }
}

export const alert = new AlertService();
