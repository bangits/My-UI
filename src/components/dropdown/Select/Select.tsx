import { Checkbox } from '@/components';
import ReactSelect, { components } from '@em/react-select';
import { StateManagerProps } from '@em/react-select/src/useStateManager';
import React, { FC } from 'react';
import styles from './Select.module.scss';

export interface ReactSelectProps {
  selectProps?: StateManagerProps;
}

const Option = (props) => {
  return (
    <div>
      <components.Option {...props}>
        <Checkbox checked={props.isSelected} onChange={() => null} /> <label>{props.label}</label>
      </components.Option>
    </div>
  );
};

const ValueContainer = ({ children, ...props }) => {
  return (
    <components.ValueContainer {...props}>
      <components.Placeholder {...props} isFocused={props.isFocused}>
        {props.selectProps.placeholder}
      </components.Placeholder>
      {React.Children.map(children, (child) =>
        (child && child.type === components.Input) || components.Placeholder ? child : null
      )}
    </components.ValueContainer>
  );
};

const Select: FC<ReactSelectProps> = ({ children, ...selectProps }) => (
  <ReactSelect
    className={styles.Select}
    styles={{
      clearIndicator: () => {},
      container: () => {},
      control: () => {},
      dropdownIndicator: () => {},
      group: () => {},
      groupHeading: () => {},
      indicatorsContainer: () => {},
      indicatorSeparator: () => {},
      input: () => {},
      loadingIndicator: () => {},
      loadingMessage: () => {},
      menu: () => {},
      menuList: () => {},
      menuPortal: () => {},
      multiValue: () => {},
      multiValueLabel: () => {},
      multiValueRemove: () => {},
      noOptionsMessage: () => {},
      option: () => {},
      placeholder: () => {},
      singleValue: () => {},
      valueContainer: () => {}
    }}
    isClearable={false}
    hideSelectedOptions={false}
    closeMenuOnSelect={false}
    classNamePrefix='react-select'
    components={{
      Option
      // ValueContainer
    }}
    isSearchable={false}
    {...selectProps}
  />
);

export default Select;
