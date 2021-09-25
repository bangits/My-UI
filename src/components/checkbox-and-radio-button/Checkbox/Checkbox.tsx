import React, { FC } from 'react';
import classNames from 'classnames';
export interface CheckboxProps {
  onChange?: () => void;
  checked?: boolean;
  disabled?: boolean;
  defaultChecked?: boolean;
  color?: 'primary' | 'secondary';
}

const Checkbox: FC<CheckboxProps> = ({ color, ...checkboxProps }) => (
  <div>
    <input type='checkbox' className={classNames(color)} {...checkboxProps} />
  </div>
);

export default Checkbox;
