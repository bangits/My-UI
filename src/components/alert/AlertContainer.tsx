import { uniqueIdMaker } from '@/helpers';
import { Alert, Portal } from '@/my-ui-core';
import React, { FC, useCallback, useEffect, useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { AlertProps } from './Alert';
import styles from './Alert.module.scss';
import { alert } from './AlertService';

export interface AlertContainerProps {
  autoClose?: boolean;
  autoCloseDelay?: number;
}

const AlertContainer: FC<AlertContainerProps> = ({ autoClose, autoCloseDelay = 5000 }) => {
  const [alerts, setAlerts] = useState<AlertProps[]>([]);
  const [removing, setRemoving] = useState('');
  const [showMessage, setShowMessage] = useState(false);

  const removeAlert = useCallback(
    (id) => {
      setAlerts(alerts.filter((alert) => alert.id !== id));
      setShowMessage(false);
    },
    [alerts]
  );

  useEffect(() => {
    if (removing) {
      setAlerts((alert) => alert.filter((a) => a.id !== removing));
    }
  }, [removing]);

  useEffect(() => {
    alert.subscribe((alert) => {
      setAlerts([...alerts, { ...alert, id: uniqueIdMaker() }]);
      setShowMessage(true);
    });

    if (autoClose && alerts.length) {
      const id = alerts[alerts.length - 1].id;

      setTimeout(() => {
        setRemoving(id);
      }, autoCloseDelay);
    }
  }, [alerts, autoClose, autoCloseDelay]);

  return (
    <Portal>
      <div className={styles.AlertContainer}>
        <TransitionGroup>
          {alerts.map((alert) => {
            return (
              <CSSTransition
                timeout={1500}
                mountOnEnter
                unmountOnExit
                key={alert.id}
                classNames={{
                  enter: styles.AlertEnter,
                  enterActive: styles.AlertEnterActive,
                  exit: styles.AlertExit,
                  exitActive: styles.AlertExitActive
                }}>
                <Alert
                  onClose={() => {
                    setShowMessage(false);
                    removeAlert(alert.id);
                  }}
                  icon={alert.icon}
                  alertLabel={alert.alertLabel}
                />
              </CSSTransition>
            );
          })}
        </TransitionGroup>
      </div>
    </Portal>
  );
};

export default AlertContainer;
