import { CustomSelectProps, Scroll } from '@/components';
import { ClearIcon } from '@/icons';
import { components } from '@my-ui/react-select';
import classNames from 'classnames';
import { Children } from 'react';
import { DropdownSearch } from './Dropdown';
import styles from './Select.module.scss';
import { getMyUIPrefix } from '@/configs';

export const MenuList: typeof components.MenuList = (props) => {
  const selectProps: typeof props.selectProps & CustomSelectProps = props.selectProps;

  const arrayOfChildrens = Children.toArray(props.children);

  return (
    <>
      {selectProps.dropdown && <DropdownSearch selectProps={selectProps} />}

      <components.MenuList {...props}>
        {arrayOfChildrens.find(
          (child) => (child as { props: { value: string } }).props.value === selectProps.selectAllValue
        )}

        <Scroll height={props.isMulti ? '26rem' : '28.8rem'} className={styles.SelectScroll}>
          {arrayOfChildrens.filter((child) => (child as { props: { value: string } }).props.value !== '*')}
        </Scroll>

        {selectProps.clearButton && (
          <div
            onClick={props.clearValue}
            className={classNames(styles[`Select--clear-button`], `${getMyUIPrefix()}-SelectClearButton`)}>
            <div className={`${getMyUIPrefix()}-SelectClearButtonIcon`}>{selectProps.clearIcon || <ClearIcon />}</div>
            <span className={`${getMyUIPrefix()}-SelectClearButtonLabel`}>{selectProps.clearButtonLabel}</span>
          </div>
        )}
      </components.MenuList>
    </>
  );
};
