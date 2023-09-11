import { ChangeEvent, KeyboardEvent, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Typography } from '@/my-ui-core';
import { UIColors } from '@/types';
import classNames from 'classnames';
import { IpField } from './IpField';
import styles from './InputIpPicker.module.scss';

export interface InputIpPickerProps {
  value?: string;
  explanation?: string;
  label?: string;
  color?: UIColors;
  disabled?: boolean;
  readOnly?: boolean;
  fullWidth?: boolean;
  onChange?: (e: string) => void;
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
  const input1 = useRef<HTMLInputElement>();
  const input2 = useRef<HTMLInputElement>();
  const input3 = useRef<HTMLInputElement>();
  const input4 = useRef<HTMLInputElement>();

  const [address, setAddress] = useState<string>('...');
  const splittedAddress = useMemo(() => address.split('.') || [], [address]);
  const refs = useMemo(() => [input1, input2, input3, input4], []);

  const handleDelete = useCallback(
    (index: number) => {
      if (disabled || readOnly) return;

      if (!splittedAddress[index]) {
        refs[index - 1]?.current?.focus();
      }
    },
    [disabled, readOnly, address]
  );

  const setAddressByIndex = useCallback(
    (index: number, value: string) => {
      if (disabled || readOnly) return;

      if (+value > 255) {
        value = '255';
      }

      if (value.length > 2) {
        refs[index + 1]?.current?.focus();
      }

      const newAddress = address.split('.');
      newAddress[index] = value;

      const newValue = newAddress.join('.');
      setAddress(newValue);
      onChange?.(newValue);
    },
    [onChange, address, disabled, readOnly]
  );

  const valueValidation = useCallback(() => {
    if (value) {
      let isInvalid = false;

      value.split('.').forEach((elem) => {
        if ((elem && isNaN(+elem)) || (elem && elem && !isNaN(+elem) && +elem > 255)) {
          isInvalid = true;
        }
      });

      if (isInvalid) {
        return console.error(`Wrong value provided into Ip Picker -> value:${value}`);
      }

      setAddress(value);
    } else {
      setAddress('...');
    }
  }, [value]);

  useEffect(() => valueValidation(), [valueValidation]);

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
          ref={input1}
          disabled={disabled}
          value={splittedAddress[0]}
          onChange={(value, e) => setAddressByIndex(0, value)}
          onDelete={(e: KeyboardEvent<HTMLInputElement>) => handleDelete(0)}
        />
        <IpField
          ref={input2}
          disabled={disabled}
          value={splittedAddress[1]}
          onChange={(value, e) => setAddressByIndex(1, value)}
          onDelete={(e: KeyboardEvent<HTMLInputElement>) => handleDelete(1)}
        />
        <IpField
          ref={input3}
          disabled={disabled}
          value={splittedAddress[2]}
          onChange={(value, e) => setAddressByIndex(2, value)}
          onDelete={(e: KeyboardEvent<HTMLInputElement>) => handleDelete(2)}
        />
        <IpField
          removeDivider
          ref={input4}
          disabled={disabled}
          value={splittedAddress[3]}
          onChange={(value, e) => setAddressByIndex(3, value)}
          onDelete={(e: KeyboardEvent<HTMLInputElement>) => handleDelete(3)}
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
