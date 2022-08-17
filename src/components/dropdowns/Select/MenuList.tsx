import { Button, CustomSelectProps, Scroll, SelectOptionType, Typography } from '@/components';
import { ClearIcon } from '@/icons';
import { components } from '@my-ui/react-select';
import classNames from 'classnames';
import { Children } from 'react';
import { DropdownSearch } from './Dropdown';
import styles from './Select.module.scss';

export const MenuList: typeof components.MenuList = (props) => {
  const selectProps = props.selectProps as unknown as typeof props.selectProps & CustomSelectProps;

  const {
    dropdown,
    selectAllValue,
    clearButton,
    clearIcon,
    onApplyButtonClick,
    clearButtonLabel,
    applyButton,
    applyButtonLabel,
    value,
    options,
    selectTopPart
  } = selectProps;

  const arrayOfChildrens = Children.toArray(props.children);

  return (
    <>
      {selectTopPart && (
        <Typography className={styles['Select__top-part']} variant='p4'>
          {selectTopPart}
        </Typography>
      )}

      {dropdown && <DropdownSearch selectProps={selectProps} />}

      <components.MenuList {...props}>
        {arrayOfChildrens.find((child) => (child as { props: { value: string } }).props.value === selectAllValue)}

        <Scroll height={props.isMulti ? '26rem' : '28.8rem'} className={styles.SelectScroll}>
          {arrayOfChildrens.filter((child) => (child as { props: { value: string } }).props.value !== selectAllValue)}
        </Scroll>

        {(clearButton || applyButton) && (
          <div className={styles[`Select--bottom-part`]}>
            {clearButton && (
              <div onClick={props.clearValue}>
                <span className={classNames(styles['ClearIcon-Cell'])}>
                  {clearIcon || <ClearIcon fill='currentColor' width='1.8rem' />}
                </span>
                <span>{clearButtonLabel}</span>
              </div>
            )}

            {applyButton && onApplyButtonClick && (
              <div>
                <Button
                  variant='link'
                  onClick={() => {
                    onApplyButtonClick(
                      value as unknown as SelectOptionType | SelectOptionType[],
                      options as unknown as SelectOptionType[],
                      () => selectProps.onMenuClose()
                    );
                  }}>
                  {applyButtonLabel}
                </Button>
              </div>
            )}
          </div>
        )}
      </components.MenuList>
    </>
  );
};
