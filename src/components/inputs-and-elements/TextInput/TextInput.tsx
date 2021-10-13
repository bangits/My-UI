import { Typography, TypographyProps } from '@/components';
import classNames from 'classnames';
import React, { DetailedHTMLProps, InputHTMLAttributes, ReactNode, useCallback, useEffect, useState } from 'react';
import styles from './TextInput.module.scss';

window.MYUIReact = React;

export interface TextInputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  warning?: boolean;
  error?: boolean;
  success?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  endIcon?: ReactNode;
  startIcon?: ReactNode;
  maxLength?: number;
  explanation?: string;
  containerClassName?: string;
  explanationProps?: TypographyProps;
  label?: string;
}

const TextInputs = React.forwardRef<HTMLInputElement, TextInputProps>(
  (
    {
      children,
      explanation,
      success,
      error,
      warning,
      endIcon,
      startIcon,
      fullWidth = false,
      className,
      containerClassName,
      explanationProps,
      label,
      ...props
    },
    ref
  ) => {
    const { defaultValue, value, disabled, type, maxLength, onChange } = props;

    const [currentValue, setCurrentValue] = useState(value || defaultValue);

    const onInputChange: TextInputProps['onChange'] = useCallback(
      (e) => {
        if (onChange) onChange(e);

        setCurrentValue(e.target.value);
      },
      [onChange]
    );

    const onKeyDown: TextInputProps['onKeyDown'] = useCallback(
      (evt) => {
        if (type === 'number' && evt.key === 'e') return evt.preventDefault();

        if (props.onKeyDown) props.onKeyDown(evt);
      },
      [props.onKeyDown, type]
    );

    const onInput: TextInputProps['onInput'] = useCallback(
      (evt) => {
        evt.target['value'] = evt.target['value'].slice(0, maxLength);

        if (props.onInput) props.onInput(evt);
      },
      [props.onInput]
    );

    useEffect(() => {
      setCurrentValue(value);
    }, [value]);

    return (
      <div
        className={classNames(
          styles.TextInputContainer,
          {
            [styles['TextInputContainer--full-width']]: fullWidth,
            [styles['TextInputContainer--error']]: error,
            [styles['TextInputContainer--warning']]: warning,
            [styles['TextInputContainer--success']]: success,
            [styles['TextInputContainer--disabled']]: disabled,
            [styles['TextInputContainer--withLeftIcon']]: Boolean(startIcon),
            [styles['TextInputContainer--withRightIcon']]: Boolean(endIcon)
          },
          containerClassName
        )}>
        <label className={classNames(styles.TextInputWrapper)}>
          {startIcon && <div className={styles.StartIcon}>{startIcon}</div>}

          <input
            ref={ref}
            className={classNames(
              styles.TextInputBaseInput,
              {
                [styles[`TextInputBaseInput--filled`]]: !!currentValue,
                [styles['TextInputBaseInput--start-icon']]: !!startIcon,
                [styles['TextInputBaseInput--end-icon']]: !!endIcon
              },
              className
            )}
            {...props}
            onKeyDown={onKeyDown}
            onInput={onInput}
            onChange={onInputChange}
          />
          {label && <span className={styles.TextInputPlaceholder}>{label}</span>}

          {endIcon && <div className={styles.EndIcon}>{endIcon}</div>}
        </label>

        {explanation && (
          <Typography className={styles.Explanation} variant='p4' component='span'>
            {explanation}
          </Typography>
        )}
      </div>
    );
  }
);
export default TextInputs;
