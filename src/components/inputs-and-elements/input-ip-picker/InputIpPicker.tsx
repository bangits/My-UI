import { ChangeEvent, KeyboardEvent, useCallback, useState } from 'react';
import { Typography } from '@/my-ui-core';
import { UIColors } from '@/types';
import classNames from 'classnames';
import { IpField } from './IpField';
import styles from './InputIpPicker.module.scss';

type ValueType = [string, string, string, string];

export interface InputIpPickerProps {
  value?: ValueType;
  explanation?: string;
  label?: string;
  color?: UIColors;
  disabled?: boolean;
  readOnly?: boolean;
  fullWidth?: boolean;
  onChange?: (e: string[]) => void;
}

export const InputIpPicker = ({
  value,
  explanation,
  label,
  color,
  disabled,
  readOnly,
  fullWidth,
  onChange
}: InputIpPickerProps) => {
  const [address, setAddress] = useState<ValueType>(value || ['', '', '', '']);

  const handleDelete = useCallback(
    (index: number, e: KeyboardEvent<HTMLInputElement>) => {
      if (disabled || readOnly) return;

      if (!address[index]) {
        const target = e.target as HTMLInputElement;
        const previousSibling = target?.previousSibling as HTMLInputElement;
        previousSibling?.focus();
      }
    },
    [disabled, readOnly, address]
  );

  const setAddressByIndex = useCallback(
    (index: number, value: string, e?: ChangeEvent<HTMLInputElement>) => {
      if (disabled || readOnly) return;

      if (+value > 255) {
        value = '255';
      }

      if (value.length > 2) {
        const target = e.target as HTMLInputElement;
        const nextSibling = target?.nextSibling as HTMLInputElement;
        nextSibling?.focus();
      }

      const newAddress = [...address];
      newAddress[index] = value;
      setAddress(newAddress as ValueType);
      onChange?.(newAddress as ValueType);
    },
    [onChange, address, disabled, readOnly]
  );

  return (
    <div className={styles.InputStylesWrapper}>
      <div
        className={classNames(styles.InputStyles, {
          [styles[`InputStyles--${color}`]]: color,
          [styles['InputStyles--disabled']]: disabled,
          [styles['InputStyles--full-width']]: fullWidth
        })}>
        {label && (
          <label
            className={classNames(styles.LabelStyles, {
              [styles[`LabelStyles--${color}`]]: color,
              [styles['LabelStyles--disabled']]: disabled
            })}>
            {label}
          </label>
        )}
        <IpField
          disabled={disabled}
          value={address[0]}
          onChange={(value, e) => setAddressByIndex(0, value, e)}
          onDelete={(e: KeyboardEvent<HTMLInputElement>) => console.log(0, e)}
        />
        <IpField
          disabled={disabled}
          value={address[1]}
          onChange={(value, e) => setAddressByIndex(1, value, e)}
          onDelete={(e: KeyboardEvent<HTMLInputElement>) => handleDelete(1, e)}
        />
        <IpField
          disabled={disabled}
          value={address[2]}
          onChange={(value, e) => setAddressByIndex(2, value, e)}
          onDelete={(e: KeyboardEvent<HTMLInputElement>) => handleDelete(2, e)}
        />
        <IpField
          disabled={disabled}
          value={address[3]}
          onChange={(value, e) => setAddressByIndex(3, value, e)}
          onDelete={(e: KeyboardEvent<HTMLInputElement>) => handleDelete(3, e)}
        />
      </div>
      <div
        className={classNames(styles.DividersWrapper, {
          [styles['DividersWrapper--full-width']]: fullWidth
        })}>
        <div className={styles.Divider}></div>
        <div className={styles.Divider}></div>
        <div className={styles.Divider}></div>
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
