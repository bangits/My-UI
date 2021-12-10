import { Typography } from '@/my-ui-core';
import React, { FC } from 'react';
import styles from './CardImg.module.scss';
import { IComponent } from '@/types';
export interface CardImgProps extends IComponent {
  title: string;
  image?: string;
  className?: string;
  handleClick?: () => void;
}
const CardImg: FC<CardImgProps> = ({ title, image, handleClick }) => {
  return (
    <div className={styles.CardImgContainer} onClick={handleClick}>
      <div className={styles.CardImg}>{image && <img src={image} alt='' />}</div>
      <div className={styles.CardTextContainer}>
        <Typography variant='p5' component='p' className={styles.CardText}>
          {title}
        </Typography>
      </div>
    </div>
  );
};

export default CardImg;
