import React from 'react';
import styles from './PopUp.module.scss';

const PopUp = () => {
  return (
    <div className={styles.PopUpWrapper}>
      <div className={styles.PopUpWrapperParent}>
        <div className={styles.PopUpCointainer}>
          <div className={styles.PopUp}></div>
        </div>
        <div className={styles.Overlay}></div>
      </div>
    </div>
  );
};

export default PopUp;
