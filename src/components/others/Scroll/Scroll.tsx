import { typedMemo } from '@/helpers';
import { IComponent } from '@/types';
import { Scrollbars } from '@my-ui/scrollbar';
import classNames from 'classnames';
import React, { FC, ReactNode, UIEvent } from 'react';
import styles from './Scroll.module.scss';

export interface ScrollProps extends IComponent {
  height?: number | string;
  autoHeightMin?: number | string;
  children?: ReactNode;
  width?: number;
  autoHide?: boolean;
  autoHideTimeout?: number;
  autoHideDuration?: number;
  autoHeight?: boolean;
  onScroll?: (e: UIEvent<HTMLElement>) => void;
  showVerticalScroll?: boolean;
  trackClassName?: string;
  thumbClassName?: string;
}

const Scroll: FC<ScrollProps> = ({
  height = 200,
  width,
  children,
  className,
  showVerticalScroll = true,
  trackClassName,
  thumbClassName,
  ...scrollProps
}) => {
  return (
    <Scrollbars
      autoHeight
      hideTracksWhenNotNeeded
      autoHeightMax={showVerticalScroll ? height : Infinity}
      {...scrollProps}
      style={{ width: width ?? '100%' }}
      className={classNames(styles.ScrollBase, className)}
      trackVerticalClassname={classNames(styles.TrackVertical, trackClassName)}
      thumbVerticalClassname={classNames(styles.ThumbVertical, thumbClassName)}
      trackHorizontalClassname={classNames(styles.TrackHorizontal, trackClassName)}
      thumbHorizontalClassname={classNames(styles.ThumbHorizontal, thumbClassName)}
      renderTrackVertical={showVerticalScroll ? undefined : () => <div />}
      renderThumbVertical={showVerticalScroll ? undefined : () => <div />}>
      {children}
    </Scrollbars>
  );
};

export default typedMemo(Scroll);
