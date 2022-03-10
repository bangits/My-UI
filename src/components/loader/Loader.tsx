import classNames from 'classnames';
import React from 'react';
import styles from './Loader.module.scss';

export interface LoaderProps {
  size?: 'sm' | 'md' | 'lg';
}

const Loader = ({ size = 'lg' }: LoaderProps) => {
  return (
    <div
      className={classNames(styles.LoaderWrapper, {
        [styles[`LoaderWrapper--${size}`]]: size
      })}>
      <div className={classNames(styles.Loader, styles['Loader--primary'])} />
    </div>
  );
};

export default Loader;
