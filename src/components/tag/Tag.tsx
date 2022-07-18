import { AlertClose } from '@/icons';
import { Typography, Tooltip } from '@/my-ui-core';
import { IComponent, UIColors } from '@/types';
import classNames from 'classnames';
import React, { FC, ReactNode } from 'react';
import styles from './Tag.module.scss';

export interface TagProps extends IComponent {
  title: string;
  value?: number | string;
  startComponent?: boolean;
  closeIcon?: boolean;
  tooltipText?: string;
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
  value,
  tooltipText
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
            <Tooltip text={tooltipText || ''}>
              {endIcon ? (
                <div onClick={onClick} className={styles.EndIcon}>
                  {endIcon}
                </div>
              ) : (
                closeIcon && <AlertClose onClick={onClose} className={styles.AlertClose} />
              )}
            </Tooltip>
          </span>
        )}
      </div>
    </>
  );
};

export default Tag;
