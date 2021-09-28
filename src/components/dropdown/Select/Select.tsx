import ReactSelect from '@em/react-select';
import { StateManagerProps } from '@em/react-select/src/useStateManager';
import React, { FC } from 'react';
import resetStyles, { resetStylesProps } from './reset-styles';
import styles from './Select.module.scss';

export interface ReactSelectProps {
  selectProps?: StateManagerProps;
}


const Select: FC<ReactSelectProps> = ({ children, ...selectProps }) => (
  <ReactSelect
    className={styles.Select}
    styles={{...resetStyles} as resetStylesProps}
    isClearable={false}
    hideSelectedOptions={false}
    classNamePrefix='react-select'
    isSearchable={false}
    {...selectProps}
  />
);

export default Select;
