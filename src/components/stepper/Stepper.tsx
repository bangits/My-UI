import { CheckStepperIcon, EllipseColorIcon, EllipseIcon } from '@/icons';
import { Card, Typography } from '@/my-ui-core';
import classNames from 'classnames';
import React from 'react';
import styles from './Stepper.module.scss';

const Stepper = () => {
  return (
    <div className={styles.SteeperWrapper}>
      <div className={classNames(styles.Stepper, styles.StepperChecked)}>
        <span className={styles.StepperContainer}>
          <span className={styles.Step}>
            <div className={styles.StepSection}>
              <CheckStepperIcon />
            </div>
          </span>
          <Typography variant='p5' component='span' className={styles.StepTextContainer}>
            <Typography variant='p5' component='span' className={styles.StepText}>
              GAME INFROMATION
            </Typography>
          </Typography>
        </span>
      </div>

      <div className={styles.Stepper}>
        <div className={styles.StepperLineContainer}>
          <span className={styles.StepperLine}></span>
        </div>
        <span className={styles.StepperContainer}>
          <span className={styles.Step}>
            <div className={styles.StepSection}>
              <EllipseIcon />
            </div>
          </span>
          <Typography variant='p5' component='span' className={styles.StepTextContainer}>
            <Typography variant='p5' component='span' className={styles.StepText}>
              GAME PROPERTIES
            </Typography>
          </Typography>
        </span>
      </div>

      <div className={classNames(styles.Stepper, styles.StepperChecked)}>
        <div className={styles.StepperLineContainer}>
          <span className={styles.StepperLine}></span>
        </div>
        <span className={styles.StepperContainer}>
          <span className={styles.Step}>
            <div className={classNames(styles.StepSection, styles.StepperInactive)}>
              <EllipseColorIcon />
            </div>
          </span>
          <Typography
            variant='p5'
            component='span'
            className={classNames(styles.StepTextContainer, styles.StepTextInactive)}>
            <Typography variant='p5' component='span' className={styles.StepText}>
              OTHER DETAILS
            </Typography>
          </Typography>
        </span>
      </div>
    </div>
  );
};
export default Stepper;
