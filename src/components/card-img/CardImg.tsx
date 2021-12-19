import { Typography } from '@/my-ui-core';
import { IComponent } from '@/types';
import React, { FC } from 'react';
import styles from './CardImg.module.scss';
import { ViewCardImageIcon, PlayArrowIcon, PhotoCamIcon } from '@/icons';
import classNames from 'classnames';
export interface CardImgProps extends IComponent {
  title: string;
  image?: string;
  handleClick?: () => void;
}
const CardImg: FC<CardImgProps> = ({ title, image, handleClick }) => {
  return (
    <div className={styles.CardImgContainer} onClick={handleClick}>
      <div className={styles.CardImg}>
        <span className={classNames(styles['HoverBox'], 'HoverBox')}>
          <span className={classNames(styles['HoverBox-PlayBtn'], 'HoverBox-PlayBtn')}>
            <span className={classNames(styles['HoverBox-PlayBtnInner'], 'HoverBox-PlayBtnInner')}>
              <span className={classNames(styles['HoverBox-PlayBtnIcon'], 'HoverBox-PlayBtnIcon')}>
                <PlayArrowIcon width={'100%'} />
              </span>
            </span>
          </span>
          <span className={classNames(styles['HoverBox-ViewIcon'], 'HoverBox-ViewIcon')}>
            <ViewCardImageIcon width={'100%'} />
          </span>
          <span className={classNames(styles['HoverBox-LinkText'], 'HoverBox-LinkText')}>Play demo</span>
          <span className={classNames(styles['HoverBox-OpacityLayer'], 'HoverBox-OpacityLayer')}></span>
        </span>

        {image && <img src={image} alt='' />}
      </div>
      <div className={styles.CardTextContainer}>
        <Typography variant='p5' component='p' className={styles.CardText}>
          {title}
        </Typography>
      </div>
    </div>
  );
};

export default CardImg;
