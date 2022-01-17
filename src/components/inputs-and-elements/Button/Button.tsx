import { UIColors } from '@/types';
import classNames from 'classnames';
import { ButtonHTMLAttributes, DetailedHTMLProps, FC, ReactNode } from 'react';
import styles from './Button.module.scss';

export type ButtonVariants = 'ghost' | 'default' | 'link' | 'unique-add-button';

export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, null> {
  color?: UIColors | 'default';
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
          [styles[`ButtonVariant--${color}__${variant}`]]: color === 'default' || variant !== 'default',
          [styles[`ButtonColor--${color}`]]: color
        },
        className
      )}
      {...props}>
      {startIcon && <div className={styles.startIcon}>{startIcon}</div>}

      {children}

      {endIcon && <div className={styles.endIcon}>{endIcon}</div>}
    </button>
  </>
);

export default Button;
