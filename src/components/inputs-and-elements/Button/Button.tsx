import { TypographyVariants } from '@/my-ui-core';
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
  removeUnderline?: boolean;
  variant?: ButtonVariants;
  typographyVariant?: TypographyVariants;
}

const Button: FC<ButtonProps> = ({
  children,
  color = 'primary',
  variant = 'default',
  startIcon,
  endIcon,
  className,
  fullWidth,
  removeUnderline,
  typographyVariant = 'p3',
  ...props
}) => (
  <>
    <button
      className={classNames(
        styles.ButtonBase,
        {
          [styles[`ButtonVariant--${color}__${variant}`]]: color === 'default' || variant !== 'default',
          [styles[`ButtonColor--${color}`]]: color,
          [styles[`ButtonBase--typography-${typographyVariant}`]]: typographyVariant,
          [styles[`ButtonBase--full-width`]]: fullWidth,
          [styles[`ButtonBase--remove-underline`]]: removeUnderline
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
