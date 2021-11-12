import { AlertClose } from '@/icons';
import { Typography } from '@/my-ui-core';
import { IComponent, UIColors } from '@/types';
import classNames from 'classnames';
import React, { FC } from 'react';
import styles from './Tag.module.scss';

export interface TagProps extends IComponent {
  title: string;
  closeIcon?: boolean;
  inactive?: boolean;
  color?: UIColors;
  handleClick?: () => void;
}

const Tag: FC<TagProps> = ({ title, closeIcon, inactive, color = 'primary', handleClick }) => {
  return (
    <>
      <div
        className={classNames(styles.Tag, {
          [styles[`Tag--icon`]]: closeIcon,
          [styles[`Tag--${color}`]]: !inactive,
          [styles.TagText]: closeIcon
        })}>
        <Typography component='span' variant='p4' className={classNames(styles.TagText)}>
          {title}
        </Typography>
        {closeIcon && <span className={styles.IconContainer}>{closeIcon && <AlertClose onClick={handleClick} />}</span>}
      </div>
    </>
  );
};

export default Tag;
