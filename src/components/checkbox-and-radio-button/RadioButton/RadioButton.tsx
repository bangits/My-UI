import React, { FC } from 'react';
import { Consumer } from './RadioContext';

export interface RadioButtonProps {
  checked?: boolean;
  defaultChecked?: boolean;
  name?: string;
  color?: string;
  value?: string;
  label?: string;
}

const RadioButton: FC<RadioButtonProps> = ({ children, label, value, checked, ...radioProps }) => {
  return (
    <Consumer>
      {(props) => {
        return (
          <>
            <input
              type='radio'
              id={value}
              value={value}
              defaultValue={props?.defaultValue}
              checked={
                props?.value ? props?.value === value : props?.defaultValue ? props?.defaultValue === value : checked
              }
              onChange={props?.onChange}
              {...radioProps}
            />
            <label htmlFor={value}>{label}</label>
          </>
        );
      }}
    </Consumer>
  );
};

export default RadioButton;
