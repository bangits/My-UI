import { Select, SelectProps } from '@/components';
import { TextInput, TextInputProps } from '../TextInput';
import { typedMemo } from '@/helpers';
import { IComponent } from '@/types';
import classNames from 'classnames';
import React, { DetailedHTMLProps, FC, InputHTMLAttributes, useCallback, useEffect, useRef, useState } from 'react';
import styles from './InputWithDropdown.module.scss';

export interface InputWithDropdownProps extends IComponent {
  inputProps?: TextInputProps;
  dropdownProps?: SelectProps<any[], boolean, any>;
  onInputChange?: (value: string) => void;
  onDropdownChange?: (value: number) => void;
  dropdownInputProps?: DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
}

const InputWithDropdown: FC<InputWithDropdownProps> = ({
  inputProps,
  dropdownProps,
  onInputChange,
  onDropdownChange,
  dropdownInputProps,
  className
}) => {
  const [inputValue, setInputValue] = useState<string>(inputProps?.value?.toString() || '');
  const [isDropdown, setIsDropdown] = useState(!inputValue.length);
  const [isInputFocused, setInputFocused] = useState(false);
  const [options, setOptions] = useState<SelectProps<any[], boolean, any>['options']>([]);

  const selectInputRef = useRef<HTMLInputElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setOptions(dropdownProps.options);
  }, [dropdownProps.options]);

  const onTextInputBlur = useCallback(
    (e) => {
      if (e.relatedTarget === selectInputRef.current) return;

      inputValue.length > 0 ? setIsDropdown(false) : setIsDropdown(true);

      setInputFocused(false);

      inputProps?.onBlur?.(e);
    },
    [inputValue, selectInputRef, inputProps?.onBlur]
  );

  const onTextInputChange = useCallback(
    (e) => {
      setInputValue(e.target.value);
      onInputChange(e.target.value);
    },
    [onInputChange]
  );

  const onTextInputFocus = useCallback(() => {
    inputValue.length === 0 ? setIsDropdown(false) : setIsDropdown(false);

    setInputFocused(true);
  }, [inputValue]);

  const onSelectChange = useCallback(
    (e) => {
      inputRef.current?.focus?.();

      onDropdownChange(e);
    },
    [inputRef, onDropdownChange]
  );

  useEffect(() => {
    if (!inputProps?.value) {
      setInputValue('');
      setInputFocused(false);
      setIsDropdown(true);
    }
  }, [inputProps?.value]);

  return (
    <>
      <div className={classNames(styles.InputWithDropdownBase, className)}>
        <TextInput
          {...inputProps}
          containerClassName={styles['InputWithDropdownBase--input']}
          onFocus={onTextInputFocus}
          onBlur={(e) => onTextInputBlur(e)}
          forceFocused={isInputFocused}
          onChange={(e) => onTextInputChange(e)}
          value={inputValue}
          ref={inputRef}
        />

        <div
          className={classNames(styles['InputWithDropdownBase--dropdown'], {
            [styles.isDropdownActive]: isDropdown
          })}>
          <Select
            {...dropdownProps}
            options={options}
            className={classNames(styles['InputWithDropdownBase--select'])}
            isSearchable
            onChange={onSelectChange}
            renderInput={({
              value,
              isMenuOpen,
              onInputChange: onDropdownInputChange,
              onSearchValueChange,
              onInputBlur,
              searchValue
            }) => {
              return (
                <div
                  className={classNames(styles['InputWithDropdownBase--dropdown-control'], {
                    [styles[`InputWithDropdownBase--dropdown-input--${dropdownProps?.color}`]]: dropdownProps?.color
                  })}>
                  <input
                    {...dropdownInputProps}
                    className={classNames(
                      styles['InputWithDropdownBase--dropdown-input'],
                      styles['InputWithDropdownBase--dropdown-control-label']
                    )}
                    key={dropdownInputProps.value?.toString() || value?.label || ''}
                    defaultValue={dropdownInputProps.value || value?.label || ''}
                    type='text'
                    onChange={(e) => {
                      onDropdownInputChange(e.target.value);

                      onSearchValueChange(e);
                    }}
                    onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
                      if (dropdownInputProps.type === 'number') e.target.value = e.target.value.replace(/[^\d.+]/g, '');
                    }}
                    onBlur={onInputBlur}
                    ref={selectInputRef}
                    value={searchValue}
                  />
                  <span
                    className={classNames({
                      [styles['InputWithDropdownBase--dropdown-control-icon-open']]: isMenuOpen,
                      [styles['InputWithDropdownBase--dropdown-control-icon-closed']]: !isMenuOpen
                    })}>
                    <svg xmlns='http://www.w3.org/2000/svg' width='0.8rem' viewBox='0 0 10 5' fill='currentColor'>
                      <path d='M.122,4.383,4.657.123a.572.572,0,0,1,.71,0l4.512,4.26c.273.239.056.617-.355.617H.476C.066,5-.152,4.622.122,4.383Z' />
                    </svg>
                  </span>
                </div>
              );
            }}
            fullWidth
          />
        </div>
      </div>
    </>
  );
};

export default typedMemo(InputWithDropdown);
