import { Checkbox, TextInput } from '@/components';
import { components } from '@my-ui/react-select';
import React, { useCallback, useState } from 'react';

export const Option = (props) => {
  return (
    <div>
      <components.Option {...props}>
        <Checkbox checked={props.isSelected} onChange={() => null} /> <label>{props.label}</label>
      </components.Option>
    </div>
  );
};

export const ValueContainer = ({ children, ...props }) => {
  return (
    // @ts-ignore
    <components.ValueContainer {...props}>
      {/* @ts-ignore */}
      <components.Placeholder {...props} isFocused={props.isFocused}>
        {props.selectProps.placeholder}
      </components.Placeholder>
      {React.Children.map(children, (child) =>
        (child && child.type === components.Input) || components.Placeholder ? child : null
      )}
      {/* <TextInput label='Select...' /> */}
    </components.ValueContainer>
  );
};

export const Control1 = ({ ...propsX }) => {
  console.log(propsX);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuToggle = useCallback(() => {
    isMenuOpen ? propsX.selectProps.onMenuClose() : propsX.selectProps.onMenuOpen();
    setIsMenuOpen(!isMenuOpen);
  }, [isMenuOpen]);

  return (
    // @ts-ignore
    <components.Control {...propsX}>
      {' '}
      <TextInput
        style={{ width: '23.8rem', height: '3.8rem' }}
        onChange={(e) => {
          propsX.selectProps.onInputChange(e.target.value);
        }}
        value={propsX.selectProps.inputValue}
        label={
          propsX.selectProps.value
            ? propsX.selectProps?.value[0]?.label
              ? propsX.selectProps?.value[0]?.label
              : 'Select...'
            : 'Select...'
        }
        endIcon={<div onClick={menuToggle}>{isMenuOpen ? 'X' : 'Y'}</div>}
        onFocus={() => {
          propsX.selectProps.onMenuOpen(), propsX.selectProps.menuIsOpen ? null : setIsMenuOpen(!isMenuOpen);
        }}
      />
    </components.Control>
  );
};
