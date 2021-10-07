import { typedMemo } from '@/helpers/typedMemo';
import { ComponentType, IComponent } from '@/types';
import classNames from 'classnames';
import React, { FC } from 'react';
import styles from './Card.module.scss';

export interface CardProps extends IComponent {
  component?: ComponentType;
  borderRadius?: number;
}

const Card: FC<CardProps> = ({ component: Component = 'div', borderRadius, ...cardPros }) => {
  return (
    <div {...cardPros} style={{ borderRadius: `${borderRadius}rem` }} className={classNames(styles.CardBase)}></div>
  );
};

export default typedMemo(Card);
