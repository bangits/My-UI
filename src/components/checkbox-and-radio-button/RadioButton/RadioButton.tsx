import { typedMemo } from '@/helpers';
import { IComponent, UIColors } from '@/types';
import classNames from 'classnames';
import React from 'react';
import styles from './RadioButton.module.scss';
import { Consumer } from './RadioContext';

export interface RadioButtonProps extends IComponent, React.InputHTMLAttributes<HTMLInputElement> {
  name?: string;
  color?: UIColors;
  value: string | number;
}

const RadioButton = React.forwardRef<HTMLInputElement, RadioButtonProps>(
  ({ value, checked, color = 'primary', name, style, className, ...radioProps }, ref) => {
    return (
      <Consumer>
        {(radioGroupProps) => {
          return (
            <div
              className={classNames(
                styles.RadioButton,
                {
                  [styles[`RadioButton--${color}`]]: color
                },
                className
              )}
              style={style}>
              <input
                {...radioProps}
                type='radio'
                id={value.toString()}
                value={value}
                name={name}
                checked={radioGroupProps.value ? radioGroupProps.value === value : checked}
                onChange={radioGroupProps?.onChange}
                ref={ref}
              />

              <label htmlFor={value.toString()} />
            </div>
          );
        }}
      </Consumer>
    );
  }
);

export default typedMemo(RadioButton);
