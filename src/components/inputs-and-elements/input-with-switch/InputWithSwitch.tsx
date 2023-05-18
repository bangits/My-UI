import { ChangeEvent, useCallback, MouseEvent, useMemo } from 'react';
import { TextInput, TextInputProps } from '../TextInput';
import { SwitchForInput, SwitchForInputProps } from './switch-for-input/SwitchForInput';

export interface InputWithSwitchProps {
  inputProps?: TextInputProps;
  switchProps?: SwitchForInputProps;
  inputValue?: string;
  switchValue?: number;
  switchOptions: Record<string, string | number>[];
  onSwitchChange?: (value: number, e: MouseEvent<SVGSVGElement>) => void;
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

  const handleSwitchChange = useCallback((value, e) => onSwitchChange?.(value, e), [onSwitchChange]);

  const initialOptionIndex = useMemo(() => {
    const optionIndex = switchOptions.findIndex((option) => option.id === switchValue);
    return optionIndex === -1 ? 0 : optionIndex;
  }, [switchOptions, switchValue]);

  return (
    <div>
      <TextInput
        suffix={
          <SwitchForInput
            onChange={handleSwitchChange}
            idProp='id'
            labelProp='label'
            {...switchProps}
            initialValue={initialOptionIndex}
            options={switchOptions}
          />
        }
        {...inputProps}
        onChange={handleInputChange}
        value={inputValue}
      />
    </div>
  );
};
