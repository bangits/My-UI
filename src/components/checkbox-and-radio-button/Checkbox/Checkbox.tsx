import React, { FC } from 'react';
import classNames from 'classnames';
import styles from './Checkbox.module.scss';
export interface CheckboxProps {
  onChange?: () => void;
  checked?: boolean;
  disabled?: boolean;
  defaultChecked?: boolean;
  color?: "primary" | "secondary";
}

const Checkbox: FC<CheckboxProps> = ({color, ...checkboxProps}) => (
  <div className={styles.Checkbox}>
    <input type='checkbox' className={classNames(color)} {...checkboxProps} />
  </div>
);

export default Checkbox;
