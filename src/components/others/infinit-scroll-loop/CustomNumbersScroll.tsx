import { typedMemo } from '@/helpers';
import React, { FC, useCallback, useState } from 'react';
import InfiniteScrollLoop from './InfiniteScrollLoop';

export interface CustomNumbersScrollProps {
  quantity: number;
  adjustPlace: number;
  onValueChange?: (value: number) => void;
  surroundingBackup?: number;
}

const CustomNumbersScroll: FC<CustomNumbersScrollProps> = ({
  quantity,
  adjustPlace,
  onValueChange,
  surroundingBackup
}) => {
  const [value, setValue] = useState<any>();

  const onScrollHandler = useCallback((e) => {
    if (onValueChange) {
      onValueChange(Math.round(e.target.scrollTop / 38) - adjustPlace);
    }
  }, []);

  return (
    <div
      style={{
        border: '1px solid #8EA6C1',
        borderRadius: 16,
        width: 84,
        height: 293,
        overflowY: 'hidden'
      }}>
      <InfiniteScrollLoop surroundingBackup={surroundingBackup} onScrollChange={onScrollHandler}>
        {Array(quantity)
          .fill(null)
          .map((h, i) => (
            <span
              key={i}
              style={{
                color: i === 4 ? 'red' : '',
                fontSize: 18,
                height: 38,
                width: '100%',
                display: 'block',
                textAlign: 'center'
              }}>
              {i + 1}
            </span>
          ))}
      </InfiniteScrollLoop>
    </div>
  );
};

export default typedMemo(CustomNumbersScroll);
