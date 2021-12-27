import { CustomSelectProps, Scroll, SelectProps } from '@/components';
import { components } from '@my-ui/react-select';
import classNames from 'classnames';
import React from 'react';
import styles from './Menu.module.scss';
import TreeSelect from './TreeSelect';

export const Menu: typeof components.Menu = (props) => {
  const selectProps: typeof props.selectProps &
    CustomSelectProps & {
      onChangeOriginal?: SelectProps<any, false, any>['onChange'];
      onInputChangeOriginal?: SelectProps<any, false, any>['onInputChange'];
    } = props.selectProps;

  return (
    <>
      <components.Menu {...props}>
        <div className={classNames(styles['RootTreeSelect'], 'RootTreeSelect')}>
          <Scroll height={'28.8rem'}>
            {!selectProps.inputValue ? (
              <TreeSelect
                className={classNames(styles['RootTreeSelect__Child'], 'RootTreeSelect__Child')}
                onChange={(value) => {
                  if (!selectProps.isMulti) {
                    selectProps.onChangeOriginal?.(value, null, selectProps.options);
                  }
                }}
                data={selectProps.treeData}
                setInput={(value) => {
                  if (!selectProps.isMulti) {
                    selectProps.onInputChange?.(value, null);
                  }
                }}
              />
            ) : (
              props.children
            )}
          </Scroll>
        </div>
      </components.Menu>
    </>
  );
};
