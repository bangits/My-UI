import { Typography } from '@/my-ui-core';
import { UIColors } from '@/types';
import classNames from 'classnames';
import { ChangeEvent, useCallback, useEffect, useRef, useState } from 'react';
import styles from './InputTimePicker.module.scss';
import { TimeField } from './TimeField';

export enum TimePickerTypesEnum {
  hour = 'hour',
  minutes = 'minutes',
  seconds = 'seconds'
}

export interface TimePickerValue {
  [TimePickerTypesEnum.hour]: string;
  [TimePickerTypesEnum.minutes]: string;
  [TimePickerTypesEnum.seconds]: string;
}

export interface TimePickerProps {
  disabled?: boolean;
  fullWidth?: boolean;
  explanation?: string;
  color?: UIColors;
  value?: TimePickerValue;
  onChange?: (value: TimePickerValue, type: TimePickerTypesEnum) => void;
  label?: string;
}

export const InputTimePicker = ({
  value: externalValue,
  label,
  onChange,
  color,
  explanation,
  disabled,
  fullWidth
}: TimePickerProps) => {
  const hourRef = useRef<HTMLInputElement | null>();
  const minutesRef = useRef<HTMLInputElement | null>();
  const secondsRef = useRef<HTMLInputElement | null>();

  const [timeState, setTimeState] = useState<TimePickerValue>({
    [TimePickerTypesEnum.hour]: '',
    [TimePickerTypesEnum.minutes]: '',
    [TimePickerTypesEnum.seconds]: ''
  });

  const syncValues = useCallback(() => {
    if (!externalValue) {
      setTimeState({
        [TimePickerTypesEnum.hour]: '00',
        [TimePickerTypesEnum.minutes]: '00',
        [TimePickerTypesEnum.seconds]: '00'
      });
      return;
    }

    if (JSON.stringify(timeState) != JSON.stringify(externalValue)) {
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
        setTimeState({
          [TimePickerTypesEnum.hour]: '00',
          [TimePickerTypesEnum.minutes]: '00',
          [TimePickerTypesEnum.seconds]: '00'
        });
        console.error('incorrect time value was provided to TimePicker component');
      }
    }
  }, [externalValue]);

  const restrictValues = useCallback(
    (value: string, type: TimePickerTypesEnum): void => {
      if ((type === TimePickerTypesEnum.hour && +value > 23) || +value < 0) {
        return;
      }

      if (
        (type === TimePickerTypesEnum.minutes || type === TimePickerTypesEnum.seconds) &&
        (+value > 59 || +value < 0)
      ) {
        return;
      }

      onChange && externalValue
        ? onChange({ ...timeState, [type]: value }, type)
        : setTimeState({ ...timeState, [type]: value });
    },
    [timeState]
  );

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

  const onTimeFieldClickClick = (e): void => {
    stopEventPropogation(e);
  };

  const stopEventPropogation = (e): void => {
    e.stopPropagation();
  };

  const handleChange = useCallback(
    (value: string, type: TimePickerTypesEnum, e?: ChangeEvent<HTMLInputElement>): void => {
      const newValue: string = transformValue(value);
      restrictValues(newValue, type);
    },
    [transformValue, restrictValues]
  );

  const handleArrowsClick = useCallback(
    (e, type: TimePickerTypesEnum, direction: 'up' | 'down'): void => {
      if (disabled) return;

      stopEventPropogation(e);
      let value = +timeState[type];

      direction === 'up' ? value++ : value--;

      handleChange(String(value), type);
    },
    [disabled, timeState]
  );

  const handleKeydown = useCallback((e, type: TimePickerTypesEnum) => {
    if (type === TimePickerTypesEnum.hour && e.key === 'ArrowRight') {
      minutesRef.current.focus();
    }

    if (type === TimePickerTypesEnum.seconds && e.key === 'ArrowLeft') {
      minutesRef.current.focus();
    }

    if (type === TimePickerTypesEnum.minutes && e.key === 'ArrowLeft') {
      hourRef.current.focus();
    }

    if (type === TimePickerTypesEnum.minutes && e.key === 'ArrowRight') {
      secondsRef.current.focus();
    }
  }, []);

  const handleInputContainerClick = useCallback(() => {
    hourRef?.current.focus();
  }, []);

  useEffect(() => syncValues(), [syncValues]);

  return (
    <div className={styles.InputStylesWrapper}>
      <div
        className={classNames(styles.InputStyles, {
          [styles[`InputStyles--${color}`]]: color,
          [styles['InputStyles--disabled']]: disabled,
          [styles['InputStyles--full-width']]: fullWidth
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
          onClick={onTimeFieldClickClick}
          handleKeydown={handleKeydown}
          handleChange={handleChange}
          handleArrowsClick={handleArrowsClick}
          timeState={timeState}
          type={TimePickerTypesEnum.hour}
        />
        <TimeField
          disabled={disabled}
          color={color}
          ref={minutesRef}
          onClick={onTimeFieldClickClick}
          handleKeydown={handleKeydown}
          handleChange={handleChange}
          handleArrowsClick={handleArrowsClick}
          timeState={timeState}
          type={TimePickerTypesEnum.minutes}
        />
        <TimeField
          disabled={disabled}
          color={color}
          ref={secondsRef}
          onClick={onTimeFieldClickClick}
          handleKeydown={handleKeydown}
          handleChange={handleChange}
          handleArrowsClick={handleArrowsClick}
          timeState={timeState}
          type={TimePickerTypesEnum.seconds}
        />
      </div>
      {explanation && (
        <Typography
          className={classNames(styles.Explanation, {
            [styles[`Explanation--${color}`]]: color,
            [styles[`Explanation--disabled`]]: disabled
          })}
          variant='p5'
          component='span'>
          {explanation}
        </Typography>
      )}
    </div>
  );
};
