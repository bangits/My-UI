import { ComponentType, IComponent, UIColors } from '@/types';
import classNames from 'classnames';
import { forwardRef, HTMLAttributes, ReactNode } from 'react';
import styles from './Typography.module.scss';

export type TypographyVariants = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p1' | 'p2' | 'p3' | 'p4' | 'p5';

export interface TypographyProps extends IComponent, HTMLAttributes<HTMLOrSVGElement> {
  variant?: TypographyVariants;
  component?: ComponentType;
  color?: UIColors;
  children: ReactNode;
}

const Typography = forwardRef<any, TypographyProps>(
  ({ children, variant = 'p1', component: Component = 'div', className, color }, ref) => {
    return (
      <Component
        // @ts-expect-error Ignoring typescript for union typecast
        className={classNames(
          styles.Typography,
          styles[variant],
          {
            [styles[`Typography--${color}`]]: color
          },
          className
        )}
        ref={ref}>
        {children}
      </Component>
    );
  }
);

export default Typography;
