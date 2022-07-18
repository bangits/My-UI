import { AlertClose } from '@/icons';
import { Typography } from '@/my-ui-core';
import { IComponent, UIColors } from '@/types';
import classNames from 'classnames';
import React, { FC, ReactNode } from 'react';
import styles from './Tag.module.scss';

export interface TagProps extends IComponent {
  title: string;
  value?: number | string;
  startComponent?: boolean;
  closeIcon?: boolean;
  endIcon?: ReactNode;
  inactive?: boolean;
  color?: UIColors;
  onClose?: () => void;
  onClick?: () => void;
}

const Tag: FC<TagProps> = ({
  title,
  closeIcon,
  inactive,
  color = 'primary',
  onClose,
  onClick,
  className,
  endIcon,
  value
}) => {
  return (
    <>
      <div
        className={classNames(
          styles.Tag,
          {
            [styles[`Tag--icon`]]: closeIcon,
            [styles[`Tag--${color}`]]: !inactive,
            [styles.TagText]: closeIcon
          },
          className
        )}
        onClick={onClick}>
        {value && <div className={styles.StartComponent}> {value} </div>}
        <Typography component='span' variant='p4' className={classNames(styles.TagText)}>
          {title}
        </Typography>
        {closeIcon && (
          <span className={styles.IconContainer}>
            {endIcon ? (
              <div onClick={onClick} className={styles.EndIcon}>
                {endIcon}
              </div>
            ) : (
              closeIcon && <AlertClose onClick={onClose} className={styles.AlertClose} />
            )}
          </span>
        )}
      </div>
    </>
  );
};

export default Tag;
