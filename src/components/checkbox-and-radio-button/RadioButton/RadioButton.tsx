import React, { FC } from 'react';
import { Consumer } from './RadioContext';
import styles from './RadioButton.module.scss';

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
          <div className={styles.RadioButton}>
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
          </div>
        );
      }}
    </Consumer>
  );
};

export default RadioButton;
