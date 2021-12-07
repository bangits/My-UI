import { Typography } from '@/components';
import { CheckIcon } from '@/icons';
import React from 'react';
import styles from './CheckboxCircle.module.scss';

const CheckboxCircle = () => {
  return (
    <div className={styles.CheckboxCircle}>
      <input type='checkbox' id='checkbox' />
      <label htmlFor='checkbox'>
        <Typography component='span' variant='p4'>
          EUR
        </Typography>
      </label>
    </div>
  );
};

export default CheckboxCircle;
