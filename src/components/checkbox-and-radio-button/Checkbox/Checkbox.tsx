import { getMyUIPrefix } from '@/configs';
import { typedMemo } from '@/helpers';
import { CheckIcon } from '@/icons';
import { ComponentType, IComponent, UIColors } from '@/types';
import classNames from 'classnames';
import React from 'react';
import styles from './Checkbox.module.scss';
export interface CheckboxProps extends IComponent, React.InputHTMLAttributes<HTMLInputElement> {
  color?: UIColors;
  checkboxContainerProps?: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
  labelComponent?: ComponentType;
}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      color = 'primary',
      className,
      style,
      labelComponent: LabelComponent = 'label',
      checkboxContainerProps = {},
      ...checkboxProps
    },
    ref
  ) => {
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
        style={style}
        {...checkboxContainerProps}>
        <div className={classNames(styles.CheckboxContainer, `${getMyUIPrefix()}-CheckboxContainer`)}>
          <LabelComponent className={`${getMyUIPrefix()}-CheckboxLabel`}>
            <input {...checkboxProps} className={`${getMyUIPrefix()}-CheckboxInput`} type='checkbox' ref={ref} />
            <CheckIcon fill='currentColor' className={classNames(styles['CheckboxIcon'], 'CheckboxIcon')} />
          </LabelComponent>
        </div>
      </div>
    );
  }
);

export default typedMemo(Checkbox);
