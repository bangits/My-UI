import { Badge } from '@/components';
import { IComponent } from '@/types';
import classNames from 'classnames';
import React, { FC, useCallback, useState } from 'react';
import styles from './SubTab.module.scss';

export interface SubTabProps extends IComponent {
  options?: {
    title: string;
    value: number;
    badgeCount?: number;
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
            <div className={styles.BadgeWrapper}>
              {option.badgeCount && <Badge badgeSize='ss' quantity={option.badgeCount} />}
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
