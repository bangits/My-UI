import { Typography } from '@/my-ui-core';
import classNames from 'classnames';
import React from 'react';
import styles from './Tooltip.module.scss';

const Tooltip = () => {
  return (
    <div
      className={classNames(styles.TooltipWrapper, styles['TooltipColor--primary'], styles['Tooltip-top'])}
      style={{ marginTop: '3rem' }}>
      <Typography component='span' variant='p5'>
        Edit
      </Typography>
    </div>
  );
};

export default Tooltip;
