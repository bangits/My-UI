import { ChangeEvent, KeyboardEvent, LegacyRef, forwardRef } from 'react';
import styles from './InputIpPicker.module.scss';

interface IpFieldProps {
  onChange: (value: string, e?: ChangeEvent<HTMLInputElement>) => void;
  onDelete: (e: KeyboardEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  removeDivider?: boolean;
  value: string;
}

export const IpField = forwardRef(
  ({ onChange, onDelete, value, disabled, removeDivider = false }: IpFieldProps, ref: LegacyRef<HTMLInputElement>) => {
    const handleKeyUp = (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Backspace') {
        onDelete?.(e);
      }
    };

    return (
      <div className={styles.InputBaseWrapper}>
        <input
          ref={ref}
          disabled={disabled}
          value={value}
          onKeyUp={handleKeyUp}
          onChange={(e) => onChange(e.target.value, e)}
          className={styles.InputBase}
          type='number'
          placeholder='-'
        />
        {!removeDivider && <div className={styles.Divider}></div>}
      </div>
    );
  }
);
