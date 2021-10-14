import { TextInputProps } from '@/components';
import ReactSelect from '@my-ui/react-select';
import { StateManagerProps } from '@my-ui/react-select/src/useStateManager';
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
  error?: boolean;
  success?: boolean;
  warning?: boolean;
};

const Select: FC<StateManagerProps & SelectProps & TextInputProps> = ({
  children,
  isSearchable,
  isMulti,
  error,
  success,
  warning,
  defaultValue,
  selectAllValue = '*',
  selectAllLabel = 'All',
  className,
  inputLabel = 'Select...',
  inputSelectedLabel = 'Selected items: ',
  ...selectProps
}) => {
  const [selectedOptions, setSelectedOptions] = useState(defaultValue || []);

  const allOption = useMemo(() => ({ label: selectAllLabel, value: selectAllValue }), [selectAllLabel, selectAllValue]);

  const onChange = useCallback<StateManagerProps['onChange']>(
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
    [selectProps.onChange, selectProps.options, selectProps.value, selectAllValue, allOption]
  );

  return (
    <div>
      <ReactSelect
        {...selectProps}
        error={error}
        success={success}
        warning={warning}
        inputSelectedLabel={inputSelectedLabel}
        inputLabel={inputLabel}
        onChange={onChange}
        /*eslint-disable */
        //@ts-ignore ignored because we need to reset all css styles
        styles={resetStyles}
        /*eslint-enable */
        isClearable={false}
        hideSelectedOptions={false}
        classNamePrefix='react-select'
        components={{ Option: isMulti ? Option : DefaultOption, Control: isSearchable ? SearchControl : IconControl }}
        /* removeSelected={false} */
        isMulti={isMulti}
        closeMenuOnSelect={isMulti ? false : true}
        controlShouldRenderValue={isMulti ? false : true}
        backspaceRemovesValue={false}
        value={selectedOptions}
        className={classNames(styles.Select, 'MyUI-Select', className)}
        options={isMulti ? [allOption, ...selectProps.options] : selectProps.options}
      />
    </div>
  );
};

export default Select;
