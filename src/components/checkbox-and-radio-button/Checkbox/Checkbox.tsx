import { getMyUIPrefix } from '@/configs';
import { typedMemo } from '@/helpers';
import { CheckIcon } from '@/icons';
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
        <div className={classNames(styles.CheckboxContainer, `${getMyUIPrefix()}-CheckboxContainer`)}>
          <label className={`${getMyUIPrefix()}-CheckboxLabel`}>
            <input {...checkboxProps} className={`${getMyUIPrefix()}-CheckboxInput`} type='checkbox' ref={ref} />

            <CheckIcon className={styles.CheckboxIcon} />
          </label>
        </div>
      </div>
    );
  }
);

export default typedMemo(Checkbox);
