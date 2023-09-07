import { ChangeEvent, KeyboardEvent } from 'react';
import styles from './InputIpPicker.module.scss';

interface IpFieldProps {
  onChange: (value: string, e?: ChangeEvent<HTMLInputElement>) => void;
  onDelete: (e: KeyboardEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  value: string;
}

export const IpField = ({ onChange, onDelete, value, disabled }: IpFieldProps) => {
  const handleKeyUp = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace') {
      onDelete?.(e);
    }
  };

  return (
    <input
      disabled={disabled}
      value={value}
      onKeyUp={handleKeyUp}
      onChange={(e) => onChange(e.target.value, e)}
      className={styles.InputBase}
      type='number'
      placeholder='-'
    />
  );
};
