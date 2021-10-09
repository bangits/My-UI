import { ButtonProps } from '@/components';
import { typedMemo } from '@/helpers/typedMemo';
import { IComponent } from '@/types';
import classNames from 'classnames';
import React, { FC, ReactNode } from 'react';
import styles from './IconButton.module.scss';

export type IconButtonVariants = 'dark' | 'light';
export interface IconButtonProps extends ButtonProps, IComponent {
  icon?: ReactNode;
  variants?: IconButtonVariants;
}

const IconButton: FC<IconButtonProps> = ({ icon, variants }) => {
  return (
    <button
      className={classNames(styles.IconButtonBase, {
        [styles[`IconButtonBase--${variants ? variants : 'dark'}`]]: variants ? variants : 'dark'
      })}>
      <span className={styles['IconButtonBase--icon']}>{icon}</span>
    </button>
  );
};

export default typedMemo(IconButton);
