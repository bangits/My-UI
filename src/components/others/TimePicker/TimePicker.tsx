import { getRootFontSize, useLongPress, useStyles } from '@/helpers';
import { ArrowIcon } from '@/icons';
import classNames from 'classnames';
import React, { FC, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import styles from './TimePicker.module.scss';

export interface TimePickerProps {
  elementsHeight?: number;
  numbersCount?: number;
  onChange?(selectedNumber: number): void;
}

const SCROLL_COPY_COUNT = 8;
const SCROLL_CENTER_COUNT = 5;

const TimePicker: FC<TimePickerProps> = ({ elementsHeight = 38, numbersCount = 24, onChange }) => {
  const scrollElementRef = useRef<HTMLDivElement>(null);

  const [currentScroll, setCurrentScroll] = useState(elementsHeight * SCROLL_CENTER_COUNT);

  const rootFontSize = getRootFontSize();

  const elementRemHeight = useMemo(() => `${elementsHeight / rootFontSize}rem`, [elementsHeight, rootFontSize]);

  const getSelectedTime = useCallback(
    (currentScroll: number) => {
      const currentValue = currentScroll / elementsHeight - 5;

      return Math.round(
        currentValue < 1
          ? numbersCount + currentValue
          : currentValue > numbersCount
          ? currentValue - numbersCount
          : currentValue
      );
    },
    [elementsHeight, numbersCount]
  );

  const onScrollCapture = useCallback(
    (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
      const scroller = e.target as HTMLDivElement;

      const height = scroller.clientHeight;
      const MAX_SIZE = scroller.scrollHeight - height;

      const scrollTop = Math.ceil(scroller.scrollTop);

      if (scrollTop === 0) {
        setCurrentScroll(elementsHeight * numbersCount);

        scroller.scrollTop = elementsHeight * numbersCount;

        onChange?.(getSelectedTime(elementsHeight * numbersCount));

        return;
      }

      if (currentScroll === scrollTop) return;

      const updatedScroll = scrollTop > currentScroll ? currentScroll + elementsHeight : currentScroll - elementsHeight;

      if (updatedScroll >= MAX_SIZE) {
        setCurrentScroll(elementsHeight * SCROLL_COPY_COUNT + 1);

        scroller.scrollTop = elementsHeight * SCROLL_COPY_COUNT + 1;

        onChange?.(getSelectedTime(elementsHeight * SCROLL_COPY_COUNT + 1));

        return;
      }

      setCurrentScroll(updatedScroll);

      scroller.scrollTop = updatedScroll;

      onChange?.(getSelectedTime(updatedScroll));
    },
    [elementsHeight, numbersCount, currentScroll, getSelectedTime, onChange]
  );

  const indicatorClassnames = useStyles(
    {
      timeElementStyles: {
        height: (data) => data.elementRemHeight
      }
    },
    { elementRemHeight }
  );

  const numbers = useMemo(
    () => [
      ...Array(SCROLL_COPY_COUNT)
        .fill(null)
        .map((_, i) => numbersCount - i)
        .reverse(),
      ...Array(numbersCount)
        .fill(null)
        .map((_, i) => i + 1),
      ...Array(SCROLL_COPY_COUNT - 1)
        .fill(null)
        .map((_, i) => i + 1)
    ],
    [numbersCount]
  );

  const selectedTime = useMemo(() => getSelectedTime(currentScroll), [getSelectedTime, currentScroll]);

  const prevButtonEvents = useLongPress(
    () => (scrollElementRef.current.scrollTop = currentScroll - elementsHeight),
    100
  );
  const nextButtonEvents = useLongPress(
    () => (scrollElementRef.current.scrollTop = currentScroll + elementsHeight),
    100
  );

  useEffect(() => {
    scrollElementRef.current.scrollTop = elementsHeight * SCROLL_CENTER_COUNT;
  }, []);

  return (
    <div className={styles.TimePickerLoopWrapper}>
      <div className={styles.TimePickerLoopContent} onScrollCapture={onScrollCapture} ref={scrollElementRef}>
        <button
          className={classNames(styles.ScrollButton, styles.ScrollButtonPrev, indicatorClassnames.timeElementStyles)}
          {...prevButtonEvents}>
          <ArrowIcon />
        </button>
        <div
          className={classNames(
            styles.ScrollButtonBg,
            styles.PrevScrollButtonBg,
            indicatorClassnames.timeElementStyles
          )}
        />

        <div className={indicatorClassnames.timeElementStyles} />
        <div className={classNames(styles.SelectedTimeBg, indicatorClassnames.timeElementStyles)} />

        {numbers.map((num, index) => (
          <span
            className={classNames(styles.TimePickerNumber, indicatorClassnames.timeElementStyles, {
              [styles.TimePickerNumberSelected]: num === selectedTime
            })}
            key={index}>
            {num}
          </span>
        ))}

        <div
          className={classNames(
            styles.ScrollButtonBg,
            styles.NextScrollButtonBg,
            indicatorClassnames.timeElementStyles
          )}
        />
        <button
          className={classNames(styles.ScrollButton, styles.ScrollButtonNext, indicatorClassnames.timeElementStyles)}
          onClick={() => (scrollElementRef.current.scrollTop = currentScroll + elementsHeight)}
          {...nextButtonEvents}>
          <ArrowIcon />
        </button>
      </div>
    </div>
  );
};

export default TimePicker;
