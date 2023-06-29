import { FC } from 'react';
import styles from './ColorPicker.module.scss';

export interface ColorPickerProps {
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  disabled?: boolean;
  pickerRef: React.MutableRefObject<HTMLSpanElement>;
}

const ColorPicker: FC<ColorPickerProps> = ({ onChange, value, pickerRef, disabled = false }): JSX.Element => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) onChange(event);
  };

  return (
    <label aria-label='color-picker'>
      <input
        type='color'
        value={value}
        onChange={handleChange}
        disabled={disabled}
        className={styles.ColorPickerInput}
      />
      <span
        ref={pickerRef}
        className={styles.ColorPicker}
        style={{
          border: `1px solid ${value}`,
          backgroundColor: value
        }}
      />
    </label>
  );
};

export default ColorPicker;
