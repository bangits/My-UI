import { ButtonProps } from '@/components';
import classNames from 'classnames';
import React, { FC, ReactNode } from 'react';
import styles from './IconButton.module.scss';

export interface IconButtonProps extends ButtonProps {
  icon?: ReactNode;
}

const IconButton: FC<IconButtonProps> = ({ icon }) => {
  return <button className={classNames(styles.IconButtonBase)}>{icon}</button>;
};

export default IconButton;
