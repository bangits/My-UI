import { Checkbox, TextInput } from '@/components';
import useOutsideClickEvent from '@/helpers/useOutsideClickEvent';
import { DropdownArrowIconDown, DropdownArrowIconUp } from '@/icons';
import { components } from '@my-ui/react-select';
import classNames from 'classnames';
import React, { useCallback, useEffect, useState } from 'react';
import styles from './Select.module.scss';

export const Option = (props) => {
  return (
    <div>
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

  const menuToggle = useCallback(() => {
    isMenuOpen ? props.selectProps.onMenuClose() : props.selectProps.onMenuOpen();
    setIsMenuOpen(!isMenuOpen);
  }, [isMenuOpen]);

  useEffect(() => {
    const subscriber = useOutsideClickEvent(props.isMulti ? '.MyUI-Select' : '.MyUI-Select-Input');

    subscriber.subscribe(() => {
      setIsMenuOpen(false);
      props.selectProps.onMenuClose();
    });

    return () => {
      subscriber.unsubscribe();
    };
  }, []);

  console.log(props);

  return (
    // @ts-ignore
    <components.Control {...props}>
      <div className={classNames(styles['Select--search'], 'MyUI-Select-Input')}>
        <TextInput
          className='MyUi-Input'
          fullWidth
          onChange={(e) => {
            props.selectProps.onInputChange(e.target.value);
          }}
          onClick={menuToggle}
          value={
            props.selectProps.inputValue
              ? props.selectProps.inputValue
              : props.selectProps?.value.length > 0
              ? props.selectProps?.value.length > 1
                ? props.options.length === props.selectProps?.value.length
                  ? props.options[0].label
                  : `${props.selectProps.inputSelectedLabel} ${props.selectProps?.value.length}`
                : props.selectProps?.value[0]?.label
              : ''
          }
          label={
            !props.isMulti
              ? props.selectProps.value
                ? (props.selectProps?.value.length > 1 ? '' : props.selectProps?.value[0]?.label) ||
                  props.selectProps?.value.label
                  ? props.selectProps?.value[0]?.label || props.selectProps?.value.label
                  : props.selectProps.inputLabel
                : props.selectProps.inputLabel
              : props.selectProps.inputLabel
          }
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuToggle = useCallback(() => {
    isMenuOpen ? props.selectProps.onMenuClose() : props.selectProps.onMenuOpen();
    setIsMenuOpen(!isMenuOpen);
  }, [isMenuOpen]);

  return (
    // @ts-ignore
    <components.Control {...props}>
      <label onClick={menuToggle}>Icon</label>
      <label> Columns</label>
    </components.Control>
  );
};
