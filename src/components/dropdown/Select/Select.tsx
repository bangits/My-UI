import ReactSelect from '@em/react-select';
import { StateManagerProps } from '@em/react-select/src/useStateManager';
import React, { FC } from 'react';
import styles from './Select.module.scss';

export interface ReactSelectProps {
  selectProps?: StateManagerProps;
}

const Select: FC<ReactSelectProps> = ({ children, ...selectProps }) => (
  <ReactSelect className={styles.Select} {...selectProps} />
);

export default Select;
