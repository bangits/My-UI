import { Typography } from '@/my-ui-core';
import React from 'react';
import styles from './Loader.module.scss';
import classNames from 'classnames';
import { getMyUIPrefix } from '@/configs';

const Loader = () => {
  return (
    <div className={classNames(styles.LoadWrapper, `${getMyUIPrefix()}-LoadWrapper`)}>
      <div className={classNames(styles.Loader, `${getMyUIPrefix()}-Loader`)} style={{ margin: '100px auto' }}></div>
    </div>
  );
};

export default Loader;

//remove style
