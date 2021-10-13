import { ButtonProps } from '@/components';
import { typedMemo } from '@/helpers';
import { IComponent } from '@/types';
import classNames from 'classnames';
import React, { FC, ReactNode } from 'react';
import styles from './IconButton.module.scss';

export type IconButtonVariants = 'dark' | 'light';

export interface IconButtonProps extends Omit<ButtonProps, 'variant'>, IComponent {
  icon?: ReactNode;
  variant?: IconButtonVariants;
  isActive?: boolean;
}

const IconButton: FC<IconButtonProps> = ({ icon, variant, isActive }) => {
  return (
    <button
      className={classNames(styles.IconButtonBase, {
        [styles[`IconButtonBase--${variant ? variant : 'dark'}`]]: variant ? variant : 'dark',
        [styles[`IconButtonBase--active`]]: isActive
      })}>
      <span className={styles['IconButtonBase--icon']}>{icon}</span>
    </button>
  );
};

export default typedMemo(IconButton);
