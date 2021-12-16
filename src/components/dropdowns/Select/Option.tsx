import { Checkbox, CustomSelectProps } from '@/components';
import { components } from '@my-ui/react-select';
import classNames from 'classnames';
import { useCallback } from 'react';
import styles from './Select.module.scss';

export const Option: typeof components.Option = (props) => {
  const selectProps: typeof props.selectProps & CustomSelectProps = props.selectProps;

  const closeMenuOnClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      (e.target as Element).closest('.MyUI-Select').querySelector('input').blur();
      if (selectProps.isTree && !selectProps.isMulti) selectProps.onInputChange(props.label, null);
    },
    [selectProps.isTree, selectProps.isMulti, props.label]
  );
  return (
    <div
      className={classNames({
        [styles['AllOption']]: selectProps.selectAll,
        [styles['Select--custom-option']]: !selectProps?.dropdown
      })}
      onClick={props.isMulti ? undefined : closeMenuOnClick}>
      <components.Option
        {...props}
        innerProps={
          selectProps.disableSelectedOptions && props.isSelected
            ? {
                ...props.innerProps,
                onClick: (e) => {
                  if (selectProps.disableSelectedOptions && props.isSelected) {
                    e.stopPropagation();
                    e.preventDefault();
                  }
                }
              }
            : { ...props.innerProps }
        }>
        {selectProps.isMulti ? (
          <>
            <Checkbox
              checkboxContainerProps={{
                onClick: (e) => {
                  e.stopPropagation();
                  props.selectOption(props.isSelected && selectProps.disableSelectedOptions ? null : props.data);
                }
              }}
              checked={props.isSelected}
              labelComponent='div'
              disabled={props.isSelected && selectProps.disableSelectedOptions}
            />
            <label>{props.label}</label>
          </>
        ) : (
          <span>{props.label}</span>
        )}
      </components.Option>
    </div>
  );
};
