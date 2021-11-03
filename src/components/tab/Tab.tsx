import { useStyles } from '@/helpers';
import { Typography } from '@/my-ui-core';
import classNames from 'classnames';
import React, { FC, useCallback, useMemo, useState } from 'react';
import styles from './Tab.module.scss';
export interface TabProps {
  options?: {
    title: string;
    value: number;
  }[];
  value?: number;
  defaultValue?: number;
  onChange?: (value: number) => void;
}

const Tab: FC<TabProps> = ({ options, value, defaultValue, onChange }) => {
  const [active, setActive] = useState<number>(defaultValue | value);

  const onActiveChange = useCallback(
    (value) => {
      setActive(value);
      onChange(value);
    },
    [active]
  );

  const activeIndex = useMemo(() => options.findIndex((o) => o.value === active), [active]);

  const indicatorClassnames = useStyles(
    {
      tabActiveIndicator: {
        width: `${100 / options.length}%`,
        left: (data) => `calc(${(data.activeIndex * 100) / options.length}%)`
      },
      firstElement: {
        marginLeft: '.6rem'
      },
      lastElement: {
        left: (data) => `calc(${(data.activeIndex * 100) / options.length}% - .6rem)`
      }
    },
    { activeIndex }
  );

  return (
    <div className={styles.Tab}>
      <div className={styles.TabContent}>
        {options &&
          options.map((option) => (
            <button
              key={option.value}
              onClick={() => (!value ? onActiveChange(option.value) : null)}
              style={{ width: `${100 / options.length}%` }}
              className={classNames(styles.TabButton, {
                [styles.Active]: option.value === value || option.value === active
              })}>
              <Typography component='span' variant='p4' className={styles.TabButtonLabel}>
                {option.title}
              </Typography>
            </button>
          ))}
      </div>
      <span
        className={classNames(styles.TabButtonBg, indicatorClassnames.tabActiveIndicator, {
          [indicatorClassnames.firstElement]: activeIndex === 0,
          [indicatorClassnames.lastElement]: activeIndex === options.length - 1
        })}></span>
    </div>
  );
};

export default Tab;
