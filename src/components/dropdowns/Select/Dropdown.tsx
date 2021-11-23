import { CustomSelectProps } from '@/components';
import { useOutsideClickWithRef } from '@/helpers';
import { LoopIcon, SettingIcon } from '@/icons';
import { components, InputActionMeta } from '@my-ui/react-select';
import classNames from 'classnames';
import React, { FC, useCallback, useRef } from 'react';
import styles from './Select.module.scss';
import { getMyUIPrefix } from '@/configs';

export const DropdownIcon: typeof components.Control = (props) => {
  const wrapperRef = useRef(null);

  useOutsideClickWithRef(wrapperRef, () => props.selectProps.onMenuClose());

  const selectProps: typeof props.selectProps & CustomSelectProps = props.selectProps;

  const menuToggle = useCallback(() => {
    props.selectProps.menuIsOpen ? props.selectProps.onMenuClose() : props.selectProps.onMenuOpen();
  }, [props.selectProps.menuIsOpen]);

  return (
    <components.Control {...props}>
      <div
        ref={wrapperRef}
        onClick={menuToggle}
        className={classNames(styles['Select--dropdown-control'], `${getMyUIPrefix()}-SelectDropdownControl`, {
          [styles[`Select--dropdown-control--${selectProps.color}`]]: selectProps.color
        })}>
        <span
          className={classNames(
            styles['Select--dropdown-control-icon'],
            `${getMyUIPrefix()}-SelectDropdownControlIcon`
          )}>
          {selectProps.dropdownIcon || <SettingIcon />}
        </span>
        <span
          className={classNames(
            styles['Select--dropdown-control-label'],
            `${getMyUIPrefix()}-SelectDropdownControlLabel`
          )}>
          {selectProps.dropdownLabel}
        </span>
      </div>
    </components.Control>
  );
};

export const DropdownSearch: FC<{
  selectProps: CustomSelectProps & { onInputChange: (value: string, actionMeta: InputActionMeta) => void };
}> = ({ selectProps }) => {
  const inputMouseDownHandler = useCallback((e) => e.stopPropagation(), []);

  const inputChangeHandler = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      selectProps.onInputChange(e.target.value, null);
    },
    [selectProps]
  );

  return (
    <>
      <div className={classNames(styles['Select--dropdown--input'], `${getMyUIPrefix()}-SelectDropdownInput`)}>
        <input
          type='text'
          onMouseDown={inputMouseDownHandler}
          placeholder={selectProps.dropdownSearchPlaceholder}
          onChange={inputChangeHandler}
          className={`${getMyUIPrefix()}-SelectDropdownInputText`}
        />
        <span className={`${getMyUIPrefix()}-SelectIcon`}>
          <LoopIcon />
        </span>
      </div>
    </>
  );
};
