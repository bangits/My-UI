import { getMyUIPrefix } from '@/configs';
import classNames from 'classnames';
import React from 'react';
import styles from './Loader.module.scss';

const Loader = () => {
  return (
    <div className={classNames(styles.LoaderWrapper, `${getMyUIPrefix()}-LoaderWrapper`)}>
      <div className={classNames(styles.Loader, `${getMyUIPrefix()}-Loader`)}></div>
    </div>
  );
};

export default Loader;
