import { CustomSelectProps, SelectOptionType, TextInput } from '@/components';
import { DropdownArrowIconDown, DropdownArrowIconUp } from '@/icons';
import { components } from '@my-ui/react-select';
import classNames from 'classnames';
import { ChangeEvent, useCallback, useEffect, useState } from 'react';
import styles from './Select.module.scss';
import { getMyUIPrefix } from '@/configs';

export const SearchControl: typeof components.Control = (props) => {
  const selectProps: typeof props.selectProps & CustomSelectProps = props.selectProps;
  // @ts-ignore
  const currentValue = selectProps?.value as SelectOptionType | SelectOptionType[];

  const [searchValue, setSearchValue] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuToggle = useCallback(() => {
    if (!isMenuOpen) {
      selectProps.onMenuOpen();

      setIsMenuOpen(!isMenuOpen);
    }
  }, [isMenuOpen]);

  const onInputBlur = useCallback(() => {
    setIsMenuOpen(false);
    selectProps.onMenuClose();

    if (currentValue && !Array.isArray(currentValue)) setSearchValue(currentValue.label);
  }, [currentValue]);

  const onSearchValueChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      if (!selectProps.isSearchable) return;

      selectProps.onInputChange(e.target.value, null);
      setSearchValue(e.target.value);
    },
    [currentValue, selectProps.isSearchable]
  );

  useEffect(() => {
    if (!Array.isArray(currentValue)) setSearchValue(currentValue?.label);
  }, [currentValue]);

  useEffect(() => {
    const isMulti = Array.isArray(currentValue);

    if (!isMenuOpen && isMulti) {
      // Show one selected value
      if (currentValue.length === 1) return setSearchValue(currentValue[0].label);

      // Show all value
      if (selectProps.options.length && currentValue.length === selectProps.options.length)
        return setSearchValue(selectProps.selectAllLabel);

      // Show selected values count
      if (currentValue.length > 1) setSearchValue(selectProps.renderInputSelectedLabel(currentValue.length));
    }

    if (!isMenuOpen && (!currentValue || (isMulti && !currentValue.length))) setSearchValue('');
  }, [currentValue, isMenuOpen]);

  useEffect(() => {
    if (!props.selectProps.inputValue && searchValue && !currentValue) setSearchValue('');
  }, [props.selectProps.inputValue]);

  return (
    <components.Control {...props}>
      {selectProps.renderInput ? (
        <div onClick={selectProps.onMenuOpen} className={`${getMyUIPrefix()}-SearchControl`}>
          {/* @ts-ignore ignoring typescript for typecast */}
          {selectProps.renderInput(selectProps.value, props.selectProps.menuIsOpen, props.selectProps.onInputChange)}
        </div>
      ) : (
        <div
          className={classNames(
            styles['Select--search'],
            `${getMyUIPrefix()}-SelectSearch`,
            `${getMyUIPrefix()}-MyUISelectInput`,
            'MyUI-Select-Input'
          )}>
          <TextInput
            fullWidth={selectProps.fullWidth}
            color={selectProps.color !== 'default' ? selectProps.color : undefined}
            explanation={selectProps.explanation}
            maxLength={selectProps.maxLength}
            onChange={onSearchValueChange}
            onBlur={onInputBlur}
            onClick={menuToggle}
            value={searchValue}
            label={selectProps.inputLabel}
            className={classNames('MyUI-SelectInput', `${getMyUIPrefix()}-MyUISelectInput`)}
            endIcon={
              <div className={classNames(`${getMyUIPrefix()}-SelectIconContainer`, styles['Select--icon-container'])}>
                {isMenuOpen ? <DropdownArrowIconUp /> : <DropdownArrowIconDown />}
              </div>
            }
          />
        </div>
      )}
    </components.Control>
  );
};
