import { Tooltip, Typography, TypographyProps } from '@/components';
import { Icons } from '@/my-ui-core';
import { UIColors } from '@/types';
import classNames from 'classnames';
import {
  DetailedHTMLProps,
  FC,
  InputHTMLAttributes,
  ReactNode,
  forwardRef,
  useCallback,
  useEffect,
  useMemo,
  useState
} from 'react';
import styles from './TextInput.module.scss';

export interface BaseTextInputProps {
  color?: UIColors;
  disabled?: boolean;
  fullWidth?: boolean;
  endIcon?: ReactNode[] | ReactNode;
  startIcon?: ReactNode[] | ReactNode;
  suffix?: ReactNode;
  maxLength?: number;
  explanation?: string;
  containerClassName?: string;
  explanationProps?: TypographyProps;
  label?: ReactNode;
  forceFocused?: boolean;
  isDecimal?: boolean;
  onlyPositive?: boolean;
  decimalMaxPoint?: number;
  textarea?: boolean;
  borderRadius?: boolean;
  inputDisabled?: boolean;
  showExplanationAsTooltip?: boolean;
  containerMinLength?: boolean;
}

type InputProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement>,
  HTMLInputElement | HTMLTextAreaElement
>;

export type TextInputProps = BaseTextInputProps & InputProps;

