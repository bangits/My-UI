import React, { FC, useState, useCallback } from 'react';
import styles from './SubTab.module.scss';
import classNames from 'classnames';
import { IComponent } from '@/types';
import { Typography } from '@/my-ui-core';

export interface SubTabProps extends IComponent {
  options?: {
    title: string;
    value: number;
    count: number;
  }[];
  className?: string;
  defaultValue?: number;
  value?: number;
  onChange?: (value: number) => void;
}

const SubTab: FC<SubTabProps> = ({ className, onChange, defaultValue, value, options }) => {
  const [active, setActive] = useState<number>(defaultValue | value);

  const onActiveChange = useCallback(
    (value) => {
      setActive(value);
      onChange(value);
    },
    [active]
  );
  return (
    <div className={classNames(styles.SubTab, className)}>
      {options &&
        options.map((option) => (
          <div className={styles.SubTabWrapper}>
            {option.count !== 0 && (
              <div className={styles.SubTabCount}>
                {option.count > 0 && option.count <= 999 ? option.count : '999+'}
              </div>
            )}
            <button
              key={option.value}
              onClick={() => (!value ? onActiveChange(option.value) : null)}
              className={classNames(styles.SubTabButton, {
                [styles.Active]: option.value === value || option.value === active
              })}>
              {option.title}
            </button>
          </div>
        ))}
    </div>
  );
};

export default SubTab;
