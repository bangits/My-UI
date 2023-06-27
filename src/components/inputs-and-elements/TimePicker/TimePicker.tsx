import { ChangeEvent, useCallback, useEffect, useRef, useState } from 'react';
import styles from './TimePicker.module.scss';
import classNames from 'classnames';
import { TimeField } from './TimeField';
import { UIColors } from '@/types';

export enum ValuesTypesEnum {
  hour = 'hour',
  minutes = 'minutes',
  seconds = 'seconds'
}

export interface TimePickerValue {
  [ValuesTypesEnum.hour]: string;
  [ValuesTypesEnum.minutes]: string;
  [ValuesTypesEnum.seconds]: string;
}

export interface TimePickerProps {
  disabled?: boolean;
  color?: UIColors;
  value?: TimePickerValue;
  onChange?: (value: TimePickerValue) => void;
  label?: string;
}

export const TimePicker = ({ value: externalValue, label, onChange, color, disabled }: TimePickerProps) => {
  const hourRef = useRef<HTMLInputElement | null>();
  const minutesRef = useRef<HTMLInputElement | null>();
  const secondsRef = useRef<HTMLInputElement | null>();

  const [isFocused, setIsFocused] = useState<boolean>();
  const [timeState, setTimeState] = useState<TimePickerValue>({
    [ValuesTypesEnum.hour]: '00',
    [ValuesTypesEnum.minutes]: '00',
    [ValuesTypesEnum.seconds]: '00'
  });

  const syncValues = useCallback(() => {
    if (externalValue && JSON.stringify(timeState) != JSON.stringify(externalValue)) {
      if (
        !isNaN(+externalValue.hour) &&
        !isNaN(+externalValue.minutes) &&
        !isNaN(+externalValue.seconds) &&
        +externalValue.hour < 24 &&
        +externalValue.hour >= 0 &&
        +externalValue.minutes < 60 &&
        +externalValue.seconds >= 0 &&
        +externalValue.seconds < 60 &&
        +externalValue.minutes >= 0
      ) {
        setTimeState(externalValue);
      } else {
        console.error('incorrect time value was provided to TimePicker component');
      }
    }
  }, [externalValue]);

  const restrictValues = useCallback((value: string, type, cb: () => void) => {
    if (type === ValuesTypesEnum.hour) {
      +value < 24 && +value >= 0 && cb();
    }
    if (type === ValuesTypesEnum.minutes || type === ValuesTypesEnum.seconds) {
      +value < 60 && +value >= 0 && cb();
    }
  }, []);

  const transformValue = useCallback((value: string): string => {
    if (value.length === 1) {
      value = '0' + value;
    }

    if (value === '') {
      value = '00';
    }

    if (value.length > 2) {
      value = value.replace('0', '');
    }

    if (value.startsWith('00') && value.length > 2) {
      value = '00';
    }

    return value;
  }, []);

  const onTimeFieldClickClick = (e) => {
    stopEventPropogation(e);
  };

  const stopEventPropogation = (e) => {
    e.stopPropagation();
  };

  const handleChange = (value: string, type: ValuesTypesEnum, e?: ChangeEvent<HTMLInputElement>) => {
    const newValue: string = transformValue(value);
    restrictValues(newValue, type, () => setTimeState({ ...timeState, [type]: newValue }));
  };

  const handleArrowUpButtonClick = (e, type: ValuesTypesEnum) => {
    if (disabled) return;

    stopEventPropogation(e);
    let value = +timeState[type];
    value++;

    handleChange(String(value), type);
  };

  const handleArrowDownButtonCick = (e, type: ValuesTypesEnum) => {
    if (disabled) return;

    stopEventPropogation(e);
    let value = +timeState[type];
    value--;

    handleChange(String(value), type);
  };

  const handleFocus = useCallback(() => setIsFocused(true), []);

  const handleBlur = useCallback(() => setIsFocused(false), []);

  const handleKeydown = (e, type: ValuesTypesEnum) => {
    if (type === ValuesTypesEnum.hour && e.key === 'ArrowRight') {
      minutesRef.current.focus();
    }

    if (type === ValuesTypesEnum.seconds && e.key === 'ArrowLeft') {
      minutesRef.current.focus();
    }

    if (type === ValuesTypesEnum.minutes && e.key === 'ArrowLeft') {
      hourRef.current.focus();
    }

    if (type === ValuesTypesEnum.minutes && e.key === 'ArrowRight') {
      secondsRef.current.focus();
    }
  };

  const handleInputContainerClick = useCallback(() => {
    hourRef?.current.focus();
  }, []);

  useEffect(() => syncValues(), [syncValues]);

  useEffect(() => {
    onChange?.(timeState);
  }, [timeState]);

  return (
    <div
      className={classNames(styles.InputStyles, {
        [styles['InputStyles--is-focused']]: isFocused,
        [styles[`InputStyles--${color}`]]: color,
        [styles['InputStyles--disabled']]: disabled
      })}
      onClick={handleInputContainerClick}>
      {label && (
        <label
          className={classNames(styles.LabelStyles, {
            [styles[`LabelStyles--${color}`]]: color,
            [styles['LabelStyles--disabled']]: disabled
          })}>
          {label}
        </label>
      )}
      <TimeField
        disabled={disabled}
        color={color}
        ref={hourRef}
        handleFocus={handleFocus}
        handleBlur={handleBlur}
        onClick={onTimeFieldClickClick}
        handleKeydown={handleKeydown}
        handleChange={handleChange}
        handleArrowUpButtonClick={handleArrowUpButtonClick}
        handleArrowDownButtonCick={handleArrowDownButtonCick}
        timeState={timeState}
        type={ValuesTypesEnum.hour}
      />
      <TimeField
        disabled={disabled}
        color={color}
        ref={minutesRef}
        handleFocus={handleFocus}
        handleBlur={handleBlur}
        onClick={onTimeFieldClickClick}
        handleKeydown={handleKeydown}
        handleChange={handleChange}
        handleArrowUpButtonClick={handleArrowUpButtonClick}
        handleArrowDownButtonCick={handleArrowDownButtonCick}
        timeState={timeState}
        type={ValuesTypesEnum.minutes}
      />
      <TimeField
        disabled={disabled}
        color={color}
        ref={secondsRef}
        handleFocus={handleFocus}
        handleBlur={handleBlur}
        onClick={onTimeFieldClickClick}
        handleKeydown={handleKeydown}
        handleChange={handleChange}
        handleArrowUpButtonClick={handleArrowUpButtonClick}
        handleArrowDownButtonCick={handleArrowDownButtonCick}
        timeState={timeState}
        type={ValuesTypesEnum.seconds}
      />
    </div>
  );
};
