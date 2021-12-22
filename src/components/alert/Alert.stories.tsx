import { getComponentName } from '@/configs';
import { AlertCheck, AlertError, AlertInfo, AlertWarning } from '@/icons';
import { Button } from '@/my-ui-core';
import { boolean, number, withKnobs } from '@storybook/addon-knobs';
import React from 'react';
import Alert from './Alert';
import AlertContainer from './AlertContainer';
import { alert } from './AlertService';
import classNames from 'classnames';
import styles from './Alert.module.scss';

export default {
  component: Alert,
  decorators: [withKnobs],
  title: getComponentName('ALERT', 'Alert')
};

export const Default = () => {
  const successAdd = () => {
    setTimeout(() => {
      alert.success({
        alertLabel: 'You are successful person!'
      });
    }, 1000);
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

  const warningAdd = () => {
    alert.warning({
      alertLabel: "Be careful don't do it again!"
    });
  };

  return (
    <div style={{ width: 800 }}>
      <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
        <Button
          onClick={successAdd}
          variant='ghost'
          startIcon={
            <div
              className={classNames(
                styles['AlertCheckIconCell'],
                styles['AlertCheckIconCell--Check'],
                'AlertCheckIconCell',
                'AlertCheckIconCell--Check'
              )}>
              <AlertCheck />
            </div>
          }>
          Success!
        </Button>
        <Button
          onClick={warningAdd}
          variant='ghost'
          startIcon={
            <div
              className={classNames(
                styles['AlertCheckIconCell'],
                styles['AlertCheckIconCell--Warning'],
                'AlertCheckIconCell',
                'AlertCheckIconCell--Warning'
              )}>
              <AlertWarning />
            </div>
          }>
          Warning!
        </Button>
        <Button
          onClick={errorAdd}
          variant='ghost'
          startIcon={
            <div
              className={classNames(
                styles['AlertCheckIconCell'],
                styles['AlertCheckIconCell--Error'],
                'AlertCheckIconCell',
                'AlertCheckIconCell--Error'
              )}>
              <AlertError />
            </div>
          }>
          Error!
        </Button>
        <Button
          onClick={infoAdd}
          variant='ghost'
          startIcon={
            <div
              className={classNames(
                styles['AlertCheckIconCell'],
                styles['AlertCheckIconCell--Info'],
                'AlertCheckIconCell',
                'AlertCheckIconCell--Info'
              )}>
              <AlertInfo />
            </div>
          }>
          Information!
        </Button>
      </div>
      <AlertContainer autoClose={boolean('autoClose', true)} autoCloseDelay={number('autoCloseDelay', 5000)} />
    </div>
  );
};
