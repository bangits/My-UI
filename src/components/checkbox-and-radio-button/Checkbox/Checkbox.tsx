import { getMyUIPrefix } from '@/configs';
import { typedMemo } from '@/helpers';
import { IComponent, UIColors } from '@/types';
import classNames from 'classnames';
import React from 'react';
import styles from './Checkbox.module.scss';
export interface CheckboxProps extends IComponent, React.InputHTMLAttributes<HTMLInputElement> {
  color?: UIColors;
}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ color = 'primary', className, style, ...checkboxProps }, ref) => {
    return (
      <div
        className={classNames(
          styles.Checkbox,
          {
            [styles[`Checkbox--${color}`]]: color
          },
          className,
          `${getMyUIPrefix()}-CheckboxContainer`
        )}
        style={style}>
        <input {...checkboxProps} className={`${getMyUIPrefix()}-CheckboxInput`} type='checkbox' ref={ref} />
      </div>
    );
  }
);

export default typedMemo(Checkbox);
