import { ReactNode, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { AlignemntHorizontal, AlignmentVertical } from './enums';
import classes from './Popover.module.scss';

import {
  getHorizontalTranslate,
  getLeftPosition,
  getTopPosition,
  getVerticalTranslate,
  hasLeftMargin,
  hasRightBottom,
  hasRightMargin,
  hasTopMargin
} from './helpers';
export interface Origins {
  vertical: AlignmentVertical;
  horizontal: AlignemntHorizontal;
}
export interface PopoverProps {
  open: boolean;
  children: ReactNode;
  positions?: {
    top: number;
    right: number;
    bottom: number;
    left: number;
  };
  anchorEl?: HTMLElement;
  edgeMarginUnit?: number;
  safetyMarginUnit?: number;
  anchorOrigin?: Origins;
  transformOrigin?: Origins;
  onClose: () => void;
}

const Popover = ({
  children,
  open,
  onClose,
  anchorEl,
  edgeMarginUnit = 4,
  safetyMarginUnit = 24,
  anchorOrigin = { vertical: AlignmentVertical.bottom, horizontal: AlignemntHorizontal.left },
  transformOrigin = { vertical: AlignmentVertical.top, horizontal: AlignemntHorizontal.left }
}: PopoverProps) => {
  const [contentRects, setContentRects] = useState<any>(null);
  const [containerRects, setContainerRects] = useState<any>(null);
  const [originPosition, setOriginPosition] = useState<any>({});
  const [anchorPosition, setAnchorPosition] = useState<any>({});

  const contentRef = useRef<HTMLDivElement | null>(null);
  const containertRef = useRef<HTMLDivElement | null>(null);

  const positionStyles = useMemo(() => {
    if (!contentRects || !containerRects) {
      return null;
    }

    const current: any = {
      top: anchorPosition.top - originPosition.top,
      left: anchorPosition.left - originPosition.left
    };

    if (current.left < safetyMarginUnit) {
      current.left = safetyMarginUnit;
    }

    if (current.top < safetyMarginUnit) {
      current.top = safetyMarginUnit;
    }

    if (contentRects.width >= containerRects.width) {
      current.left = safetyMarginUnit;
    }

    if (contentRects.height >= containerRects.height) {
      current.top = safetyMarginUnit;
    }

    if (contentRects.width + current.left > containerRects.width - safetyMarginUnit) {
      current.right = safetyMarginUnit;
      delete current.left;
    }

    if (contentRects.height + current.top > containerRects.height - safetyMarginUnit) {
      current.bottom = safetyMarginUnit;
      delete current.top;
    }

    return current;
  }, [anchorPosition, originPosition, contentRects, containerRects, safetyMarginUnit]);

  const edgeMargins = useMemo(() => {
    const top = hasTopMargin(anchorOrigin, transformOrigin);
    const right = hasRightMargin(anchorOrigin, transformOrigin);
    const left = hasLeftMargin(anchorOrigin, transformOrigin);
    const bottom = hasRightBottom(anchorOrigin, transformOrigin);

    return {
      top: top && edgeMarginUnit,
      left: right && edgeMarginUnit,
      right: left && edgeMarginUnit,
      bottom: bottom && edgeMarginUnit
    };
  }, [anchorOrigin, transformOrigin, edgeMarginUnit]);

  const hanldeClose = () => {
    onClose();
    setContentRects(null);
    setContainerRects(null);
  };
  const blockClose = (e: React.SyntheticEvent) => e.stopPropagation();

  const updateOriginPosition = useCallback(() => {
    setOriginPosition({
      top: getVerticalTranslate(contentRects, transformOrigin.vertical),
      left: getHorizontalTranslate(contentRects, transformOrigin.horizontal)
    });
  }, [transformOrigin.vertical, transformOrigin.horizontal, contentRects]);

  const updateAnchorPosition = useCallback(() => {
    const anchorRects = anchorEl?.getBoundingClientRect();

    setAnchorPosition({
      top: getTopPosition(anchorRects, anchorOrigin),
      left: getLeftPosition(anchorRects, anchorOrigin)
    });
  }, [anchorEl, anchorOrigin.horizontal, anchorOrigin.vertical]);

  const updateContentRef = useCallback(
    () => contentRef.current && setContentRects(contentRef.current?.getBoundingClientRect()),
    [open]
  );

  const updateContainerRef = useCallback(
    () => containertRef.current && setContainerRects(containertRef.current?.getBoundingClientRect()),
    [open]
  );

  const cb = () => {
    const rects = containertRef?.current?.getBoundingClientRect();
    rects && setContainerRects(rects);
  };

  const registerResizeHandler = useCallback(() => {
    window.addEventListener('resize', cb);
  }, []);

  const unRegisterResizeHandler = useCallback(() => {
    window.removeEventListener('resize', cb);
  }, []);

  useEffect(() => {
    open ? registerResizeHandler() : unRegisterResizeHandler();
  }, [open]);

  useEffect(() => updateOriginPosition(), [updateOriginPosition]);

  useEffect(() => updateAnchorPosition(), [updateAnchorPosition]);

  useEffect(() => updateContentRef(), [updateContentRef]);

  useEffect(() => updateContainerRef(), [updateContainerRef]);

  return (
    open && (
      <div
        ref={containertRef}
        style={{ visibility: contentRects ? 'visible' : 'hidden' }}
        onClick={hanldeClose}
        className={`${classes.fullWidthHeightLayer}`}>
        <div className={`${classes.cardWrapper}`} style={edgeMargins}>
          <div ref={contentRef} onClick={blockClose} className={`${classes.cardBase}`} style={positionStyles}>
            {children}
          </div>
        </div>
      </div>
    )
  );
};

export default Popover;
