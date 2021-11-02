import { Typography } from '@/my-ui-core';
import React from 'react';
import styles from './CardImg.module.scss';

const CardImg = () => {
  return (
    <div className={styles.CardImgContainer}>
      <div className={styles.CardImg}>
        <img src='https://wallpaperaccess.com/full/1765659.jpg' alt='' />
      </div>
      <div className={styles.CardTextContainer}>
        <Typography variant='p5' component='p' className={styles.CardText}>
          Diamond Link
        </Typography>
      </div>
    </div>
  );
};

export default CardImg;
