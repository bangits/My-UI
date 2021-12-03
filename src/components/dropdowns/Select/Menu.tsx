import { CustomSelectProps, Scroll, SelectProps } from '@/components';
import { components } from '@my-ui/react-select';
import React from 'react';
import TreeSelect from './TreeSelect';

export const Menu: typeof components.Menu = (props) => {
  const selectProps: typeof props.selectProps &
    CustomSelectProps & {
      onChangeOriginal?: SelectProps<any, false, any>['onChange'];
      onInputChangeOriginal?: SelectProps<any, false, any>['onInputChange'];
    } = props.selectProps;

  console.log(props);

  return (
    <>
      <components.Menu {...props}>
        <div>
          <Scroll height={'28.8rem'}>
            {!selectProps.inputValue ? (
              <TreeSelect
                onChange={(value) => {
                  if (!selectProps.isMulti) {
                    selectProps.onChangeOriginal?.(value, null);
                  }
                }}
                data={selectProps.treeData}
                setInput={selectProps.onInputChangeOriginal}
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
