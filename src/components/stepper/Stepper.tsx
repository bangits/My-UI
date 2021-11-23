import { getMyUIPrefix } from '@/configs';
import { typedMemo } from '@/helpers';
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
  steps: T;
  value?: T[number]['value'] | 'finished';
}

function Stepper<T extends StepType[]>({ steps, value }: StepperProps<T>) {
  const activeIndex = useMemo(() => steps.findIndex((o) => o.value === value), [value]);

  return (
    <div
      className={classNames(
        styles.SteeperWrapper,
        styles['SteeperWrapper--primary'],
        `${getMyUIPrefix()}-SteeperWrapper`
      )}>
      {steps &&
        steps.map((option, index) => {
          return (
            <div
              key={option.value}
              className={classNames(
                styles.Stepper,
                styles.StepperChecked,
                `${getMyUIPrefix()}-Stepper`,
                `${getMyUIPrefix()}-StepperChecked`
              )}>
              {index > 0 ? (
                value === 'finished' ? (
                  <div className={classNames(styles.StepperLineContainer, `${getMyUIPrefix()}-StepperLineContainer`)}>
                    <span className={classNames(styles.StepperLine, `${getMyUIPrefix()}-StepperLine`)}></span>
                  </div>
                ) : activeIndex > index ? (
                  <div className={classNames(styles.StepperLineContainer, `${getMyUIPrefix()}-StepperLineContainer`)}>
                    <span className={classNames(styles.StepperLine, `${getMyUIPrefix()}-StepperLine`)}></span>
                  </div>
                ) : activeIndex < index ? (
                  <div className={classNames(styles.StepperLineContainer, `${getMyUIPrefix()}-StepperLineContainer`)}>
                    <span
                      className={classNames(
                        styles.StepperLine,
                        styles.StepperLineInactive,
                        `${getMyUIPrefix()}-StepperLine`,
                        `${getMyUIPrefix()}-StepperLineInactive`
                      )}></span>
                  </div>
                ) : (
                  <div className={classNames(styles.StepperLineContainer, `${getMyUIPrefix()}-StepperLineContainer`)}>
                    <span className={classNames(styles.StepperLine, `${getMyUIPrefix()}-StepperLine`)}></span>
                  </div>
                )
              ) : (
                <> </>
              )}
              <span className={classNames(styles.StepperContainer, `${getMyUIPrefix()}-StepperContainer`)}>
                {value === 'finished' ? (
                  <span className={classNames(styles.Step, `${getMyUIPrefix()}-Step`)}>
                    <div className={classNames(styles.StepSection, `${getMyUIPrefix()}-StepSection`)}>
                      <CheckStepperIcon />
                    </div>
                  </span>
                ) : activeIndex > index ? (
                  <span className={classNames(styles.Step, `${getMyUIPrefix()}-Step`)}>
                    <div className={classNames(styles.StepSection, `${getMyUIPrefix()}-StepSection`)}>
                      <CheckStepperIcon />
                    </div>
                  </span>
                ) : activeIndex < index ? (
                  <span className={classNames(styles.Step, `${getMyUIPrefix()}-Step`)}>
                    <div
                      className={classNames(
                        styles.StepSection,
                        styles.StepperInactive,
                        `${getMyUIPrefix()}-StepSection`,
                        `${getMyUIPrefix()}-StepperInactive`
                      )}>
                      <EllipseColorIcon />
                    </div>
                  </span>
                ) : (
                  <span className={classNames(styles.Step, `${getMyUIPrefix()}-Step`)}>
                    <div className={classNames(styles.StepSection, `${getMyUIPrefix()}-StepSection`)}>
                      <EllipseIcon />
                    </div>
                  </span>
                )}
                <Typography
                  variant='p5'
                  component='span'
                  className={classNames(styles.StepTextContainer, `${getMyUIPrefix()}-StepTextContainer`, {
                    [styles.StepTextInactive]: activeIndex < index
                  })}>
                  <Typography
                    variant='p5'
                    component='span'
                    className={classNames(styles.StepText, `${getMyUIPrefix()}-StepText`)}>
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
export default typedMemo(Stepper);
