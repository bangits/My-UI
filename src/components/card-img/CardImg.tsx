import { Typography } from '@/my-ui-core';
import { IComponent } from '@/types';
import classNames from 'classnames';
import { FC, ReactNode } from 'react';
import styles from './CardImg.module.scss';
export interface CardImgProps extends IComponent {
  title: ReactNode;
  image?: string;
  hoverComponent?: ReactNode;
  handleClick?: () => void;
}
const CardImg: FC<CardImgProps> = ({ title, image, handleClick, hoverComponent, className }) => {
  return (
    <div className={classNames(styles['CardImgContainer'], className, 'CardImgContainer')}>
      <div className={classNames(styles['CardImg'], 'CardImg')}>
        {hoverComponent}
        {image && <img src={image} alt='' />}
      </div>
      <div className={classNames(styles['CardTextContainer'], 'CardTextContainer')}>
        <Typography className={classNames(styles['CardText'], 'CardText')} variant='p5' component='p'>
          <span onClick={handleClick}>{title}</span>
        </Typography>
      </div>
    </div>
  );
};

export default CardImg;
