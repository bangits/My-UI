import React, { ReactNode, FC } from 'react';
import classNames from 'classnames';
import styles from './TextInput.module.scss';

export type InputProps = {
  value?: any;
  defaultValue?: any;
  color?: string;
  warning?: boolean;
  error?: boolean;
  success?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  label?: string;
  placeholder?: string;
  onChange?: (e: any) => void;
  rightIcon?: ReactNode;
  leftIcon?: ReactNode;
  inputProps?: any;
  maxLength?: any;
  type?: string;
  explanation?: string;
};

const TextInputs: FC<InputProps> = ({
  children,
  label,
  color,
  inputProps,
  type,
  explanation,
  success,
  error,
  warning,
  rightIcon,
  leftIcon,
  ...props
}) => {
  return (
    <>
      <div
        className={classNames(styles.TextInputWrapper, {
          [styles.TextInputSuccess]: success,
          [styles.TextInputError]: error,
          [styles.TextInputWarning]: warning
        })}>
        <input
          className={`${styles.TextInputBase}`}
          onKeyDown={(evt) => (type === 'number' ? evt.key === 'e' && evt.preventDefault() : null)}
          {...props}
        />

        <span className={styles.Explanation}>{(error || warning) && explanation}</span>

        <div className={styles.LeftIcon}>{leftIcon}</div>
        <div className={styles.RightIcon}>{rightIcon}</div>
      </div>
    </>
  );
};

export default TextInputs;
