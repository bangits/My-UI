import { Typography, TypographyProps } from '@/components';
import { UIColors } from '@/types';
import classNames from 'classnames';
import { DetailedHTMLProps, FC, InputHTMLAttributes, ReactNode, useCallback, useEffect, useState } from 'react';
import styles from './TextInput.module.scss';
export interface TextInputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  color?: UIColors;
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

const TextInputs: FC<TextInputProps> = ({
  color,
  children,
  explanation,
  endIcon,
  startIcon,
  fullWidth = false,
  className,
  containerClassName,
  explanationProps,
  label,
  ...props
}) => {
  const { defaultValue, value, disabled, type, maxLength, onChange } = props;

  const [currentValue, setCurrentValue] = useState(value || defaultValue);
  const [isFocused, setFocused] = useState(false);

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
    if (!defaultValue) setCurrentValue(value);
  }, [value]);

  const onBlur: TextInputProps['onBlur'] = useCallback(
    (evt) => {
      setFocused(false);

      if (props.onBlur) props.onBlur(evt);
    },
    [props.onBlur]
  );

  const onFocus: TextInputProps['onFocus'] = useCallback(
    (evt) => {
      setFocused(true);

      if (props.onFocus) props.onFocus(evt);
    },
    [props.onFocus]
  );

  return (
    <div
      className={classNames(
        styles.TextInputContainer,
        {
          [styles['TextInputContainer--full-width']]: fullWidth,
          [styles[`TextInputContainer--${color}`]]: color,
          [styles['TextInputContainer--disabled']]: disabled,
          [styles['TextInputContainer--withLeftIcon']]: !!startIcon,
          [styles['TextInputContainer--withRightIcon']]: !!endIcon,
          [styles['TextInputContainer--focused']]: isFocused,
          [styles['TextInputContainer--filled']]: !!currentValue
        },
        containerClassName
      )}>
      <label className={classNames(styles.TextInputWrapper)}>
        {startIcon && <div className={styles.StartIcon}>{startIcon}</div>}

        <input
          className={classNames(
            styles.TextInputBaseInput,
            {
              [styles[`TextInputBaseInput--filled`]]: !!currentValue,
              [styles[`TextInputBaseInput--with-label`]]: !!label,
              [styles['TextInputBaseInput--start-icon']]: !!startIcon,
              [styles['TextInputBaseInput--end-icon']]: !!endIcon
            },
            className
          )}
          {...props}
          onFocus={onFocus}
          onBlur={onBlur}
          onKeyDown={onKeyDown}
          onInput={onInput}
          onChange={onInputChange}
        />
        {label && <span className={styles.TextInputLabel}>{label}</span>}

        {endIcon && <div className={styles.EndIcon}>{endIcon}</div>}
      </label>

      {explanation && (
        <Typography className={styles.Explanation} variant='p4' component='span'>
          {explanation}
        </Typography>
      )}
    </div>
  );
};

export default TextInputs;
