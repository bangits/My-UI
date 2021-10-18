import { UIColors } from '@/types';
import ReactSelect, { Props } from '@my-ui/react-select';
import classNames from 'classnames';
import React, { FC, useCallback, useMemo, useState } from 'react';
import { DefaultOption, IconControl, Option, SearchControl } from './Options';
import resetStyles from './reset-styles';
import styles from './Select.module.scss';
export type SelectProps = {
  selectAllLabel?: string;
  selectAllValue?: string;
  inputLabel?: string;
  inputSelectedLabel?: string;
  explanation?: string;
  fullWidth?: boolean;
  color?: UIColors;
  maxLength?: number;
  clearButton?: boolean;
  clearButtonLabel?: string;
} & Props;
const Select: FC<SelectProps> = ({
  children,
  isSearchable = true,
  fullWidth = false,
  explanation,
  isMulti,
  color,
  defaultValue,
  selectAllValue = '*',
  selectAllLabel = 'All',
  className,
  inputLabel = 'Select...',
  inputSelectedLabel = 'Selected items: ',
  maxLength = 50,
  clearButton,
  clearButtonLabel,
  ...selectProps
}) => {
  const [selectedOptions, setSelectedOptions] = useState((defaultValue as []) || []);
  const allOption = useMemo(() => ({ label: selectAllLabel, value: selectAllValue }), [selectAllLabel, selectAllValue]);
  const onChange = useCallback<Props['onChange']>(
    (selectedOptions: [], event) => {
      const selectedOptionValue = (event.option as { value?: string | undefined })?.value;
      if (event.action === 'select-option' && selectedOptionValue === selectAllValue) {
        const allOptions = selectProps.options;
        setSelectedOptions([allOption, ...allOptions]);
        if (selectProps.onChange) selectProps.onChange([allOption, ...allOptions], event);
      } else if (event.action === 'deselect-option' && selectedOptionValue === selectAllValue) {
        setSelectedOptions([]);
        if (selectProps.onChange) selectProps.onChange([], event);
      } else if (event.action === 'deselect-option' && selectedOptionValue !== selectAllValue) {
        //@ts-ignore
        const filteredOptions = selectedOptions.filter((option) => option.value !== selectAllValue);
        setSelectedOptions([...filteredOptions]);
        if (selectProps.onChange) selectProps.onChange([...filteredOptions], event);
      } else if (selectProps.options.length === selectedOptions.length) {
        const allOptions = selectProps.options;
        setSelectedOptions([allOption, ...allOptions]);
        if (selectProps.onChange) selectProps.onChange([allOption, ...allOptions], event);
      } else {
        setSelectedOptions(selectedOptions);
        if (selectProps.onChange) selectProps.onChange(selectedOptions, event);
      }
    },
    [selectProps.onChange, selectProps.options, selectProps.value, selectAllValue, allOption, selectedOptions]
  );
  const sortedOptions = useMemo(() => {
    if (!Array.isArray(selectedOptions)) return;
    const sortOptions = new Set<[]>([
      ...selectedOptions?.filter((option) => option.value !== '*'),
      ...selectProps.options
    ]);
    return sortOptions;
  }, [selectedOptions, selectProps.options]);

  const [selectRef, setSelectRef] = useState<any>();
  const clearValue = () => {
    selectRef.clearValue();
  };

  return (
    <div className={styles.Select}>
      <ReactSelect
        {...selectProps}
        selectAllValue={selectAllValue}
        clearButton={clearButton}
        clearButtonLabel={clearButtonLabel}
        ref={(ref) => setSelectRef(ref)}
        maxLength={maxLength}
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
        components={{ Option: isMulti ? Option : DefaultOption, Control: isSearchable ? SearchControl : IconControl }}
        /* removeSelected={false} */
        isMulti={isMulti}
        color={color}
        option
        explanation={explanation}
        closeMenuOnSelect={isMulti ? false : true}
        controlShouldRenderValue={isMulti ? false : true}
        backspaceRemovesValue={false}
        value={selectedOptions}
        className={classNames(
          styles.Select,
          {
            [styles[`Select--fullWidth`]]: fullWidth
          },
          'MyUI-Select',
          className
        )}
        options={isMulti ? [allOption, ...sortedOptions] : selectProps.options}
      />
    </div>
  );
};
export default Select;
