import { typedMemo, useStyles } from '@/helpers';
import { ComponentType, IComponent } from '@/types';
import classNames from 'classnames';
import React, { FC } from 'react';
import styles from './Card.module.scss';

export interface CardProps extends IComponent {
  component?: ComponentType;
  borderRadius?: number;
  boxShadow?: string;
}

const Card: FC<CardProps> = ({ component: Component = 'div', boxShadow, borderRadius, className, ...cardProps }) => {
  const classes = useStyles({
    card: { borderRadius: `${borderRadius}rem`, boxShadow }
  });

  return <Component {...cardProps} className={classNames(styles.CardBase, classes.card, className)} />;
};

export default typedMemo(Card);
