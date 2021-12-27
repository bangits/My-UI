import { BaseTextInputProps, Tree } from '@/components';
import { UIColors } from '@/types';
import ReactSelect, { ActionMeta, Props } from '@my-ui/react-select';
import classNames from 'classnames';
import { ReactNode, useCallback, useEffect, useMemo, useState } from 'react';
import { DropdownIcon, Menu, MenuList, Option, SearchControl } from './Controls';
import resetStyles from './reset-styles';
import styles from './Select.module.scss';

export type SelectValueType = number | string;

export interface GroupBase<Option> {
  readonly options: readonly Option[];
  readonly label?: string;
}

export type SelectOptionType = { value: SelectValueType; label: string };

export interface CustomSelectProps extends Omit<BaseTextInputProps, 'color'> {
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
  clearIcon?: ReactNode;
  //
  dropdown?: boolean;
  dropdownLabel?: string;
  dropdownSearchPlaceholder?: string;
  dropdownIcon?: ReactNode;
  color?: UIColors | 'default';

  //
  isTree?: boolean;
  treeData?: Tree[];

  disableSelectedOptions?: boolean;

  //
  renderInput?: (
    value: SelectOptionType,
    isMenuOpen: boolean,
    onInputChange: (event: any) => void,
    onInputBlur: () => void
  ) => ReactNode;
}

export interface SelectProps<
  Option extends SelectOptionType[],
  IsMulti extends boolean,
  Group extends GroupBase<Option>
> extends Omit<Props<Option, IsMulti, Group>, 'defaultValue' | 'value' | 'options' | 'onChange'>,
    CustomSelectProps {
  defaultValue?: IsMulti extends true ? SelectValueType[] : SelectValueType;
  value?: IsMulti extends true ? SelectValueType[] : SelectValueType;
  isMulti?: IsMulti;
  options?: Option;

  onChange?: (
    updatedOptions: IsMulti extends true ? Option[number]['value'][] : Option[number]['value'],
    event: ActionMeta<unknown>,
    options: Option
  ) => void;
}

