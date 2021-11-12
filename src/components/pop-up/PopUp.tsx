import React from 'react';
import styles from './PopUp.module.scss';

const PopUp = () => {
  return (
    <div className={styles.PopUpWrapper}>
      <div></div>
      <div className={styles.Overlay}></div>
    </div>
  );
};

export default PopUp;
