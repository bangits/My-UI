import { typedMemo } from '@/helpers';
import { IComponent } from '@/types';
import classNames from 'classnames';
import React, { FC, useCallback, useState } from 'react';
import InfiniteScrollLoop from './InfiniteScrollLoop';
import styles from './InfiniteScrollLoop.module.scss';

export interface CustomNumbersScrollProps extends IComponent {
  quantity: number;
  adjustPlace: number;
  onValueChange?: (value: number) => void;
  surroundingBackup?: number;
}

const CustomNumbersScroll: FC<CustomNumbersScrollProps> = ({
  quantity,
  adjustPlace,
  onValueChange,
  surroundingBackup,
  className
}) => {
  const [value, setValue] = useState<any>();

  const onScrollHandler = useCallback((e) => {
    if (onValueChange) {
      onValueChange(Math.round(e.target.scrollTop / 38) - adjustPlace);
    }
  }, []);

  return (
    <div className={classNames(styles.InfiniteScrollLoopWrapper, className)}>
      <InfiniteScrollLoop surroundingBackup={surroundingBackup} onScrollChange={onScrollHandler}>
        {Array(quantity)
          .fill(null)
          .map((h, i) => (
            <span
              className={styles.InfiniteNumberContainer}
              key={i}
              style={{
                color: i === 4 ? 'red' : ''
              }}>
              {i + 1}
            </span>
          ))}
      </InfiniteScrollLoop>
    </div>
  );
};

export default typedMemo(CustomNumbersScroll);