function Select<
  Option extends SelectOptionType[],
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = { options: [] }
>({
  isMulti,
  defaultValue,
  value,
  className,
  isTree,
  treeData,
  disableSelectedOptions,
  ...selectProps
}: SelectProps<Option, IsMulti, Group>) {
  const { clearButton, dropdown, selectAllValue, selectAllLabel, fullWidth } = selectProps;

  let { selectAll } = selectProps;

  if (selectProps.options && !selectProps.options.length) selectAll = false;

  const allOption = useMemo(() => ({ label: selectAllLabel, value: selectAllValue }), [selectAllLabel, selectAllValue]);

  const transformNumberValueToOptions = useCallback(
    (value) => {
      if (!value) return value;

      const transformedValues = isMulti
        ? selectProps.options.filter((o) => (value as SelectValueType[]).includes(o.value))
        : { value: defaultValue as SelectValueType, label: selectProps.options.find((o) => o.value === value)?.label };

      if (Array.isArray(transformedValues) && transformedValues.length === selectProps.options.length && selectAll)
        transformedValues.push(allOption);

      return transformedValues;
    },
    [selectProps.options, allOption, selectAll]
  );

  const transformedDefaultValue = useMemo(
    () => transformNumberValueToOptions(defaultValue),
    [defaultValue, isMulti, selectProps.options]
  );

  const isWithValue = useMemo(() => !!value, []);

  const [selectedOptions, setSelectedOptions] = useState(transformedDefaultValue);

  const transformedValue = useMemo(() => transformNumberValueToOptions(value), [value, selectProps.options]);

  console.log(transformedValue);

  const sortedOptions = useMemo(() => {
    if (!Array.isArray(selectedOptions)) return selectProps.options;

    const currentOptions = (Array.isArray(transformedValue) ? transformedValue : selectedOptions).filter(
      (option) => option.value !== selectAllValue
    );

    return new Set([...currentOptions, ...selectProps.options]);
  }, [transformedValue, selectAllValue, selectProps.options, selectedOptions]);

  function getFlatMap({ value, label, children = [] }) {
    return [
      {
        value,
        label
      }
    ].concat(...children?.map(getFlatMap));
  }

  const allList = treeData
    ?.map((node) => {
      return getFlatMap({ value: node.id, children: node.children, label: node.name });
    })
    .flat();

  const options = useMemo(
    () =>
      isMulti ? [...(selectAll ? [allOption] : []), ...sortedOptions] : isTree ? [...allList] : selectProps.options,
    [isMulti, sortedOptions, selectProps.options, selectAll, isTree, allList]
  );

  const onChange = useCallback<Props['onChange']>(
    (selectedOptions: SelectOptionType[] | SelectOptionType, event) => {
      const selectedOptionValue = (event.option as SelectOptionType)?.value;

      let updatedOptions: SelectOptionType[] | SelectOptionType;

      // For all option
      if (
        Array.isArray(selectedOptions) &&
        (selectedOptionValue === selectAllValue ||
          (selectProps.options.length === selectedOptions.length && event.action !== 'deselect-option'))
      ) {
        updatedOptions = event.action === 'select-option' ? options : [];
      } else {
        const filteredOptions = Array.isArray(selectedOptions)
          ? [...selectedOptions.filter((option) => option.value !== selectAllValue)]
          : selectedOptions;

        updatedOptions = filteredOptions;
      }

      setSelectedOptions(updatedOptions);

      if (selectProps.onChange)
        selectProps.onChange(
          // @ts-expect-error ignoring typescript for typecast
          Array.isArray(updatedOptions)
            ? updatedOptions.filter((o) => o.value !== selectAllValue).map((o) => o.value)
            : updatedOptions.value,
          event,
          selectProps.options
        );
    },
    [selectProps.onChange, selectAllValue, options, allOption, selectedOptions, selectProps.options, isMulti]
  );

  useEffect(() => {
    if (isWithValue) setSelectedOptions(transformNumberValueToOptions(value));
  }, [value]);

  useEffect(() => {
    if (defaultValue !== undefined && transformedDefaultValue) setSelectedOptions(transformedDefaultValue);
  }, [transformedDefaultValue]);

  return (
    <ReactSelect
      {...selectProps}
      isTree={isTree}
      treeData={treeData}
      disableSelectedOptions={disableSelectedOptions}
      captureMenuScroll={false}
      onChange={onChange}
      onChangeOriginal={selectProps.onChange}
      onInputChangeOriginal={selectProps.onInputChange}
      classNamePrefix='react-select'
      value={transformedValue === undefined ? selectedOptions : transformedValue}
      defaultValue={transformedDefaultValue}
      // @ts-expect-error ignored because we need to reset all css styles
      styles={resetStyles}
      isClearable={true}
      hideSelectedOptions={false}
      components={
        !isTree
          ? {
              Option,
              Control: !dropdown ? SearchControl : DropdownIcon,
              MenuList
            }
          : { Option, Control: !dropdown ? SearchControl : DropdownIcon, Menu }
      }
      option
      isMulti={isMulti}
      closeMenuOnSelect={isMulti ? false : true}
      controlShouldRenderValue={isMulti ? false : true}
      backspaceRemovesValue={false}
      className={classNames(
        styles.Select,
        {
          [styles['Select--fullWidth']]: fullWidth,
          [styles['Select--dropdown']]: dropdown,
          [styles['Select--with-clear']]: clearButton,
          [styles['Select--all']]: selectAll && selectAllValue
        },
        'MyUI-Select',
        className
      )}
      options={options}
    />
  );
}

Select.defaultProps = {
  selectAllValue: '*',
  selectAllLabel: 'All',
  dropdownSearchPlaceholder: 'Select Filters...',
  inputLabel: 'Select...',
  inputSelectedLabel: 'Selected items: ',
  renderInputSelectedLabel: (count) => `Selected items: ${count}`,
  fullWidth: false,
  color: 'default'
};

export default Select;