const TextInput: FC<TextInputProps> = forwardRef(
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
      isDecimal,
      decimalMaxPoint = 2,
      min,
      textarea = false,
      borderRadius = true,
      inputDisabled,
      showExplanationAsTooltip,
      containerMinLength = true,
      onlyPositive,
      suffix,
      ...props
    },
    ref
  ) => {
    const InputComponent = textarea ? 'textarea' : 'input';

    const { defaultValue, value, disabled, type, maxLength, onChange } = props;

    const [currentValue, setCurrentValue] = useState(value || defaultValue);
    const [isInputFocused, setInputFocused] = useState(false);

    const autoTextAreaHeight = useCallback((element: HTMLInputElement | HTMLTextAreaElement) => {
      element.style.height = 'auto';
      element.style.height = `${element.scrollHeight}px`;
    }, []);

    const onInputChange: TextInputProps['onChange'] = useCallback(
      (e) => {
        if (disabled) return;

        if (onChange) onChange(e);

        setCurrentValue((e.target as unknown as HTMLInputElement).value);
      },
      [onChange, disabled]
    );

    const onKeyDown: TextInputProps['onKeyDown'] = useCallback(
      (evt) => {
        if (type === 'number' && evt.key === 'e') return evt.preventDefault();

        if (type === 'number' && onlyPositive && evt.key === '-') return evt.preventDefault();

        if (props.onKeyDown) props.onKeyDown(evt);
      },
      [props.onKeyDown, onlyPositive, type]
    );

    const onInput: TextInputProps['onInput'] = useCallback(
      (evt) => {
        autoTextAreaHeight(evt.target as unknown as HTMLInputElement);

        if (maxLength && evt.target['value'] && !isDecimal)
          evt.target['value'] = evt.target['value'].slice(0, maxLength);

        if (maxLength && evt.target['value'].length > maxLength && isDecimal)
          evt.target['value'] = evt.target['value'].slice(0, maxLength);

        if (type === 'number' && !isDecimal) evt.target['value'] = evt.target['value'].replace('.', '');

        if (type === 'number' && isDecimal && evt.target['value'].includes('.')) {
          const value = evt.target['value'];

          const dotIndex = value.indexOf('.');

          evt.target['value'] = value.slice(0, dotIndex) + value.slice(dotIndex, dotIndex + decimalMaxPoint + 1);
        }

        if (props.onInput) props.onInput(evt);
      },
      [props.onInput, maxLength, isDecimal]
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
        if (!evt.target['value']) evt.target['value'] = '';

        setInputFocused(false);
        if (props.onBlur) props.onBlur(evt);
      },
      [props.onBlur]
    );

    const inputContainerClassNames = useMemo(
      () =>
        classNames(
          'MyUI-TextInputContainer',
          styles.TextInputContainer,
          {
            'MyUI-TextInputContainer--focused': forceFocused !== undefined ? forceFocused : isInputFocused,
            [styles['TextInputContainer--full-width']]: fullWidth,
            [styles['TextInputContainer--border-radius']]: borderRadius,
            [styles[`TextInputContainer--${color}`]]: color,
            [styles['TextInputContainer--disabled']]: disabled,
            [styles['TextInputContainer--withLeftIcon']]: !!startIcon,
            [styles['TextInputContainer--withRightIcon']]: !!endIcon,
            [styles['TextInputContainer--withSuffix']]: !!suffix,
            [styles['TextInputContainer--containerMinLength']]: containerMinLength,
            [styles['TextInputContainer--focused']]: forceFocused !== undefined ? forceFocused : isInputFocused,
            [styles['TextInputContainer--filled']]:
              forceFocused !== undefined ? forceFocused || !!currentValue : !!currentValue,
            ['TextInputContainer--filled']: forceFocused !== undefined ? forceFocused || !!currentValue : !!currentValue
          },
          containerClassName
        ),
      [
        classNames,
        forceFocused,
        isInputFocused,
        fullWidth,
        borderRadius,
        color,
        disabled,
        startIcon,
        endIcon,
        containerMinLength,
        currentValue
      ]
    );

    const inputBaseClassNames = useMemo(
      () =>
        classNames(
          'MyUI-TextInputBaseInput',
          styles.TextInputBaseInput,
          {
            [styles[`TextInputBaseInput--filled`]]:
              forceFocused !== undefined ? forceFocused || !!currentValue : !!currentValue,
            [styles[`TextInputBaseInput--with-label`]]: !!label,
            [styles['TextInputBaseInput--start-icon']]: !!startIcon,
            [styles['TextInputBaseInput--end-icon']]: !!endIcon,
            [styles['TextInputBaseInput--textarea']]: textarea,
            [styles['TextInputBaseInput--with-two-start-icon']]: Array.isArray(startIcon) && startIcon.length > 1,
            [styles['TextInputBaseInput--with-two-end-icon']]: Array.isArray(endIcon) && endIcon.length > 1
          },
          className
        ),
      [classNames, forceFocused, currentValue, label, startIcon, endIcon, textarea]
    );

    const inputLabelClassNames = useMemo(
      () =>
        classNames(styles.TextInputLabelText, {
          [styles['TextInputLabelText--with-two-start-icon']]: Array.isArray(startIcon) && startIcon.length > 1,
          [styles['TextInputLabelText--with-two-end-icon']]: Array.isArray(endIcon) && endIcon.length > 1
        }),
      [classNames, startIcon, endIcon]
    );

    useEffect(() => {
      if (!defaultValue) setCurrentValue(value);
    }, [value]);

    return (
      <div className={inputContainerClassNames}>
        <label className={classNames('MyUI-TextInputWrapper', styles.TextInputWrapper)}>
          {startIcon && (
            <div className={classNames(styles.StartIcon, 'MyUI-TextInputStartIcon')}>
              {Array.isArray(startIcon) ? startIcon.slice(0, 2) : startIcon}
            </div>
          )}

          <InputComponent
            className={inputBaseClassNames}
            {...props}
            disabled={props.disabled || inputDisabled}
            min={min || '0'}
            ref={(elementRef: HTMLInputElement | HTMLTextAreaElement) => {
              if (ref && typeof ref === 'function') ref(elementRef);

              if (elementRef) autoTextAreaHeight(elementRef);
            }}
            // @ts-expect-error For typecasting, this prop used only for textarea
            rows='1'
            onKeyDown={onKeyDown}
            onInput={onInput}
            onChange={onInputChange}
            onFocus={onFocus}
            onBlur={onBlur}
          />
          {label && (
            <span className={styles.TextInputLabelContainer}>
              <span className={inputLabelClassNames}>{label}</span>
            </span>
          )}

          {showExplanationAsTooltip && explanation && (
            <div className={classNames('MyUI-TooltipExplanation', styles.TooltipExplanation)}>
              <Tooltip text={explanation} placement='top' color={color}>
                <Icons.InfoOutlinedIcon />
              </Tooltip>
            </div>
          )}

          {suffix && <div className={styles.Suffix}>{suffix}</div>}

          {endIcon && (
            <div className={classNames('MyUI-TextInputEndIcon', styles.EndIcon)}>
              {Array.isArray(endIcon) ? endIcon.slice(0, 2) : endIcon}
            </div>
          )}
        </label>

        {explanation && !showExplanationAsTooltip && (
          <Typography className={styles.Explanation} variant='p5' component='span'>
            {explanation}
          </Typography>
        )}
      </div>
    );
  }
);

export default TextInput;
