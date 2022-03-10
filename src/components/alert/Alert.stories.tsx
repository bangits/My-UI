import { getComponentName } from '@/configs';
import { AlertCheck, AlertError, AlertInfo, AlertWarning } from '@/icons';
import { Button } from '@/my-ui-core';
import { boolean, number, withKnobs } from '@storybook/addon-knobs';
import classNames from 'classnames';
import React from 'react';
import Alert from './Alert';
import styles from './Alert.module.scss';
import AlertContainer from './AlertContainer';
import { alert } from './AlertService';

export default {
  component: Alert,
  decorators: [withKnobs],
  title: getComponentName('ALERT', 'Alert')
};

export const Default = () => {
  const successAdd = () => {
    alert.success({
      alertLabel: 'You are successful person!',
      autoClose: false
    });
  };

  const errorAdd = () => {
    alert.error({
      alertLabel: 'Error Message is Appeared'
    });
  };

  const infoAdd = () => {
    alert.info({
      alertLabel: 'Bangits is a թույն company'
    });
  };

  const loadingAdd = () => {
    alert.loading({
      alertLabel: 'Loading...'
    });
  };

  const warningAdd = () => {
    alert.warning({
      alertLabel: "Be careful don't do it again!"
    });
  };

  return (
    <div style={{ width: 840 }}>
      <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
        <Button
          onClick={successAdd}
          variant='ghost'
          startIcon={
            <AlertCheck
              className={classNames(styles['AlertIcon'], styles['AlertIcon--Check'], 'AlertIcon', 'AlertIcon--Check')}
            />
          }>
          Success!
        </Button>
        <Button
          onClick={warningAdd}
          variant='ghost'
          startIcon={
            <AlertWarning
              className={classNames(
                styles['AlertIcon'],
                styles['AlertIcon--Warning'],
                'AlertIcon',
                'AlertIcon--Warning'
              )}
            />
          }>
          Warning!
        </Button>
        <Button
          onClick={errorAdd}
          variant='ghost'
          startIcon={
            <AlertError
              className={classNames(styles['AlertIcon'], styles['AlertIcon--Error'], 'AlertIcon', 'AlertIcon--Error')}
            />
          }>
          Error!
        </Button>
        <Button
          onClick={infoAdd}
          variant='ghost'
          startIcon={
            <AlertInfo
              className={classNames(styles['AlertIcon'], styles['AlertIcon--Info'], 'AlertIcon', 'AlertIcon--Info')}
            />
          }>
          Information!
        </Button>
        <Button onClick={loadingAdd} variant='ghost'>
          Loading!
        </Button>
      </div>
      <AlertContainer autoClose={boolean('autoClose', true)} autoCloseDelay={number('autoCloseDelay', 5000)} />
    </div>
  );
};
