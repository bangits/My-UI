import { Checkbox, CustomSelectProps } from '@/components';
import { components } from '@my-ui/react-select';
import classNames from 'classnames';
import { useCallback } from 'react';
import styles from './Select.module.scss';

export const Option: typeof components.Option = (props) => {
  const selectProps: typeof props.selectProps & CustomSelectProps = props.selectProps;

  const closeMenuOnClick = useCallback((e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    (e.target as Element).closest('.MyUI-Select').querySelector('input').blur();
  }, []);

  return (
    <div
      className={classNames({
        [styles['AllOption']]: selectProps.selectAll,
        [styles['Select--custom-option']]: !selectProps?.dropdown
      })}
      onClick={props.isMulti ? undefined : closeMenuOnClick}>
      <components.Option {...props}>
        {selectProps.isMulti ? (
          <>
            <Checkbox
              checkboxContainerProps={{
                onClick: (e) => {
                  e.stopPropagation();
                  props.selectOption(props.data);
                }
              }}
              checked={props.isSelected}
              labelComponent='div'
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
