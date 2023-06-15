import { ChangeEvent, useCallback, MouseEvent, useMemo, useState } from 'react';
import { SwitchForInput, SwitchForInputProps } from './switch-for-input/SwitchForInput';
import { TextInput, TextInputProps } from '../TextInput';
import styles from './InputWithSwitch.module.scss';
import classNames from 'classnames';

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
  const [isFocused, setIsFocused] = useState(false);

  const handleInputChange = useCallback((e) => onInputChange?.(e.target.value, e), [onInputChange]);
  const handleSwitchChange = useCallback((value, e) => onSwitchChange?.(value, e), [onSwitchChange]);

  const initialOptionIndex = useMemo(() => {
    const optionIndex = switchOptions.findIndex((option) => option.id === switchValue);
    return optionIndex === -1 ? 0 : optionIndex;
  }, [switchOptions, switchValue]);

  const label = useMemo(
    () =>
      inputProps.label ? (
        <div
          className={classNames(styles['InputLabel'], {
            [styles['InputLabel--focused']]: isFocused || inputValue
          })}>
          {inputProps?.label}
        </div>
      ) : null,
    [inputProps, isFocused, inputValue]
  );

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
        label={label}
        onBlur={() => setIsFocused(false)}
        onFocus={() => setIsFocused(true)}
        onChange={handleInputChange}
        value={inputValue}
      />
    </div>
  );
};
