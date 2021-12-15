import { UIColors } from '@/types';
import classNames from 'classnames';
import { ButtonHTMLAttributes, DetailedHTMLProps, FC, ReactNode } from 'react';
import styles from './Button.module.scss';

export type ButtonVariants = 'ghost' | 'default' | 'link';

export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, null> {
  color?: UIColors;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  fullWidth?: boolean;
  variant?: ButtonVariants;
}

const Button: FC<ButtonProps> = ({
  children,
  color = 'primary',
  variant = 'default',
  startIcon,
  endIcon,
  className,
  ...props
}) => (
  <>
    <button
      className={classNames(
        styles.ButtonBase,
        {
          [styles[`ButtonVariant--${color}__${variant}`]]: variant !== 'default',
          [styles[`ButtonColor--${color}`]]: color
        },
        className
      )}
      {...props}>
      <div className={styles.startIcon}>{startIcon}</div>

      {children}

      <div className={styles.endIcon}>{endIcon}</div>
    </button>
  </>
);

export default Button;
