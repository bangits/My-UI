import { CustomSelectProps } from '@/components';
import { ClearIcon } from '@/icons';
import { components } from '@my-ui/react-select';
import classNames from 'classnames';
import { DropdownSearch } from './Dropdown';
import styles from './Select.module.scss';

export const MenuList: typeof components.MenuList = (props) => {
  const selectProps: typeof props.selectProps & CustomSelectProps = props.selectProps;

  return (
    <>
      {selectProps.dropdown && <DropdownSearch selectProps={selectProps} />}

      <components.MenuList {...props}>
        {props.children}

        {selectProps.clearButton && (
          <div onClick={props.clearValue} className={classNames(styles[`Select--clear-button`])}>
            <div>{selectProps.clearIcon || <ClearIcon />}</div>
            <span>{selectProps.clearButtonLabel}</span>
          </div>
        )}
      </components.MenuList>
    </>
  );
};
