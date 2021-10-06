import { ComponentType } from '@/types/props';
import classNames from 'classnames';
import { FC } from 'react';
import styles from './Typography.module.scss';

export type TypographyVariants = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p1' | 'p2' | 'p3' | 'p4';

export interface TypographyProps {
  variant?: TypographyVariants;
  component?: ComponentType;
  className?: string;
}

const Typography: FC<TypographyProps> = ({
  children,
  variant = 'p1',
  component: Component = 'div',
  className = ''
}) => {
  return <Component className={classNames(styles.Typography, styles[variant], className)}>{children}</Component>;
};

export default Typography;
