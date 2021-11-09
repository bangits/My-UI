import { CustomSelectProps, Scroll } from '@/components';
import { ClearIcon } from '@/icons';
import { components } from '@my-ui/react-select';
import classNames from 'classnames';
import { Children } from 'react';
import { DropdownSearch } from './Dropdown';
import styles from './Select.module.scss';

export const MenuList: typeof components.MenuList = (props) => {
  const selectProps: typeof props.selectProps & CustomSelectProps = props.selectProps;

  console.log(props.children);

  const arrayOfChildrens = Children.toArray(props.children);

  return (
    <>
      {selectProps.dropdown && <DropdownSearch selectProps={selectProps} />}

      <components.MenuList {...props}>
        {arrayOfChildrens.find((child) => child.props.value === '*')}

        <Scroll height={'25rem'} className={styles.SelectScroll}>
          {arrayOfChildrens.filter((child) => child.props.value !== '*')}
        </Scroll>

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
