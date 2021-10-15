import { Checkbox, TextInput } from '@/components';
import { DropdownArrowIconDown, DropdownArrowIconUp } from '@/icons';
import { components } from '@my-ui/react-select';
import classNames from 'classnames';
import React, { useCallback, useState } from 'react';
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
  const [hoverValue, setHoverValue] = useState('');

  const menuToggle = useCallback(() => {
    isMenuOpen ? props.selectProps.onMenuClose() : props.selectProps.onMenuOpen();
    setIsMenuOpen(!isMenuOpen);
  }, [isMenuOpen]);

  return (
    // @ts-ignore
    <components.Control {...props}>
      <div className={classNames(styles['Select--search'], 'MyUI-Select-Input')}>
        <TextInput
          className='MyUi-Input'
          color={props.selectProps.color !== 'primary' && props.selectProps.color}
          explanation={props.selectProps.explanation}
          fullWidth
          onChange={(e) => {
            props.selectProps.onInputChange(e.target.value);
          }}
          onBlur={() => {
            setIsMenuOpen(false);
            props.selectProps.onMenuClose();
          }}
          onClick={menuToggle}
          value={
            isMenuOpen
              ? props.selectProps.inputValue
              : props.isMulti
              ? props.selectProps.inputValue
                ? props.selectProps.inputValue
                : props.selectProps?.value.length > 0
                ? props.selectProps?.value.length > 1
                  ? props.options.length === props.selectProps?.value.length
                    ? props.options[0].label
                    : `${props.selectProps.inputSelectedLabel} ${props.selectProps?.value.length}`
                  : props.selectProps?.value[0]?.label
                : ''
              : props.selectProps?.value?.label
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
