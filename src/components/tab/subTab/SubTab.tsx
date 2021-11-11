import React, { FC, useState, useCallback } from 'react';
import styles from './SubTab.module.scss';
import classNames from 'classnames';
import { IComponent } from '@/types';
import { Typography } from '@/my-ui-core';
import { Badge } from '@/components';

export interface SubTabProps extends IComponent {
  options?: {
    title: string;
    value: number;
    badgeCount: number;
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
    <div
      className={classNames(styles.SubTab, className)}
      style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
      {options &&
        options.map((option) => (
          <div className={styles.SubTabWrapper}>
            <div className={styles.BadgeWrapper}>
              {option.badgeCount !== 0 && (
                <Badge
                  badgeSize='ss'
                  quantity={option.badgeCount > 0 && option.badgeCount <= 999 ? option.badgeCount : +'999+'}
                  badgeStyle={styles.s}
                />
              )}
            </div>
            <button
              key={option.value}
              onClick={() => (!value ? onActiveChange(option.value) : null)}
              className={classNames(styles.SubTabButton, {
                [styles.Selected]: option.value === value || option.value === active
              })}>
              {option.title}
            </button>
          </div>
        ))}
    </div>
  );
};

export default SubTab;
