import { getMyUIPrefix } from '@/configs';
import { typedMemo } from '@/helpers';
import { CheckIcon } from '@/icons';
import { IComponent, UIColors } from '@/types';
import classNames from 'classnames';
import React, { useCallback, useState } from 'react';
import styles from './Checkbox.module.scss';
export interface CheckboxProps extends IComponent, React.InputHTMLAttributes<HTMLInputElement> {
  color?: UIColors;
}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ color = 'primary', className, style, defaultChecked, checked, ...checkboxProps }, ref) => {
    const [isChecked, setChecked] = useState(defaultChecked || false);

    const toggleCheckbox = useCallback(() => setChecked((previous) => !previous), []);

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
        <div className={styles.CheckboxContainer} onClick={toggleCheckbox}>
          <input
            {...checkboxProps}
            checked={checked !== undefined ? checked : isChecked}
            className={`${getMyUIPrefix()}-CheckboxInput`}
            type='checkbox'
            ref={ref}
          />

          <CheckIcon className={styles.CheckboxIcon} />
        </div>
      </div>
    );
  }
);

export default typedMemo(Checkbox);
