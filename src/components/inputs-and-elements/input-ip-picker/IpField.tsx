import { ChangeEvent, KeyboardEvent } from 'react';
import styles from './InputIpPicker.module.scss';

interface IpFieldProps {
  onChange: (value: string, e?: ChangeEvent<HTMLInputElement>) => void;
  onDelete: (e: KeyboardEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  removeDivider?: boolean;
  value: string;
}

export const IpField = ({ onChange, onDelete, value, disabled, removeDivider = false }: IpFieldProps) => {
  const handleKeyUp = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace') {
      onDelete?.(e);
    }
  };

  return (
    <div className={styles.InputBaseWrapper}>
      <input
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
};
