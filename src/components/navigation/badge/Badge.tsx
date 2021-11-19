import React, { FC, ReactNode } from 'react';
import { IComponent } from '@/types';
import styles from './Badge.module.scss';
import classNames from 'classnames';
import { typedMemo } from '@/helpers';

export interface BadgeProps extends IComponent {
  quantity?: number;
  children?: ReactNode;
  badgeSize?: string;
  badgeStyle?: string;
}

const Badge: FC<BadgeProps> = ({ quantity, children, className, badgeSize = 'ms', badgeStyle }) => {
  return (
    <div className={classNames(styles.BadgeContainer, className)}>
      {children}

      <span
        className={classNames(styles.BadgeNumber, styles['BadgeNumber--primary'], badgeStyle, {
          [styles.BadgeNumberMs]: badgeSize === 'ms',
          [styles.BadgeNumberSs]: badgeSize === 'ss'
        })}>
        {' '}
        {quantity > 0 && quantity <= 99 ? quantity : '99+'}
      </span>
    </div>
  );
};

export default typedMemo(Badge);
