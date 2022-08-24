import { typedMemo } from '@/helpers';
import { UIColors } from '@/types';
import classNames from 'classnames';
import { FC, useEffect, useRef, useState } from 'react';
import styles from './LoadingIndicator.module.scss';

export type IndicatorVariant = 'circle' | 'square';
export interface LoadingIndicatorProps {
  percent: number;
  variant: IndicatorVariant;
  color?: UIColors;
  dividerSize?: number;
  fullWidth?: boolean;
  disabled?: boolean;
}

const LoadingIndicator: FC<LoadingIndicatorProps> = ({
  percent,
  variant = 'circle',
  color,
  dividerSize = 10,
  children,
  fullWidth,
  disabled
}) => {
  const loadingIndicatorRef = useRef<HTMLDivElement>(null);

  const [loadingIndicatorDashArrayWidth, setLoadingIndicatorDashArrayWidth] = useState(0);

  useEffect(() => {
    setLoadingIndicatorDashArrayWidth(loadingIndicatorRef.current && loadingIndicatorRef.current.offsetWidth * 2 + 68);
  }, [loadingIndicatorRef.current]);

  return (
    <>
      {variant === 'circle' ? (
        <div
          className={classNames(
            styles['LoadingIndicatorCircle'],
            styles[`LoadingIndicatorCircle--${color}`],
            'Timer_LoadingIndicator',
            {
              [styles['LoadingIndicatorCircle--full-width']]: fullWidth
            }
          )}>
          <svg
            className={styles['LoadingIndicatorCircle__svg']}
            viewBox='0 0 100 100'
            xmlns='http://www.w3.org/2000/svg'>
            <g className={styles['LoadingIndicatorCircle__circle']}>
              <circle
                className={classNames(styles['LoadingIndicatorCircle__path-elapsed'])}
                cx='50'
                cy='50'
                r='45'></circle>
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
        <div
          className={classNames(
            styles.LoadingIndicatorRectangle,
            styles['LoadingDropIndicator'],
            styles[`LoadingIndicatorRectangle--${color}`],
            {
              [styles['LoadingIndicatorRectangle--full-width']]: fullWidth,
              [styles['LoadingIndicatorRectangle--disabled']]: disabled
            }
          )}
          ref={loadingIndicatorRef}>
          <svg className={styles.SecondRectContainer}>
            <rect className={styles.SecondRect} x='1' y='1' rx='4'></rect>
            <rect
              x='1'
              y='1'
              rx='4'
              stroke-dasharray={`${
                (percent > 100
                  ? loadingIndicatorDashArrayWidth
                  : percent < 0
                  ? 0
                  : (loadingIndicatorDashArrayWidth * percent) / 100) / dividerSize
              }rem ${loadingIndicatorDashArrayWidth / dividerSize}rem`}></rect>
          </svg>
          <div className={styles.LoadingIndicatorContent}>{children}</div>
        </div>
      )}
    </>
  );
};

export default typedMemo(LoadingIndicator);
