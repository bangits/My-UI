import classNames from 'classnames';
import React from 'react';
import styles from './LoadingIndicator.module.scss';

const LoadingIndicator = () => {
  return (
    <>
      <div className={classNames(styles['LoadingIndicatorCircle'], 'Timer_LoadingIndicator')}>
        <svg className={styles['LoadingIndicatorCircle__svg']} viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'>
          <g className={styles['LoadingIndicatorCircle__circle']}>
            <circle className={styles['LoadingIndicatorCircle__path-elapsed']} cx='50' cy='50' r='45'></circle>
            <path
              // id='LoadingIndicator-path-remaining'
              strokeDasharray={`283 283`}
              // style={{
              //   transition: time === 0 ? '0.1s linear all' : '1s linear all'
              // }}
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
          <span>0</span>
        </div>
      </div>
      <div className={styles.LoadingIndicatorRectangle} style={{ marginTop: '2rem' }}>
        <svg height='40'>
          <rect x='1' y='1' rx='4'></rect>
          <rect className={styles.SecondRect} x='1' y='1' rx='4'></rect>
        </svg>
      </div>
    </>
  );
};

export default LoadingIndicator;
