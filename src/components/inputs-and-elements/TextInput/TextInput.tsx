import { Typography, TypographyProps } from '@/components';
import classNames from 'classnames';
import { DetailedHTMLProps, FC, InputHTMLAttributes, ReactNode, useCallback, useState } from 'react';
import styles from './TextInput.module.scss';

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
  wrapperClassName?: string;
  explanationProps?: TypographyProps;
}

const TextInputs: FC<TextInputProps> = ({
  children,
  explanation,
  success,
  error,
  warning,
  endIcon,
  startIcon,
  fullWidth = false,
  className,
  wrapperClassName,
  explanationProps,
  ...props
}) => {
  const { defaultValue, value, disabled, type, onChange } = props;

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

  return (
    <>
      <div
        className={classNames(
          styles.TextInputWrapper,
          {
            [styles['TextInputWrapper--full-width']]: fullWidth,
            [styles['TextInputWrapper--error']]: error,
            [styles['TextInputWrapper--warning']]: warning,
            [styles['TextInputWrapper--success']]: success,
            [styles['TextInputWrapper--disabled']]: disabled
          },
          wrapperClassName
        )}>
        {startIcon && !endIcon && <div className={styles.startIcon}>{startIcon}</div>}

        <input
          className={classNames(
            styles.TextInputBase,
            {
              [styles[`TextInputBase--filled`]]: !!currentValue,
              [styles['TextInputBase--start-icon']]: !!startIcon,
              [styles['TextInputBase--end-icon']]: !!endIcon
            },
            className
          )}
          {...props}
          onKeyDown={onKeyDown}
          onChange={onInputChange}
        />

        {explanation && (
          <Typography className={styles.Explanation} variant='p4' component='span'>
            {explanation}
          </Typography>
        )}

        {endIcon && !startIcon && <div className={styles.endIcon}>{endIcon}</div>}
      </div>
    </>
  );
};
export default TextInputs;
