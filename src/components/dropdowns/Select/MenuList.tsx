import { CustomSelectProps, Scroll } from '@/components';
import { ClearIcon } from '@/icons';
import { components } from '@my-ui/react-select';
import classNames from 'classnames';
import { Children } from 'react';
import { DropdownSearch } from './Dropdown';
import styles from './Select.module.scss';

export const MenuList: typeof components.MenuList = (props) => {
  const selectProps = props.selectProps as unknown as typeof props.selectProps & CustomSelectProps;

  const arrayOfChildrens = Children.toArray(props.children);

  return (
    <>
      {selectProps.dropdown && <DropdownSearch selectProps={selectProps} />}

      <components.MenuList {...props}>
        {arrayOfChildrens.find(
          (child) => (child as { props: { value: string } }).props.value === selectProps.selectAllValue
        )}

        <Scroll height={props.isMulti ? '26rem' : '28.8rem'} className={styles.SelectScroll}>
          {arrayOfChildrens.filter(
            (child) => (child as { props: { value: string } }).props.value !== selectProps.selectAllValue
          )}
        </Scroll>

        {selectProps.clearButton && (
          <div onClick={props.clearValue} className={classNames(styles[`Select--clear-button`])}>
            <div className={classNames(styles['ClearIcon-Cell'])}>
              {selectProps.clearIcon || <ClearIcon fill='currentColor' width='1.8rem' />}
            </div>
            <span>{selectProps.clearButtonLabel}</span>
          </div>
        )}
      </components.MenuList>
    </>
  );
};
