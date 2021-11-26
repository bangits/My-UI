import { typedMemo } from '@/helpers';
import React, { ReactNode, UIEvent } from 'react';
import styles from './InfiniteScrollLoop.module.scss';

export interface InfiniteScrollLoopProps {
  onScrollChange?: (event: UIEvent<HTMLDivElement, globalThis.UIEvent>) => void;
  children?: ReactNode;
  surroundingBackup?: number;
}

const InfiniteScrollLoop: React.FC<InfiniteScrollLoopProps> = ({
  surroundingBackup = 1,
  children,
  onScrollChange
}): JSX.Element => {
  const contentRef = React.useRef<HTMLDivElement | null>(null);
  const scrollRef = React.useRef<HTMLDivElement | null>(null);
  const [height, setHeight] = React.useState<number>(0);
  const [scrollY, setScrollY] = React.useState<number>();

  const backupHeight = height * surroundingBackup;

  const handleScroll = React.useCallback(
    (e: UIEvent<HTMLDivElement, globalThis.UIEvent>) => {
      if (onScrollChange) onScrollChange(e);

      if (scrollRef.current) {
        let scroll = scrollRef.current.scrollTop;

        if (scroll < scroll + 38) scroll += 38;

        if (scroll < backupHeight || scroll >= backupHeight + height) {
          scrollRef.current.scrollTop = scroll % height ? backupHeight + (scroll % height) : 0;
        }
      }
    },
    [height, onScrollChange, setScrollY]
  );

  React.useLayoutEffect(() => {
    if (contentRef.current) {
      setHeight(contentRef.current.offsetHeight);
      scrollRef.current.scrollTop = backupHeight;
    }
  });

  return (
    <div className={styles['InfiniteScrollLoop-outer']}>
      <div
        className={styles['InfiniteScrollLoop-inner']}
        ref={scrollRef}
        style={{
          height
        }}
        onScroll={handleScroll}>
        {Array(surroundingBackup)
          .fill(1)
          .map((v, i) => (
            <div key={i}>{children}</div>
          ))}
        <div ref={contentRef}>{children}</div>
        {Array(surroundingBackup)
          .fill(1)
          .map((v, i) => (
            <div key={i}>{children}</div>
          ))}
      </div>
    </div>
  );
};

export default typedMemo(InfiniteScrollLoop);
