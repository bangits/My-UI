import { typedMemo } from '@/helpers';
import { IComponent } from '@/types';
import { Scrollbars } from '@my-ui/scrollbar';
import classNames from 'classnames';
import React, { FC, ReactNode } from 'react';
import styles from './Scroll.module.scss';

export interface ScrollProps extends IComponent {
  height: number;
  children?: ReactNode;
  width: number;
  autoHide?: boolean;
  autoHideTimeout?: number;
  autoHideDuration?: number;
}

const Scroll: FC<ScrollProps> = ({ height = 200, width = 200, children, className, ...scrollProps }) => {
  return (
    <Scrollbars
      {...scrollProps}
      style={{ width, height }}
      hideTracksWhenNotNeeded
      //
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
