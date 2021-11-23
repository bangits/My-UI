import { UIColors } from '@/types';
import { ButtonHTMLAttributes, DetailedHTMLProps, FC, ReactNode } from 'react';
import styles from './Button.module.scss';
import classNames from 'classnames';
import { getMyUIPrefix } from '@/configs';

export type ButtonVariants = 'ghost' | 'default';

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
        `${getMyUIPrefix()}-ButtonBase`,
        {
          [styles[`ButtonVariant--${color}__${variant}`]]: variant !== 'default',
          [styles[`ButtonColor--${color}`]]: color
        },
        className
      )}
      {...props}>
      <div className={classNames(styles.startIcon, `${getMyUIPrefix()}-StartIcon`)}>{startIcon}</div>

      {children}

      <div className={classNames(styles.endIcon, `${getMyUIPrefix()}-EndIcon`)}>{endIcon}</div>
    </button>
  </>
);

export default Button;
