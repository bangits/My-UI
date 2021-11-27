import { getMyUIPrefix } from '@/configs';
import { IComponent, UIColors } from '@/types';
import classNames from 'classnames';
import React, { FC, ReactNode, useCallback, useEffect, useState } from 'react';
import styles from './CheckboxCard.module.scss';

export interface CheckboxCard extends IComponent {
  icon?: ReactNode;
  label?: string;
  color?: UIColors;
  disabled?: boolean;
  defaultSelected?: boolean;
  onChange?: (value: boolean) => void;
}

const CheckboxCard: FC<CheckboxCard> = ({ color, label, icon, disabled, defaultSelected = false, onChange }) => {
  const [selected, setSelected] = useState<boolean>(defaultSelected);

  useEffect(() => {
    if (onChange) onChange(selected);
  }, [selected]);

  const onClickHandler = useCallback(() => {
    setSelected(!selected);
  }, [selected, setSelected]);

  return (
    <>
      <div
        onClick={!disabled ? onClickHandler : null}
        className={classNames(
          styles['CheckboxCardList'],
          styles[`CheckboxCardList--${color}`],
          `${getMyUIPrefix()}-CheckboxCardList--${color}`,
          `${getMyUIPrefix()}-CheckboxCardList`
        )}>
        <div
          className={classNames(styles['CheckboxCard'], `${getMyUIPrefix()}-CheckboxCard`, {
            [styles[`CheckboxCard--disable`]]: disabled,
            [styles['CheckboxCard--selected']]: selected,
            [`${getMyUIPrefix()}-CheckboxCard--selected`]: selected
          })}>
          <div
            className={classNames(
              styles['CheckboxCard__ElementsGroup'],
              `${getMyUIPrefix()}-CheckboxCard__ElementsGroup`
            )}>
            {icon}
            <span className={classNames(styles['CheckboxCard__Label'], `${getMyUIPrefix()}-CheckboxCard__Label`)}>
              {label}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckboxCard;
