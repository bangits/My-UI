import React, { FC, ReactNode } from 'react';
import classNames from 'classnames';
import { Typography } from '@/my-ui-core';
import { IComponent } from '@/types';
import styles from './CardImg.module.scss';
export interface CardImgProps extends IComponent {
  title: string;
  image?: string;
  hoverComponent?: ReactNode;
  handleClick?: () => void;
}
const CardImg: FC<CardImgProps> = ({ title, image, handleClick, hoverComponent }) => {
  return (
    <div className={classNames(styles['CardImgContainer'], 'CardImgContainer')} onClick={handleClick}>
      <div className={classNames(styles['CardImg'], 'CardImg')}>
        {hoverComponent}
        {image && <img src={image} alt='' />}
      </div>
      <div className={classNames(styles['CardTextContainer'], 'CardTextContainer')}>
        <Typography className={classNames(styles['CardText'], 'CardText')} variant='p5' component='p'>
          {title}
        </Typography>
      </div>
    </div>
  );
};

export default CardImg;
