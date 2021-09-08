import React, { JSXElementConstructor, ReactNode } from 'react';
import classNames from 'classnames';
import styles from './Button.module.scss';

export type ButtonVariants = 'ghost' | 'default';

interface ButtonProps {
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  color?: 'primary' | any;
  component?: string | JSXElementConstructor<any>;
  disabled?: boolean;
  endIcon?: ReactNode;
  startIcon?: ReactNode;
  size?: string;
  fullWidth?: string;
  variant?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  color,
  component: Component = 'button',
  disabled = false,
  endIcon,
  startIcon,
  fullWidth,
  variant
}) => {
  return (
    <Component disabled={disabled} onClick={onClick} className={classNames(styles[variant], styles.color)}>
      {children}
    </Component>
  );
};

export default Button;
