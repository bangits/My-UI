import { Typography, TypographyProps } from '@/components';
import { UIColors } from '@/types';
import classNames from 'classnames';
import { DetailedHTMLProps, FC, InputHTMLAttributes, ReactNode, useCallback, useState } from 'react';
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

  return (
    <div
      className={classNames(
        styles.TextInputContainer,
        {
          [styles['TextInputContainer--full-width']]: fullWidth,
          [styles[`TextInputContainer--${color}`]]: color,
          [styles['TextInputContainer--disabled']]: disabled,
          [styles['TextInputContainer--withLeftIcon']]: !!startIcon,
          [styles['TextInputContainer--withRightIcon']]: !!endIcon
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
