import { typedMemo } from '@/helpers';
import { IComponent } from '@/types';
import { Scrollbars } from '@my-ui/scrollbar';
import classNames from 'classnames';
import React, { FC, ReactNode, UIEvent } from 'react';
import styles from './Scroll.module.scss';

export interface ScrollProps extends IComponent {
  height?: number | string;
  children?: ReactNode;
  width?: number;
  autoHide?: boolean;
  autoHideTimeout?: number;
  autoHideDuration?: number;
  autoHeight?: boolean;
  onScroll?: (e: UIEvent<HTMLElement>) => void;
}

const Scroll: FC<ScrollProps> = ({ height = 200, width, children, className, ...scrollProps }) => {
  return (
    <Scrollbars
      autoHeight
      hideTracksWhenNotNeeded
      autoHeightMax={height}
      {...scrollProps}
      style={{ width: width ?? '100%' }}
      className={classNames(styles.ScrollBase, className)}
      trackVerticalClassname={styles.TrackVertical}
      thumbVerticalClassname={styles.ThumbVertical}
      trackHorizontalClassname={styles.TrackHorizontal}
      thumbHorizontalClassname={styles.ThumbHorizontal}>
      {children}
    </Scrollbars>
  );
};

export default typedMemo(Scroll);
