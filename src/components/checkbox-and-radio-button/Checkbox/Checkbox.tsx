import { typedMemo } from '@/helpers/typedMemo';
import { IComponent, UIColors } from '@/types';
import classNames from 'classnames';
import React from 'react';
import styles from './Checkbox.module.scss';
export interface CheckboxProps extends IComponent, React.InputHTMLAttributes<HTMLInputElement> {
  color?: UIColors;
}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(({ color, ...checkboxProps }, ref) => {
  return (
    <div
      className={classNames(styles.Checkbox, {
        [styles[`Checkbox--${color}`]]: color
      })}>
      <input {...checkboxProps} type='checkbox' ref={ref} />
    </div>
  );
});

export default typedMemo(Checkbox);
