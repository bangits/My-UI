import { ChangeEvent, forwardRef, useCallback } from 'react';
import { TimePickerValue, TimePickerTypesEnum } from './InputTimePicker';
import styles from './InputTimePicker.module.scss';
import { UIColors } from '@/types';
import classNames from 'classnames';

export interface TimeField {
  onClick: (e: MouseEvent) => void;
  handleKeydown: (e: KeyboardEvent, type: TimePickerTypesEnum) => void;
  handleChange: (value: string, type: TimePickerTypesEnum, e?: ChangeEvent<HTMLInputElement>) => void;
  handleArrowsClick: (e: MouseEvent, type: TimePickerTypesEnum, direction: 'up' | 'down') => void;
  timeState: TimePickerValue;
  type: TimePickerTypesEnum;
  disabled?: boolean;
  color?: UIColors;
}

export const TimeField = forwardRef(
  (
    { disabled, color, onClick, handleKeydown, handleChange, timeState, type, handleArrowsClick }: TimeField,
    ref: React.MutableRefObject<HTMLInputElement>
  ) => {
    const keepSelected = useCallback(() => {
      setTimeout(() => {
        ref.current.select();
      }, 0);
    }, []);

    const onFocus = useCallback(() => {
      keepSelected();
    }, [keepSelected]);

    const onInputClick = useCallback(
      (e) => {
        onClick(e);
        keepSelected();
      },
      [onClick, keepSelected]
    );

    const onKeyDown = useCallback(
      (e) => {
        handleKeydown(e, type);
      },
      [handleKeydown]
    );

    const onInputChange = useCallback(
      (e) => {
        handleChange(e.target.value, type, e);
      },
      [handleChange]
    );

    const onUpButtonClick = useCallback((e) => handleArrowsClick(e, type, 'up'), [handleArrowsClick]);

    const onDownButtonClick = useCallback((e) => handleArrowsClick(e, type, 'down'), [handleArrowsClick]);

    return (
      <>
        <input
          disabled={disabled}
          ref={ref}
          type='number'
          min={0}
          max={59}
          onFocus={onFocus}
          onClick={onInputClick}
          onKeyDown={onKeyDown}
          onChange={onInputChange}
          value={String(timeState?.[type])}
          className={classNames(styles.InputBase, {
            [styles[`InputBase--${color}`]]: color,
            [styles[`InputBase--disabled`]]: disabled
          })}
        />
        <div className={styles.ArrowContainer}>
          <div
            onClick={onUpButtonClick}
            className={classNames(styles.ArrowUp, { [styles[`ArrowUp--disabled`]]: disabled })}></div>
          <div
            onClick={onDownButtonClick}
            className={classNames(styles.ArrowDown, { [styles[`ArrowDown--disabled`]]: disabled })}></div>
        </div>
      </>
    );
  }
);
