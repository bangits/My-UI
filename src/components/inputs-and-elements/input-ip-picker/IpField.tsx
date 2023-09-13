import { ChangeEvent, KeyboardEvent, LegacyRef, forwardRef } from 'react';
import styles from './InputIpPicker.module.scss';
import classNames from 'classnames';

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

    const handleChange = (e) => {
      if (e.target.value && !/^[0-9]*$/.test(e.target.value)) {
        return;
      }

      onChange(e.target.value, e);
    };

    return (
      <div className={styles.InputBaseWrapper}>
        <input
          ref={ref}
          disabled={disabled}
          value={value}
          onInput={handleChange}
          onKeyDown={handleKeyUp}
          className={classNames(styles.InputBase, removeDivider && styles.InputBaseWrapperFull)}
          maxLength={3}
        />
        {!removeDivider && <div className={styles.Divider}></div>}
      </div>
    );
  }
);
