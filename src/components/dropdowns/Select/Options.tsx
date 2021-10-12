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
    console.dir(e.target.closest('.MyUI-Select').querySelector('input'));

    e.target.closest('.MyUI-Select').querySelector('input');
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
    const subscriber = useOutsideClickEvent('.MyUI-Select-Input');

    subscriber.subscribe(() => {
      setIsMenuOpen(false);
      props.selectProps.onMenuClose();
    });

    return () => {
      subscriber.unsubscribe();
    };
  }, []);

  return (
    // @ts-ignore
    <components.Control {...props}>
      <div className={classNames(styles['Select--search'], 'MyUI-Select-Input')}>
        <TextInput
          fullWidth
          onChange={(e) => {
            props.selectProps.onInputChange(e.target.value);
          }}
          onClick={menuToggle}
          value={props.selectProps.inputValue}
          label={
            props.selectProps.value
              ? props.selectProps?.value[0]?.label || props.selectProps?.value.label
                ? props.selectProps?.value[0]?.label || props.selectProps?.value.label
                : 'Select...'
              : 'Select...'
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
