import { FC, JSXElementConstructor } from 'react';
import styles from './Typography.module.scss';
import classNames from 'classnames';

export type TypographyVariants = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p1' | 'p2' | 'p3' | 'p4';

export type TypographyProps = {
  variant?: TypographyVariants;
  component?: string | JSXElementConstructor<any>;
  className?: string;
};

const Typography: FC<TypographyProps> = ({ children, variant = 'p1', component = 'div', className = '' }) => {
  const Component = component;

  return <Component className={classNames(styles.Typography, styles[variant], className)}>{children}</Component>;
};

export default Typography;
