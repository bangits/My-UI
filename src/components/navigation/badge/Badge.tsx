import React, { FC, ReactNode, useCallback, useEffect, useState } from 'react';
import { IComponent, UIColors } from '@/types';
import styles from './Badge.module.scss';
import classNames from 'classnames';
import { typedMemo, useStyles } from '@/helpers';

export interface BadgeProps extends IComponent {
  quantity?: number;
  children?: ReactNode;
  badgeSize?: string;
  badgeStyle?: string;
  color?: UIColors;
  maxNumber?: number;
}

const Badge: FC<BadgeProps> = ({
  quantity,
  // quantity: propsQuantity,
  children,
  className,
  badgeSize = 'ms',
  badgeStyle,
  color,
  maxNumber
}) => {
  // const [quantity, setQuantity] = useState(propsQuantity);

  const [hovered, setHovered] = useState(false);

  const toggleHovered = useCallback(() => setHovered((prevHovered) => !prevHovered), []);

  const quantityWithMax = hovered ? quantity : quantity <= maxNumber ? quantity : maxNumber + '+';

  const badge = useStyles(
    {
      badgeWidth: {
        width: (data) => `${5.68 * (data.quantityWithMax?.toString().length || 0)}px` //7
      }
    },

    { quantityWithMax, hovered }
  );

  // useEffect(() => {
  //   if (propsQuantity > maxNumber) return setQuantity(propsQuantity);

  //   let remaining = propsQuantity < quantity ? quantity : propsQuantity - quantity;

  //   const isMinused = propsQuantity < quantity;

  //   const interval = setInterval(() => {
  //     if (isMinused ? remaining <= propsQuantity : !remaining) return clearInterval(interval);

  //     remaining--;
  //     setQuantity(isMinused ? remaining : (prev) => prev + 1);
  //   }, 50);

  //   return () => clearInterval(interval);
  // }, [propsQuantity]);

  return (
    <div className={classNames(styles.BadgeContainer, className)}>
      {children}
      {quantity > 0 && maxNumber > 0 && (
        <span
          className={classNames(
            styles.Badge,
            styles[`Badge--${color}`],
            styles['Badge--primary'],
            styles['BandgeNumberThreeNumbers'],
            styles['BandgeNumbers'],
            badgeStyle,
            badge.badgeWidth,
            {
              [styles.BadgeMs]: badgeSize === 'ms',
              [styles.BadgeSs]: badgeSize === 'ss'
            }
          )}
          onMouseEnter={toggleHovered}
          onMouseLeave={toggleHovered}>
          <span className={classNames(styles.BadgeNumber)}>{quantityWithMax}</span>
        </span>
      )}
    </div>
  );
};

export default typedMemo(Badge);
