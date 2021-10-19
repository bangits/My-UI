import ReactSelect from '@my-ui/react-select';
import { StateManagerProps } from '@my-ui/react-select/src/useStateManager';
import React, { FC } from 'react';
import resetStyles from './reset-styles';
import styles from './Select.module.scss';

const Select: FC<StateManagerProps> = ({ children, isMulti, ...selectProps }) => {
  return (
    <ReactSelect
      className={styles.Select}
      /*eslint-disable */
      //@ts-ignore ignored because we need to reset all css styles
      styles={resetStyles}
      /*eslint-enable */
      isClearable={false}
      hideSelectedOptions={false}
      classNamePrefix='react-select'
      placeholder='Select me sfasdf'
      isSearchable={false}
      menuIsOpen={true}
      /* removeSelected={false} */
      isMulti={isMulti}
      closeMenuOnSelect={isMulti ? false : true}
      controlShouldRenderValue={isMulti ? false : true}
      {...selectProps}
    />
  );
};

export default Select;
