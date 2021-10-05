import { IComponent, UIColors } from '@/types';
import classNames from 'classnames';
import React from 'react';
import styles from './RadioButton.module.scss';
import { Consumer } from './RadioContext';


export interface RadioButtonProps extends IComponent , React.InputHTMLAttributes<HTMLInputElement> {
  name?: string;
  color?: UIColors;
  value?: string;
  label?: string;
}

const RadioButton = React.forwardRef<HTMLInputElement, RadioButtonProps>(
  ({ label, value, checked, color, name, ...radioProps }, ref) => {
    return (
      <Consumer>
        {(radioGroupProps) => {
          return (
            <div
              className={classNames(styles.RadioButton, {
                [styles[`RadioButton--${color}`]]: color
              })}>
              <input
                {...radioProps}
                type='radio'
                id={value}
                value={value}
                name={name}
                checked={radioGroupProps.value ? radioGroupProps.value === value : checked}
                onChange={radioGroupProps?.onChange}
                ref={ref}
              />

              <label htmlFor={value}>{label}</label>
            </div>
          );
        }}
      </Consumer>
    );
  }
);

export default RadioButton;
