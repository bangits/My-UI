import { getRootFontSize, useLongPress, useStyles } from '@/helpers';
import { ArrowIcon } from '@/icons';
import classNames from 'classnames';
import React, { FC, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import styles from './TimePicker.module.scss';

export interface TimePickerProps {
  elementsHeight?: number;
  numbersCount?: number;
  defaultValue?: number;
  maxValue?: number;
  minValue?: number;
  onChange?(selectedNumber: number): void;
}

const SCROLL_COPY_COUNT = 8;
const SCROLL_CENTER_COUNT = 5;

const TimePicker: FC<TimePickerProps> = ({
  elementsHeight = 38,
  numbersCount = 24,
  onChange,
  defaultValue,
  maxValue,
  minValue
}) => {
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

      if (
        (maxValue && getSelectedTime(updatedScroll) > maxValue) ||
        (minValue && getSelectedTime(updatedScroll) < minValue)
      )
        return (scroller.scrollTop = currentScroll);

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
    [elementsHeight, numbersCount, currentScroll, getSelectedTime, onChange, maxValue, minValue]
  );

  const indicatorClassnames = useStyles(
    {
      timeElementStyles: {
        height: (data) => data.elementsHeight
      }
    },
    { elementsHeight }
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
    setTimeout(() => {
      if (minValue && defaultValue && defaultValue < minValue) {
        setCurrentScroll((minValue + SCROLL_CENTER_COUNT) * elementsHeight);

        scrollElementRef.current.scrollTop = (minValue + SCROLL_CENTER_COUNT) * elementsHeight;

        onChange?.(getSelectedTime((minValue + SCROLL_CENTER_COUNT) * elementsHeight));

        return;
      }

      if (defaultValue) {
        setCurrentScroll((defaultValue + SCROLL_CENTER_COUNT) * elementsHeight);

        scrollElementRef.current.scrollTop = (defaultValue + SCROLL_CENTER_COUNT) * elementsHeight;

        onChange?.(getSelectedTime((defaultValue + SCROLL_CENTER_COUNT) * elementsHeight));
      } else scrollElementRef.current.scrollTop = elementsHeight * SCROLL_CENTER_COUNT;
    });
  }, []);

  useEffect(() => {
    if (maxValue && selectedTime > maxValue) {
      setCurrentScroll(elementsHeight * (SCROLL_CENTER_COUNT + 1));
      scrollElementRef.current.scrollTop = elementsHeight * (SCROLL_CENTER_COUNT + 1);
    }

    if (minValue && selectedTime < minValue) {
      setCurrentScroll((minValue + SCROLL_CENTER_COUNT) * elementsHeight);

      scrollElementRef.current.scrollTop = (minValue + SCROLL_CENTER_COUNT) * elementsHeight;
    }
  }, [maxValue, minValue]);

  return (
    <div className={styles.TimePickerLoopWrapper}>
      <div className={styles.TimePickerLoopContent} onScrollCapture={onScrollCapture} ref={scrollElementRef}>
        <button
          type='button'
          className={classNames(styles.ScrollButton, styles.ScrollButtonPrev, indicatorClassnames.timeElementStyles)}
          {...prevButtonEvents}>
          <ArrowIcon width='1rem' />
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
            style={{ opacity: (maxValue && num > maxValue) || (minValue && num < minValue) ? 0.1 : 1 }}
            key={index}>
            {num === numbersCount ? '00' : num <= 9 ? `${0}${num}` : num}
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
          type='button'
          className={classNames(styles.ScrollButton, styles.ScrollButtonNext, indicatorClassnames.timeElementStyles)}
          onClick={() => (scrollElementRef.current.scrollTop = currentScroll + elementsHeight)}
          {...nextButtonEvents}>
          <ArrowIcon width='1rem' />
        </button>
      </div>
    </div>
  );
};

export default TimePicker;
