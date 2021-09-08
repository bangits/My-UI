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
  endIcon?: ReactNode;
  startIcon?: ReactNode;
  inputProps?: {};
  maxLength?: any;
  type?: string;
};

const TextInputs: FC<InputProps> = ({
  children,
  disabled,
  placeholder,
  defaultValue,
  label,
  onChange,
  value,
  maxLength,
  type,
  error,
  warning,
  success,
  fullWidth,
  color,
  inputProps
}) => {
  return (
    <div>
      <label>{label}</label>
      <input
        {...inputProps}
        onChange={onChange}
        maxLength={Number(maxLength)}
        type={type}
        disabled={disabled}
        placeholder={placeholder}
        defaultValue={defaultValue}
        value={value}
        onKeyDown={(evt) => (type === 'number' ? evt.key === 'e' && evt.preventDefault() : null)}
        className={classNames(
          error && styles.error,
          warning && styles.warning,
          success && styles.success,
          fullWidth && styles.fullWidth,
          styles[color]
        )}
      />
    </div>
  );
};

export default TextInputs;
