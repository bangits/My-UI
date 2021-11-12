import { Triangle } from '@/icons';
import { Typography } from '@/my-ui-core';
import classNames from 'classnames';
import React, { FC, useState, ReactNode } from 'react';
import styles from './Tooltip.module.scss';
import { IComponent, UIColors } from '@/types';

export interface TooltipProps extends IComponent {
  text: string;
  children: ReactNode;
  variant?: string;
  color?: UIColors;
}

const Tooltip: FC<TooltipProps> = ({ text, children, variant = 'left', color = 'primary' }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className={styles.TooltipContainer}>
      {showTooltip && (
        <div
          className={classNames(styles.TooltipWrapper, styles[`TooltipColor--${color}`], styles[`Tooltip-${variant}`])}>
          <div className={styles.TooltipTriangle}>
            <Triangle />
          </div>
          <Typography component='span' variant='p5'>
            {text}
          </Typography>
        </div>
      )}

      <div
        onMouseOver={() => {
          setShowTooltip(true);
        }}
        onMouseOut={() => {
          setShowTooltip(false);
        }}>
        {children}
      </div>
    </div>
  );
};

export default Tooltip;
