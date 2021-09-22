import React, { FC } from 'react';

export interface CheckboxProps {
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  checked?: boolean;
  disabled?: boolean;
  defaultChecked?: boolean;
  color?: string;
}

const Checkbox: FC<CheckboxProps> = ({ color, ...checkboxProps }) => (
  <div>
    <input type='checkbox' {...checkboxProps} />
  </div>
);

export default Checkbox;
