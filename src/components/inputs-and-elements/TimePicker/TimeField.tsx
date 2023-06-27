import { ChangeEvent, Ref, forwardRef, useCallback } from 'react';
import { TimePickerValue, ValuesTypesEnum } from './TimePicker';
import styles from './TimePicker.module.scss';
import { UIColors } from '@/types';
import classNames from 'classnames';

export interface TimeField {
  handleFocus: (type: ValuesTypesEnum) => void;
  handleBlur: () => void;
  onClick: (e: any) => void;
  handleKeydown: (e: any, type: ValuesTypesEnum) => void;
  handleChange: (value: string, type: ValuesTypesEnum, e?: ChangeEvent<HTMLInputElement>) => void;
  handleArrowUpButtonClick: (e: any, type: ValuesTypesEnum) => void;
  handleArrowDownButtonCick: (e: any, type: ValuesTypesEnum) => void;
  timeState: TimePickerValue;
  type: ValuesTypesEnum;
  disabled?: boolean;
  color?: UIColors;
}

export const TimeField = forwardRef(
  (
    {
      disabled,
      color,
      handleFocus,
      handleBlur,
      onClick,
      handleKeydown,
      handleChange,
      timeState,
      type,
      handleArrowUpButtonClick,
      handleArrowDownButtonCick
    }: TimeField,
    ref: Ref<HTMLInputElement>
  ) => {
    const keepSelected = useCallback(() => {
      setTimeout(() => {
        //@ts-ignore
        ref.current.select();
      }, 0);
    }, []);

    return (
      <>
        <input
          disabled={disabled}
          ref={ref}
          type='number'
          min={0}
          max={59}
          onFocus={() => {
            handleFocus(type);
            keepSelected();
          }}
          onBlur={handleBlur}
          onClick={(e) => {
            onClick(e);
            keepSelected();
          }}
          onKeyDown={(e) => {
            handleKeydown(e, type);
          }}
          onChange={(e) => {
            handleChange(e.target.value, type, e);
          }}
          value={String(timeState?.[type])}
          className={classNames(styles.InputBase, {
            [styles[`InputBase--${color}`]]: color,
            [styles[`InputBase--disabled`]]: disabled
          })}
        />
        <div className={styles.ArrowContainer}>
          <div onClick={(e) => handleArrowUpButtonClick(e, type)} className={styles.ArrowUp}></div>
          <div onClick={(e) => handleArrowDownButtonCick(e, type)} className={styles.ArrowDown}></div>
        </div>
      </>
    );
  }
);
