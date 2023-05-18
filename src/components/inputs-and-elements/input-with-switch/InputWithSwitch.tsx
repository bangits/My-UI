import { ChangeEvent, useCallback } from 'react';
import { TextInput, TextInputProps } from '../TextInput';
import { SwitchForInput, SwitchForInputProps } from './switch-for-input/SwitchForInput';

export interface InputWithSwitchProps {
  inputProps?: TextInputProps;
  switchProps?: SwitchForInputProps;
  inputValue?: string;
  switchValue?: number;
  switchOptions: Record<string, string | number>[];
  onSwitchChange?: (value: number, e: ChangeEvent) => void;
  onInputChange?: (value: string, e: ChangeEvent) => void;
}

export const InputWithSwitch = ({
  inputProps = {},
  onInputChange,
  inputValue,
  switchValue,
  switchOptions,
  switchProps,
  onSwitchChange
}: InputWithSwitchProps) => {
  const handleInputChange = useCallback((e) => onInputChange?.(e.target.value, e), [onInputChange]);

  const handleSwitchChange = useCallback((e) => onSwitchChange?.(+e.target.value, e), [onSwitchChange]);

  return (
    <div>
      <TextInput
        suffix={
          <SwitchForInput idProp='id' labelProp='label' {...switchProps} value={switchValue} options={switchOptions} />
        }
        {...inputProps}
        onChange={handleInputChange}
        value={inputValue}
      />
    </div>
  );
};
