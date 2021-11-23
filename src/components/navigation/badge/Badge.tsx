import { getMyUIPrefix } from '@/configs';
import { typedMemo } from '@/helpers';
import { IComponent, UIColors } from '@/types';
import classNames from 'classnames';
import React, { FC, ReactNode } from 'react';
import styles from './Badge.module.scss';
export interface BadgeProps extends IComponent {
  quantity?: number;
  children?: ReactNode;
  badgeSize?: string;
  badgeStyle?: string;
  color?: UIColors;
}

const Badge: FC<BadgeProps> = ({ quantity, children, className, badgeSize = 'ms', badgeStyle, color }) => {
  return (
    <div className={classNames(styles.BadgeContainer, className, `${getMyUIPrefix()}-BadgeContainer`)}>
      {children}

      <span
        className={classNames(
          styles.BadgeNumber,
          badgeStyle,
          `${getMyUIPrefix()}-BadgeNumber`,
          `${getMyUIPrefix()}-badgeStyle`,
          styles[`BadgeNumber--${color}`],
          styles['BadgeNumber--primary'],
          badgeStyle,
          {
            [styles.BadgeNumberMs]: badgeSize === 'ms',
            [styles.BadgeNumberSs]: badgeSize === 'ss'
          }
        )}>
        {' '}
        {quantity > 0 && quantity <= 99 ? quantity : '99+'}
      </span>
    </div>
  );
};

export default typedMemo(Badge);
