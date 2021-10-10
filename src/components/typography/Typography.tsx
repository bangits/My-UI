import { ComponentType, IComponent, UIColors } from '@/types';
import classNames from 'classnames';
import { FC } from 'react';
import styles from './Typography.module.scss';

export type TypographyVariants = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p1' | 'p2' | 'p3' | 'p4';

export interface TypographyProps extends IComponent {
  variant?: TypographyVariants;
  component?: ComponentType;
  color?: UIColors;
}

const Typography: FC<TypographyProps> = ({
  children,
  variant = 'p1',
  component: Component = 'div',
  className,
  color
}) => {
  return (
    <Component
      className={classNames(
        styles.Typography,
        styles[variant],
        {
          [styles[`Typography--${color}`]]: color
        },
        className
      )}>
      {children}
    </Component>
  );
};

export default Typography;
