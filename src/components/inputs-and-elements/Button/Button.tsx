import classNames from 'classnames';
import React, { ReactNode } from 'react';
import styles from './Button.module.scss';

export type ButtonVariants = 'ghost' | 'default';
export type ButtonColors = 'primary';
export type ButtonTypes = 'button' | 'submit' | 'reset';

export interface ButtonProps {
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  color?: ButtonColors;
  disabled?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  size?: string;
  fullWidth?: string;
  variant?: ButtonVariants;
  type?: ButtonTypes;
}

const Button: React.FC<ButtonProps> = ({
  children,
  color = 'primary',
  variant = 'default',
  leftIcon,
  rightIcon,
  ...props
}) => (
  <>
    <button
      className={classNames(styles.ButtonBase, {
        [styles[`ButtonVariant--${variant}`]]: variant !== 'default',
        [styles[`ButtonColor--${color}`]]: color
      })}
      {...props}>
      <div className={styles.LeftIcon}>{leftIcon}</div>

      {children}

      <div className={styles.RightIcon}>{rightIcon}</div>
    </button>
  </>
);

export default Button;
