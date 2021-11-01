import { BaseTextInputProps } from '@/components';
import { UIColors } from '@/types';
import ReactSelect, { ActionMeta, GroupBase, Props } from '@my-ui/react-select';
import classNames from 'classnames';
import React, { ReactNode, useCallback, useEffect, useMemo, useState } from 'react';
import { DefaultOption, IconControl, MenuList, Option, SearchControl } from './Options';
import resetStyles from './reset-styles';
import styles from './Select.module.scss';

export type SelectValueType = number | string;

export type SelectOptionType = { value: SelectValueType; label: string };
export interface SelectProps<
  Option extends SelectOptionType[],
  IsMulti extends boolean,
  Group extends GroupBase<Option>
> extends Omit<Props<Option, IsMulti, Group>, 'defaultValue' | 'value' | 'options' | 'onChange'>,
    BaseTextInputProps {
  selectAll?: boolean;
  selectAllLabel?: string;
  selectAllValue?: string;
  //
  inputLabel?: string;
  inputSelectedLabel?: string; // Need to remove
  renderInputSelectedLabel?: (selectedCount: number) => string;
  //
  clearButton?: boolean;
  clearButtonLabel?: string;
  //
  dropdown?: boolean;
  dropdownLabel?: string;
  dropdownIcon?: ReactNode;
  color?: UIColors;
  //
  defaultValue?: IsMulti extends true ? SelectValueType[] : SelectValueType;
  value?: IsMulti extends true ? SelectValueType[] : SelectValueType;
  isMulti?: IsMulti;
  options: SelectOptionType[];
  onChange?: (updatedOptions: SelectOptionType[], event: ActionMeta<unknown>) => void;
}

function Select<Option extends SelectOptionType[], IsMulti extends boolean, Group extends GroupBase<Option>>({
  isSearchable = true,
  fullWidth = false,
  isMulti,
  defaultValue,
  value,
  selectAllValue = '*',
  selectAllLabel = 'All',
  className,
  inputLabel = 'Select...',
  inputSelectedLabel = 'Selected items: ',
  renderInputSelectedLabel = (count) => `Selected items: ${count}`,
  clearButton,
  clearButtonLabel,
  selectAll,
  dropdown,
  dropdownLabel,
  dropdownIcon,
  color,
  ...selectProps
}: SelectProps<Option, IsMulti, Group>) {
  const allOption = useMemo(() => ({ label: selectAllLabel, value: selectAllValue }), [selectAllLabel, selectAllValue]);

  const transformNumberValueToOptions = useCallback(
    (value) => {
      if (!value) return;

      return isMulti
        ? selectProps.options.filter((o) => (value as SelectValueType[]).includes(o.value))
        : { value: defaultValue as SelectValueType, label: selectProps.options.find((o) => o.value === value)?.label };
    },
    [selectProps.options]
  );

  const transformedDefaultValue = useMemo(() => transformNumberValueToOptions(defaultValue), [defaultValue, isMulti]);

  const isWithValue = useMemo(() => !!value, []);

  const [selectedOptions, setSelectedOptions] = useState(transformedDefaultValue);

  const transformedValue = useMemo(
    () => (value ? transformNumberValueToOptions(value) : selectedOptions),
    [value, selectedOptions]
  );

  const sortedOptions = useMemo(() => {
    const selectedOptions = Array.isArray(transformedValue)
      ? transformedValue.filter((option) => option.value !== selectAllValue)
      : [];

    return new Set([...selectedOptions, ...selectProps.options]);
  }, [transformedValue, selectAllValue, selectProps.options]);

  const options = useMemo(
    () => (isMulti && selectAll ? [allOption, ...sortedOptions] : selectProps.options),
    [allOption, isMulti, sortedOptions, selectProps.options]
  );

  const onChange = useCallback<Props['onChange']>(
    (selectedOptions: SelectOptionType[], event) => {
      const selectedOptionValue = (event.option as SelectOptionType)?.value;

      let updatedOptions: SelectOptionType[] | SelectOptionType;

      // For all option
      if (
        selectedOptionValue === selectAllValue ||
        (selectProps.options.length === selectedOptions.length && event.action !== 'deselect-option')
      ) {
        updatedOptions = event.action === 'select-option' ? options : [];
      } else {
        const filteredOptions = isMulti
          ? [...selectedOptions.filter((option) => option.value !== selectAllValue)]
          : selectedOptions;

        updatedOptions = filteredOptions;
      }

      setSelectedOptions(updatedOptions);

      if (selectProps.onChange)
        selectProps.onChange(Array.isArray(updatedOptions) ? updatedOptions : [updatedOptions], event);
    },
    [selectAllValue, options, allOption, selectedOptions, selectProps.options, isMulti]
  );

  useEffect(() => {
    if (isWithValue) setSelectedOptions(transformNumberValueToOptions(value));
  }, [value]);

  return (
    <ReactSelect
      {...selectProps}
      value={transformedValue}
      defaultValue={transformedDefaultValue}
      selectAllValue={selectAllValue}
      selectAll={selectAll}
      dropdown={dropdown}
      dropdownLabel={dropdownLabel}
      dropdownIcon={dropdownIcon}
      color={color}
      clearButton={clearButton}
      clearButtonLabel={clearButtonLabel}
      inputSelectedLabel={inputSelectedLabel}
      inputLabel={inputLabel}
      onChange={onChange}
      /*eslint-disable */
      //@ts-ignore ignored because we need to reset all css styles
      styles={resetStyles}
      /*eslint-enable */
      isClearable={true}
      hideSelectedOptions={false}
      classNamePrefix='react-select'
      components={{
        Option: isMulti ? Option : DefaultOption,
        Control: isSearchable ? SearchControl : IconControl,
        MenuList
      }}
      /* removeSelected={false} */
      isMulti={isMulti}
      option
      closeMenuOnSelect={isMulti ? false : true}
      controlShouldRenderValue={isMulti ? false : true}
      backspaceRemovesValue={false}
      className={classNames(
        styles.Select,
        {
          [styles[`Select--fullWidth`]]: fullWidth,
          [styles['Select--dropdown']]: dropdown,
          [styles['Select--with-clear']]: clearButton
        },
        'MyUI-Select',
        className
      )}
      options={options}
    />
  );
}

export default Select;
