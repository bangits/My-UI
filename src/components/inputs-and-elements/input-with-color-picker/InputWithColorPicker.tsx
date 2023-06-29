import { ChangeEvent, MutableRefObject, useState } from 'react';
import { TextInput, TextInputProps } from '../TextInput';
import { ColorPicker, convertColorToHex } from '@/my-ui-core';

export interface InputWithColorPickerProps {
  inputProps: TextInputProps;
  pickerRef: MutableRefObject<HTMLSpanElement>;
  onInputChange?: (event: React.ChangeEvent<HTMLInputElement>, value: string) => void;
}

const InputWithColorPicker = ({ pickerRef, onInputChange, inputProps }: InputWithColorPickerProps): JSX.Element => {
  const [currentValue, setCurrentValue] = useState(inputProps.value as string);

  const typedRef = inputProps.ref as MutableRefObject<HTMLInputElement>;

  const handleColorPickerChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (inputProps.onChange) inputProps.onChange(event);
    if (typedRef.current) {
      typedRef.current.value = event.target.value;
    }

    setCurrentValue(event.target.value);
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const convertedValue = convertColorToHex(event, {
      inputRef: typedRef,
      pickerRef
    });
    if (onInputChange) onInputChange(event, convertedValue);
    setCurrentValue(convertedValue);
  };

  return (
    <TextInput
      type='text'
      ref={typedRef}
      onChange={handleInputChange}
      value={inputProps.value ?? currentValue}
      endIcon={
        <ColorPicker
          pickerRef={pickerRef}
          onChange={handleColorPickerChange}
          value={(inputProps.value as string) ?? currentValue}
        />
      }
      {...inputProps}
    />
  );
};

export default InputWithColorPicker;
