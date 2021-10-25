import { Checkbox, TextInput } from '@/components';
import { ClearIcon, DropdownArrowIconDown, DropdownArrowIconUp, LoopIcon, SettingIcon } from '@/icons';
import { components } from '@my-ui/react-select';
import classNames from 'classnames';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import styles from './Select.module.scss';

export const Option = (props) => {
  return (
    <div
      className={classNames({
        [styles[`AllOption`]]: props.selectProps?.selectAllValue === '*' && props.selectProps.selectAll,
        [styles['Select--custom-option']]: !props.selectProps?.dropdown
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
    <div
      className={classNames({ [styles['Select--custom-option']]: !props.selectProps?.dropdown })}
      onClick={handleClick}>
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
          fullWidth={props.selectProps.fullWidth}
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
              setIsMenuOpen(!isMenuOpen);
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
                : props.selectProps?.value?.length > 0
                ? props.selectProps?.value?.length > 1
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
      </div>
    </components.Control>
  );
};

export const IconControl = ({ ...props }) => {
  const menuToggle = useCallback(() => {
    props.selectProps.menuIsOpen ? props.selectProps.onMenuClose() : props.selectProps.onMenuOpen();
  }, [props.selectProps.menuIsOpen]);

  function useOutsideClick(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          props.selectProps.onMenuClose();
        }
      }
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [ref]);
  }

  const wrapperRef = useRef(null);
  useOutsideClick(wrapperRef);

  return (
    // @ts-ignore
    <components.Control {...props}>
      <div ref={wrapperRef} onClick={menuToggle} className={classNames(styles['Select--dropdown-control'])}>
        <span className={classNames(styles['Select--dropdown-control-icon'])}>
          <SettingIcon />
        </span>
        <span className={classNames(styles['Select--dropdown-control-label'])}>{props.selectProps.dropdownLabel}</span>
      </div>
    </components.Control>
  );
};

export const MenuList = (props) => {
  const inputMouseDownHandler = useCallback((e) => e.stopPropagation(), []);

  const inputChangeHandler = useCallback(
    (e) => {
      props.selectProps.onInputChange(e.target.value);
    },
    [props.selectProps]
  );

  return (
    // @ts-ignore
    <>
      {props.selectProps.dropdown && (
        <div className={classNames(styles['Select--dropdown--input'])}>
          <input
            onMouseDown={inputMouseDownHandler}
            type='text'
            placeholder='Select Filters...'
            onChange={inputChangeHandler}
          />
          <span>
            <LoopIcon />
          </span>
        </div>
      )}
      <components.MenuList {...props}>
        {props.children}
        {props.selectProps.clearButton && (
          <div onClick={props.clearValue} className={classNames(styles[`Select--clear-button`])}>
            <div>
              <ClearIcon />
            </div>
            <span>{props.selectProps.clearButtonLabel}</span>
          </div>
        )}
      </components.MenuList>
    </>
  );
};
