import { CustomSelectProps, SelectOptionType, TextInput } from '@/components';
import { useOutsideClickWithRef } from '@/helpers';
import { DropdownArrowIconDown, DropdownArrowIconUp } from '@/icons';
import { components } from '@my-ui/react-select';
import classNames from 'classnames';
import { ChangeEvent, useCallback, useEffect, useRef, useState } from 'react';
import styles from './Select.module.scss';

export const SearchControl: typeof components.Control = (props) => {
  const selectProps = props.selectProps as unknown as typeof props.selectProps & CustomSelectProps;

  // @ts-expect-error ignoring typescript for typecast
  const currentValue = selectProps?.value as SelectOptionType | SelectOptionType[];

  const [searchValue, setSearchValue] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuToggle = useCallback(() => {
    if (selectProps.isDisabled) return;

    if (!isMenuOpen) {
      selectProps.onMenuOpen();

      setIsMenuOpen(!isMenuOpen);
    }
  }, [isMenuOpen, selectProps]);

  const onInputBlur = useCallback(
    (e) => {
      setIsMenuOpen(false);
      selectProps.onMenuClose();

      if (!selectProps.isTree) setSearchValue('');

      if (selectProps.onBlur) selectProps.onBlur(e);

      if (currentValue && !Array.isArray(currentValue)) setSearchValue(currentValue.label);
    },
    [currentValue]
  );

  const onSearchValueChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      if (!selectProps.isSearchable) return;

      setSearchValue(e.target.value);
    },
    [currentValue, selectProps.isSearchable]
  );

  useEffect(() => {
    setTimeout(() => {
      if (currentValue && !Array.isArray(currentValue)) setSearchValue(currentValue?.label);
    });
  }, [currentValue]);

  useEffect(() => {
    setTimeout(() => {
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

      if (!isMenuOpen && (!currentValue || (isMulti && !currentValue.length))) setSearchValue('');
    });
  }, [currentValue, isMenuOpen, selectProps.isTree]);

  useEffect(() => {
    if (!props.selectProps.inputValue && searchValue && !currentValue) setSearchValue('');
  }, [props.selectProps.inputValue]);

  useEffect(() => {
    selectProps.onInputChange(searchValue, null);
  }, [searchValue, selectProps.inputValue]);

  useEffect(() => {
    setSearchValue('');
  }, [Array.isArray(currentValue)]);

  useEffect(() => {
    if (selectProps.menuIsOpen) setSearchValue('');
  }, [selectProps.menuIsOpen]);

  const wrapperRef = useRef(null);

  useOutsideClickWithRef(wrapperRef, () => props.selectProps.onMenuClose());

  return (
    <div>
      {/* // <components.Control {...props}> */}
      {selectProps.renderInput ? (
        <div onClick={selectProps.onMenuOpen} ref={wrapperRef}>
          {selectProps.renderInput({
            // @ts-expect-error ignoring typescript for typecast
            value: selectProps.value,
            isMenuOpen: props.selectProps.menuIsOpen,
            searchValue,
            onSearchValueChange,
            onInputChange: (newValue) =>
              props.selectProps.onInputChange(newValue, {
                action: 'input-change'
              }),
            onInputBlur
          })}
        </div>
      ) : (
        <div className={classNames(styles['Select--search'], 'MyUI-Select-Input')}>
          <TextInput
            disabled={selectProps.isDisabled}
            fullWidth={selectProps.fullWidth}
            color={selectProps.color !== 'default' ? selectProps.color : undefined}
            explanation={selectProps.explanation}
            maxLength={selectProps.maxLength}
            onChange={onSearchValueChange}
            onBlur={onInputBlur}
            onClick={menuToggle}
            value={selectProps.isTree ? selectProps.inputValue : searchValue}
            label={selectProps.inputLabel}
            showExplanationAsTooltip={selectProps.showExplanationAsTooltip}
            borderRadius={selectProps.borderRadius}
            containerMinLength={selectProps.containerMinLength}
            className='MyUI-SelectInput'
            endIcon={
              <div className={classNames(styles['Select--icon-container'])}>
                {props.selectProps.menuIsOpen ? (
                  <DropdownArrowIconUp
                    className={classNames(
                      styles['DropdownArrow'],
                      styles['DropdownArrow--IconUp'],
                      'DropdownArrow',
                      'DropdownArrow--IconUp'
                    )}
                    width='1.2rem'
                    onClick={() => {
                      if (selectProps.isDisabled) return;

                      props.selectProps.onMenuClose();
                    }}
                  />
                ) : (
                  <DropdownArrowIconDown
                    className={classNames(
                      styles['DropdownArrow'],
                      styles['DropdownArrow--IconDown'],
                      'DropdownArrow',
                      'DropdownArrow--IconDown'
                    )}
                    width='1.2rem'
                    onClick={() => {
                      if (selectProps.isDisabled) return;

                      props.selectProps.onMenuOpen();
                    }}
                  />
                )}
              </div>
            }
          />
        </div>
      )}
      {/* </components.Control> */}
    </div>
  );
};
