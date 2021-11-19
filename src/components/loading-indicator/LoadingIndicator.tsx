import classNames from 'classnames';
import React, { FC } from 'react';
import styles from './LoadingIndicator.module.scss';

export type IndicatorVariant = 'circle' | 'square';
export interface LoadingIndicatorProps {
  percent: number;
  variant: IndicatorVariant;
}

const LoadingIndicator: FC<LoadingIndicatorProps> = ({ percent, variant = 'circle' }) => {
  return (
    <>
      {variant === 'circle' ? (
        <div
          className={classNames(
            styles['LoadingIndicatorCircle'],
            styles['LoadingIndicatorCircle--success'],
            'Timer_LoadingIndicator'
          )}>
          <svg
            className={styles['LoadingIndicatorCircle__svg']}
            viewBox='0 0 100 100'
            xmlns='http://www.w3.org/2000/svg'>
            <g className={styles['LoadingIndicatorCircle__circle']}>
              <circle className={styles['LoadingIndicatorCircle__path-elapsed']} cx='50' cy='50' r='45'></circle>
              <path
                strokeDasharray={`${percent > 100 ? 0 : percent < 0 ? 283 : 283 - (283 * percent) / 100} 283`}
                className={classNames(styles['LoadingIndicatorCircle__path-remaining'], 'arc')}
                d='
                   M 50, 50
                   m -45, 0
                   a 45,45 0 1,0 90,0
                   a 45,45 0 1,0 -90,0
                   '></path>
            </g>
          </svg>
          <div className={styles.LoadingIndicatorCirclePercent}>
            <span>{percent > 100 ? 100 : percent < 0 || percent == undefined || percent == null ? 0 : percent}%</span>
          </div>
        </div>
      ) : (
        <div className={classNames(styles.LoadingIndicatorRectangle, styles['LoadingIndicatorRectangle--danger'])}>
          <svg height='40'>
            <rect className={styles.SecondRect} x='1' y='1' rx='4'></rect>
            <rect
              x='1'
              y='1'
              rx='4'
              stroke-dasharray={`${percent > 100 ? 628 : percent < 0 ? 0 : (628 * percent) / 100} 628`}></rect>
          </svg>
        </div>
      )}
    </>
  );
};

export default LoadingIndicator;
