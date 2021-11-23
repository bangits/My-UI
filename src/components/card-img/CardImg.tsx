import { Typography } from '@/my-ui-core';
import React, { FC } from 'react';
import styles from './CardImg.module.scss';
import { IComponent } from '@/types';
import { getMyUIPrefix } from '@/configs';
import classNames from 'classnames';
export interface CardImgProps extends IComponent {
  title: string;
  image?: string;
  handleClick?: () => void;
}
const CardImg: FC<CardImgProps> = ({ title, image, handleClick }) => {
  return (
    <div className={classNames(styles.CardImgContainer, `${getMyUIPrefix()}-CardImgContainer`)} onClick={handleClick}>
      <div className={classNames(styles.CardImg, `${getMyUIPrefix()}-CardImg`)}>
        {image && <img src={image} alt='' />}
      </div>
      <div className={classNames(styles.CardTextContainer, `${getMyUIPrefix()}-CardTextContainer`)}>
        <Typography variant='p5' component='p' className={classNames(styles.CardText, `${getMyUIPrefix()}-CardText`)}>
          {title}
        </Typography>
      </div>
    </div>
  );
};

export default CardImg;
