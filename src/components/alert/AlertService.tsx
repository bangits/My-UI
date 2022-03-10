import { uniqueIdMaker } from '@/helpers';
import { AlertCheck, AlertError, AlertInfo, AlertWarning } from '@/icons';
import { SubscriptionService } from '@/services';
import { Loader } from '../loader';
import { AlertProps } from './Alert';

class AlertService extends SubscriptionService<AlertProps | string> {
  showAlert(alert: AlertProps) {
    const alertId = alert.id || uniqueIdMaker();

    super.publish({ ...alert, id: alertId });

    return alertId;
  }

  success(alert: AlertProps) {
    return this.showAlert({ ...alert, icon: alert.icon || <AlertCheck /> });
  }

  warning(alert: AlertProps) {
    return this.showAlert({ ...alert, icon: alert.icon || <AlertWarning /> });
  }

  error(alert: AlertProps) {
    return this.showAlert({ ...alert, icon: alert.icon || <AlertError /> });
  }

  info(alert: AlertProps) {
    return this.showAlert({ ...alert, icon: alert.icon || <AlertInfo /> });
  }

  loading(alert: AlertProps) {
    return this.showAlert({ ...alert, icon: alert.icon || <Loader size='sm' /> });
  }

  remove(alertId: string) {
    super.publish(alertId);
  }
}

export const alert = new AlertService();
