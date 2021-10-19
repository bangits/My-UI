import { Checkbox, TextInput } from '@/components';
import { ClearIcon, DropdownArrowIconDown, DropdownArrowIconUp, SettingIcon } from '@/icons';
import { components } from '@my-ui/react-select';
import classNames from 'classnames';
import React, { useCallback, useEffect, useState } from 'react';
import styles from './Select.module.scss';
export const Option = (props) => {
  return (
    <div
      className={classNames({
        [styles[`AllOption`]]: props.selectProps?.selectAllValue === '*'
      })}>
      <components.Option {...props}>
        <Checkbox checked={props.isSelected} onChange={() => null} /> <label>{props.label}</label>
      </components.Option>
    </div>
  );
};

export const DefaultOption = (props) => {
  const handleClick = useCallback((e) => {
    e.target.closest('.MyUI-Select').querySelector('input').blur();
  }, []);
  return (
    <div onClick={handleClick}>
      <components.Option {...props}>
        <span>{props.label}</span>
      </components.Option>
    </div>
  );
};
export const SearchControl = (props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [singleSelect, setSingleSelect] = useState(props.selectProps?.value?.label);

  const menuToggle = useCallback(() => {
    isMenuOpen ? props.selectProps.onMenuClose() : props.selectProps.onMenuOpen();
    setIsMenuOpen(!isMenuOpen);
  }, [isMenuOpen]);

  useEffect(() => {
    setSingleSelect(props.selectProps?.value?.label);
  }, [props.selectProps?.value?.label]);

  return (
    // @ts-ignore
    <components.Control {...props}>
      <div className={classNames(styles['Select--search'], 'MyUI-Select-Input')}>
        <TextInput
          className='MyUi-Input'
          color={props.selectProps.color !== 'primary' && props.selectProps.color}
          explanation={props.selectProps.explanation}
          maxLength={props.selectProps.maxLength}
          onChange={(e) => {
            props.selectProps.onInputChange(e.target.value);
            setSingleSelect(e.target.value);
            setInputValue(e.target.value);
            if (e.target.value === '') {
              setInputValue('');
              props.selectProps.onMenuOpen();
            }
          }}
          onBlur={() => {
            setIsMenuOpen(false);
            props.selectProps.onMenuClose();
          }}
          onClick={menuToggle}
          value={
            isMenuOpen
              ? props.selectProps.inputValue
              : props.selectProps.menuIsOpen
              ? inputValue
              : props.isMulti
              ? props.selectProps.inputValue
                ? props.selectProps.inputValue
                : props.selectProps?.value.length > 0
                ? props.selectProps?.value.length > 1
                  ? props.options.length === props.selectProps?.value.length
                    ? props.options[0].label
                    : `${props.selectProps.inputSelectedLabel} (${props.selectProps?.value.length})`
                  : props.selectProps?.value[0]?.label
                : ''
              : props.selectProps.menuIsOpen
              ? ''
              : singleSelect
          }
          label={props.selectProps.inputLabel}
          endIcon={
            <div className={classNames(styles['Select--icon-container'])}>
              {isMenuOpen ? <DropdownArrowIconUp /> : <DropdownArrowIconDown />}
            </div>
          }
        />
        {props.selectProps.clearButton && props.selectProps.menuIsOpen && (
          <div onClick={props.clearValue} className={classNames(styles[`Select--clear-button`])}>
            <div>
              <ClearIcon />
            </div>
            <span>{props.selectProps.clearButtonLabel}</span>
          </div>
        )}
      </div>
    </components.Control>
  );
};

export const IconControl = ({ ...props }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuToggle = useCallback(() => {
    isMenuOpen ? props.selectProps.onMenuClose() : props.selectProps.onMenuOpen();
    setIsMenuOpen(!isMenuOpen);
  }, [isMenuOpen]);
  return (
    // @ts-ignore
    <components.Control {...props}>
      <div onClick={menuToggle} className={classNames(styles['Select--dropdown-control'])}>
        <span className='Select--dropdown-control-icon'>
          <SettingIcon />
        </span>
        <span className='Select--dropdown-control-label'>Columns</span>
      </div>
      <div>
        <input />
      </div>
    </components.Control>
  );
};
