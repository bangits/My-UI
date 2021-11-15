import { uniqueIdMaker, useAlertPortal } from '@/helpers';
import { Alert } from '@/my-ui-core';
import React, { forwardRef, useCallback, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { AlertProps } from './Alert';
import styles from './Alert.module.scss';
import { alert } from './AlertService';

export type RefType = HTMLDivElement;

export interface AlertContainerProps {
  autoClose?: boolean;
  autoCloseDelay?: number;
}

const AlertContainer = forwardRef<RefType, AlertContainerProps>(({ autoClose, autoCloseDelay = 5000 }, ref) => {
  const [alerts, setAlerts] = useState<AlertProps[]>([]);
  const { loaded, portalId } = useAlertPortal();
  const [removing, setRemoving] = useState('');

  const removeAlert = useCallback(
    (id) => {
      setAlerts(alerts.filter((alert) => alert.id !== id));
    },
    [alerts]
  );

  useEffect(() => {
    if (removing) {
      setAlerts((alert) => alert.filter((a) => a.id !== removing));
    }
  }, [removing]);

  useEffect(() => {
    //@ts-ignore
    alert.subscribe((alert) => {
      setAlerts([...alerts, { ...alert, id: uniqueIdMaker() }]);
    });

    if (autoClose && alerts.length) {
      const id = alerts[alerts.length - 1].id;

      setTimeout(() => {
        setRemoving(id);
      }, autoCloseDelay);
    }
  }, [alerts, autoClose, autoCloseDelay]);

  return loaded ? (
    ReactDOM.createPortal(
      <div className={styles.AlertContainer}>
        {alerts.map((alert) => {
          return (
            <Alert
              onClose={() => removeAlert(alert.id)}
              key={alert.id}
              icon={alert.icon}
              alertLabel={alert.alertLabel}
            />
          );
        })}
      </div>,
      document.getElementById(portalId)
    )
  ) : (
    <></>
  );
});

export default AlertContainer;
