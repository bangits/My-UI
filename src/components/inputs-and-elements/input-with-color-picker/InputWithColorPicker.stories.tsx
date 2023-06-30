import { withKnobs } from '@storybook/addon-knobs';
import { ChangeEvent, MutableRefObject, useRef, useState } from 'react';
import InputWithColorPicker from './InputWithColorPicker';
import { convertColorToHex } from '@/helpers';

export default {
  component: InputWithColorPicker,
  decorators: [withKnobs],
  title: 'components/Inputs And Elements/Input With Color Picker'
};

const defaultColor = 'black';

export const Default = () => {
  const [value, setValue] = useState(defaultColor);
  const inputRef = useRef(null);
  const pickerRef = useRef(null);

  const typedInputRef = inputRef as MutableRefObject<HTMLInputElement>;

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    if (typedInputRef.current) {
      typedInputRef.current.value = event.target.value;
    }
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = convertColorToHex(event, {
      inputRef: typedInputRef,
      pickerRef
    });

    setValue(inputValue);
  };

  return (
    <InputWithColorPicker
      pickerRef={pickerRef}
      onInputChange={handleInputChange}
      inputProps={{ value: value, onChange: handleChange, ref: typedInputRef, label: 'Choose color' }}
    />
  );
};
