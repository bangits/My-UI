import { CheckStepperIcon, EllipseColorIcon, EllipseIcon } from '@/icons';
import { Typography } from '@/my-ui-core';
import { IComponent } from '@/types';
import classNames from 'classnames';
import React, { useMemo } from 'react';
import styles from './Stepper.module.scss';

export type StepType = {
  title: string;
  value: string | number;
};
export interface StepperProps<T extends StepType[]> extends IComponent {
  steps?: T;
  value?: T[number]['value'] | 'finished';
}

function Stepper<T extends StepType[]>({ steps, value }: StepperProps<T>) {
  const activeIndex = useMemo(() => steps.findIndex((o) => o.value === value), [value]);

  return (
    <div className={styles.SteeperWrapper}>
      {steps &&
        steps.map((option, index) => {
          return (
            <div className={classNames(styles.Stepper, styles.StepperChecked)}>
              {index > 0 && (
                <div className={styles.StepperLineContainer}>
                  <span className={styles.StepperLine}></span>
                </div>
              )}
              <span className={styles.StepperContainer}>
                {value === 'finished' ? (
                  <span className={styles.Step}>
                    <div className={styles.StepSection}>
                      <CheckStepperIcon />
                    </div>
                  </span>
                ) : activeIndex > index ? (
                  <span className={styles.Step}>
                    <div className={styles.StepSection}>
                      <CheckStepperIcon />
                    </div>
                  </span>
                ) : activeIndex < index ? (
                  <span className={styles.Step}>
                    <div className={classNames(styles.StepSection, styles.StepperInactive)}>
                      <EllipseColorIcon />
                    </div>
                  </span>
                ) : (
                  <span className={styles.Step}>
                    <div className={styles.StepSection}>
                      <EllipseIcon />
                    </div>
                  </span>
                )}
                <Typography
                  variant='p5'
                  component='span'
                  className={classNames(styles.StepTextContainer, {
                    [styles.StepTextInactive]: activeIndex < index
                  })}>
                  <Typography variant='p5' component='span' className={styles.StepText}>
                    {option.title}
                  </Typography>
                </Typography>
              </span>
            </div>
          );
        })}
    </div>
  );
}
export default Stepper;
