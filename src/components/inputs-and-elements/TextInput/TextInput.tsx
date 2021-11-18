import { Typography, TypographyProps } from '@/components';
import { UIColors } from '@/types';
import classNames from 'classnames';
import {
  DetailedHTMLProps,
  FC,
  forwardRef,
  InputHTMLAttributes,
  ReactNode,
  useCallback,
  useEffect,
  useState
} from 'react';
import styles from './TextInput.module.scss';

export interface BaseTextInputProps {
  color?: UIColors;
  disabled?: boolean;
  fullWidth?: boolean;
  endIcon?: ReactNode[] | ReactNode;
  startIcon?: ReactNode[] | ReactNode;
  maxLength?: number;
  explanation?: string;
  containerClassName?: string;
  explanationProps?: TypographyProps;
  label?: string;
  forceFocused?: boolean;
}

type InputProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

export type TextInputProps = BaseTextInputProps & InputProps;

const TextInputs: FC<TextInputProps> = forwardRef(
  (
    {
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
      forceFocused,
      ...props
    },
    ref
  ) => {
    const { defaultValue, value, disabled, type, maxLength, onChange } = props;

    const [currentValue, setCurrentValue] = useState(value || defaultValue);
    const [isInputFocused, setInputFocused] = useState(false);

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

    const onFocus: TextInputProps['onFocus'] = useCallback(
      (evt) => {
        setInputFocused(true);

        if (props.onFocus) props.onFocus(evt);
      },
      [props.onFocus]
    );

    const onBlur: TextInputProps['onBlur'] = useCallback(
      (evt) => {
        setInputFocused(false);

        if (props.onBlur) props.onBlur(evt);
      },
      [props.onBlur]
    );

    useEffect(() => {
      if (!defaultValue) setCurrentValue(value);
    }, [value]);

    return (
      <div
        className={classNames(
          'MyUI-TextInputContainer',
          styles.TextInputContainer,
          {
            'MyUI-TextInputContainer--focused': forceFocused !== undefined ? forceFocused : isInputFocused,
            [styles['TextInputContainer--full-width']]: fullWidth,
            [styles[`TextInputContainer--${color}`]]: color,
            [styles['TextInputContainer--disabled']]: disabled,
            [styles['TextInputContainer--withLeftIcon']]: !!startIcon,
            [styles['TextInputContainer--withRightIcon']]: !!endIcon,
            [styles['TextInputContainer--focused']]: forceFocused !== undefined ? forceFocused : isInputFocused,
            [styles['TextInputContainer--filled']]:
              forceFocused !== undefined ? forceFocused || !!currentValue : !!currentValue,
            ['TextInputContainer--filled']: forceFocused !== undefined ? forceFocused || !!currentValue : !!currentValue
          },
          containerClassName
        )}>
        <label className={classNames('MyUI-TextInputWrapper', styles.TextInputWrapper)}>
          {startIcon && (
            <div className={classNames(styles.StartIcon, 'MyUI-TextInputStartIcon')}>
              {Array.isArray(startIcon) ? startIcon.slice(0, 2) : startIcon}
            </div>
          )}

          <input
            className={classNames(
              'MyUI-TextInputBaseInput',
              styles.TextInputBaseInput,
              {
                [styles[`TextInputBaseInput--filled`]]:
                  forceFocused !== undefined ? forceFocused || !!currentValue : !!currentValue,
                [styles[`TextInputBaseInput--with-label`]]: !!label,
                [styles['TextInputBaseInput--start-icon']]: !!startIcon,
                [styles['TextInputBaseInput--end-icon']]: !!endIcon,
                [styles['TextInputBaseInput--with-two-start-icon']]: Array.isArray(startIcon) && startIcon.length > 1,
                [styles['TextInputBaseInput--with-two-end-icon']]: Array.isArray(endIcon) && endIcon.length > 1
              },
              className
            )}
            {...props}
            ref={ref}
            onKeyDown={onKeyDown}
            onInput={onInput}
            onChange={onInputChange}
            onFocus={onFocus}
            onBlur={onBlur}
          />
          {label && (
            <span className={styles.TextInputLabelContainer}>
              <span
                className={classNames(styles.TextInputLabelText, {
                  [styles['TextInputLabelText--with-two-start-icon']]: Array.isArray(startIcon) && startIcon.length > 1,
                  [styles['TextInputLabelText--with-two-end-icon']]: Array.isArray(endIcon) && endIcon.length > 1
                })}>
                {label}
              </span>
            </span>
          )}

          {endIcon && (
            <div className={classNames('MyUI-TextInputEndIcon', styles.EndIcon)}>
              {Array.isArray(endIcon) ? endIcon.slice(0, 2) : endIcon}
            </div>
          )}
        </label>

        {explanation && (
          <Typography className={styles.Explanation} variant='p5' component='span'>
            {explanation}
          </Typography>
        )}
      </div>
    );
  }
);

export default TextInputs;
