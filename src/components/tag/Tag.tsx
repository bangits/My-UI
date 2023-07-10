import { AlertClose } from '@/icons';
import { Tooltip, Typography } from '@/my-ui-core';
import { IComponent, UIColors } from '@/types';
import classNames from 'classnames';
import { FC, ReactNode } from 'react';
import styles from './Tag.module.scss';

export interface TagProps extends IComponent {
  title: string;
  value?: number | string;
  startComponent?: boolean;
  closeIcon?: boolean;
  tooltipText?: string;
  endIcon?: ReactNode | ReactNode[];
  fixedEndIconWidth?: boolean;
  inactive?: boolean;
  color?: UIColors;
  showCloseOnHover?: boolean;
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
  fixedEndIconWidth = true,
  className,
  endIcon,
  value,
  tooltipText,
  showCloseOnHover
}) => {
  return (
    <>
      <div
        className={classNames(
          styles.Tag,
          {
            [styles['Tag--icon']]: closeIcon,
            [styles['Tag--showCloseOnHover']]: showCloseOnHover,
            [styles[`Tag--${color}`]]: !inactive,
            [styles.TagText]: closeIcon
          },
          className
        )}
        onClick={onClick}>
        {value && <div className={styles.StartComponent}>{value}</div>}
        <Typography component='span' variant='p4' className={styles.TagText}>
          {title}
        </Typography>
        {closeIcon && (
          <span className={styles.IconContainer}>
            <Tooltip text={tooltipText || ''}>
              {endIcon ? (
                Array.isArray(endIcon) ? (
                  <>
                    {endIcon.map((icon) => (
                      <div
                        className={classNames(styles.EndIcon, {
                          [styles['EndIcon--fix-end-icon-width']]: fixedEndIconWidth
                        })}>
                        {icon}
                      </div>
                    ))}
                  </>
                ) : (
                  <div onClick={onClick} className={styles.EndIcon}>
                    {endIcon}
                  </div>
                )
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
