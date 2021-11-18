import { ButtonProps } from '@/components';
import { typedMemo } from '@/helpers';
import { IComponent } from '@/types';
import classNames from 'classnames';
import React, { FC, ReactNode } from 'react';
import styles from './IconButton.module.scss';
import { getMyUIPrefix } from '@/configs';

export type IconButtonVariants = 'dark' | 'light';

export interface IconButtonProps extends Omit<ButtonProps, 'variant'>, IComponent {
  icon?: ReactNode;
  variant?: IconButtonVariants;
}

const IconButton: FC<IconButtonProps> = ({ icon, variant = 'dark', className }) => {
  return (
    <button
      className={classNames(
        styles.IconButtonBase,
        `${getMyUIPrefix()}-IconButtonBase`,
        {
          [styles[`IconButtonBase--${variant}`]]: variant
        },
        className
      )}>
      <span className={classNames(styles['IconButtonBase--icon'], `${getMyUIPrefix()}-IconButtonBaseIcon`)}>
        {icon}
      </span>
    </button>
  );
};

export default typedMemo(IconButton);
