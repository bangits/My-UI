import { ButtonProps } from '@/components';
import { typedMemo } from '@/helpers/typedMemo';
import { IComponent } from '@/types';
import classNames from 'classnames';
import React, { FC, ReactNode } from 'react';
import styles from './IconButton.module.scss';

export interface IconButtonProps extends ButtonProps, IComponent {
  icon?: ReactNode;
}

const IconButton: FC<IconButtonProps> = ({ icon, ...iconButtonProps }) => {
  return (
    <button {...iconButtonProps} className={classNames(styles.IconButtonBase, iconButtonProps.className)}>
      <span className={styles['IconButtonBase--icon']}>{icon}</span>
    </button>
  );
};

export default typedMemo(IconButton);
