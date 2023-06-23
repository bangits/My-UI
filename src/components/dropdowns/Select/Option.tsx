import { Checkbox, CustomSelectProps, SelectOptionType } from '@/components';
import { components } from '@my-ui/react-select';
import classNames from 'classnames';
import { useCallback } from 'react';
import styles from './Select.module.scss';

export const Option: typeof components.Option = (props) => {
  const selectProps = props.selectProps as unknown as typeof props.selectProps & CustomSelectProps;

  const closeMenuOnClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      (e.target as Element).closest('.MyUI-Select').querySelector('input').blur();

      if (selectProps.isTree && !selectProps.isMulti) selectProps.onInputChange(props.label, null);
    },
    [selectProps.isTree, selectProps.isMulti, props.label]
  );

  const option = props.data as unknown as SelectOptionType;

  const isDefaultOption = selectProps.defaultOption?.value === option.value;

  return (
    <div
      className={classNames({
        [styles['AllOption']]: selectProps.selectAll,
        [styles['Select--custom-option']]: !selectProps?.dropdown,
        [styles['Select--option-big']]: selectProps?.optionVariant == 'big'
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
                  if (props.isSelected && isDefaultOption) selectProps.onDefaultOptionChange(null);

                  e.stopPropagation();

                  props.selectOption(props.isSelected && selectProps.disableSelectedOptions ? null : props.data);
                }
              }}
              checked={props.isSelected}
              labelComponent='div'
              disabled={props.isSelected && selectProps.disableSelectedOptions}
            />
            <label
              {...(selectProps?.optionVariant === 'big' ? { style: { height: '30px', display: 'flex' } } : {})}
              onClick={() => {
                if (props.isSelected && isDefaultOption) selectProps.onDefaultOptionChange(null);
              }}>
              {props.label} {isDefaultOption && selectProps.defaultOptionLabel}
            </label>

            {selectProps.showSetAsDefaultButton && option.value !== selectProps.selectAllValue && !isDefaultOption && (
              <button
                type='button'
                // Don't remove SetAsDefaultButton string className
                className={classNames(styles.SetAsDefaultButton, 'SetAsDefaultButton')}
                onClick={(e) => {
                  if (props.isSelected) e.stopPropagation();

                  selectProps.onDefaultOptionChange(option);
                }}>
                {selectProps.setAsDefaultButtonLabel}
              </button>
            )}
          </>
        ) : (
          <span {...(selectProps?.optionVariant === 'big' ? { style: { height: '30px', display: 'flex' } } : {})}>
            {props.label}
          </span>
        )}
      </components.Option>
    </div>
  );
};
