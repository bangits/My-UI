import { Triangle } from '@/icons';
import { Typography } from '@/my-ui-core';
import classNames from 'classnames';
import React from 'react';
import styles from './Tooltip.module.scss';

const Tooltip = () => {
  return (
    <div className={styles.TooltipContainer}>
      <div
        className={classNames(styles.TooltipWrapper, styles['TooltipColor--primary'], styles['Tooltip-left'])}
        style={{ marginTop: '3rem' }}>
        <div className={styles.TooltipTriangle}>
          <Triangle />
        </div>
        <Typography component='span' variant='p5'>
          Edit
        </Typography>
      </div>

      <button>Click me</button>
    </div>
  );
};

export default Tooltip;
