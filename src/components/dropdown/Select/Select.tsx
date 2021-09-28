import ReactSelect from '@em/react-select';
import { StateManagerProps } from '@em/react-select/src/useStateManager';
import React, { FC } from 'react';
import resetStyles from './reset-styles';
import styles from './Select.module.scss';

const Select: FC<StateManagerProps> = ({ children, isMulti, ...selectProps }) => (
  <ReactSelect
    className={styles.Select}
    styles={resetStyles}
    isClearable={false}
    hideSelectedOptions={false}
    classNamePrefix='react-select'
    isSearchable={false}
    /* removeSelected={false} */
    isMulti={isMulti}
    closeMenuOnSelect={isMulti ? false : true}
    controlShouldRenderValue={isMulti ? false : true}
    {...selectProps}
  />
);

export default Select;
