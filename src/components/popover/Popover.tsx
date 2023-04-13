import { ReactNode, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import classes from './Popover.module.scss';
import { AlignemntHorizontal, AlignmentVertical } from './enums';
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
  anchorOrigin = { vertical: AlignmentVertical.top, horizontal: AlignemntHorizontal.right },
  transformOrigin = { vertical: AlignmentVertical.bottom, horizontal: AlignemntHorizontal.right }
}: PopoverProps) => {
  const [originPosition, setOriginPosition] = useState<any>({});
  const [anchorPosition, setAnchorPosition] = useState<any>({});
  const [activeContainerRef, setActiveContainerRef] = useState<HTMLDivElement | null>(null);
  const [activeContentRef, setActiveContentRef] = useState<HTMLDivElement | null>(null);

  const contentRef = useRef();
  const containertRef = useRef();

  const hanldeClose = () => onClose();
  const blockClose = (e: React.SyntheticEvent) => e.stopPropagation();

  const updateOriginPosition = useCallback(() => {
    const rects = activeContentRef?.getBoundingClientRect();

    setOriginPosition({
      top: getVerticalTranslate(rects, transformOrigin.vertical),
      left: getHorizontalTranslate(rects, transformOrigin.horizontal)
    });
  }, [transformOrigin.vertical, transformOrigin.horizontal, activeContentRef]);

  const updateAnchorPosition = useCallback(() => {
    const anchorRects = anchorEl?.getBoundingClientRect();

    setAnchorPosition({
      top: getTopPosition(anchorRects, anchorOrigin),
      left: getLeftPosition(anchorRects, anchorOrigin)
    });
  }, [anchorEl, anchorOrigin.horizontal, anchorOrigin.vertical]);

  const updateContentRef = useCallback(
    () => (open ? setActiveContentRef(contentRef.current) : setActiveContentRef(null)),
    [open]
  );

  const updateContainerRef = useCallback(
    () => (open ? setActiveContainerRef(containertRef.current) : setActiveContainerRef(null)),
    [open]
  );

  const positionStyles = useMemo(() => {
    const contentRects = activeContentRef?.getBoundingClientRect();
    const containerRects = activeContainerRef?.getBoundingClientRect();

    if (!anchorPosition || !originPosition || !contentRects || !containerRects) {
      return;
    }

    const currentPosition: any = {
      top: anchorPosition.top - originPosition.top,
      left: anchorPosition.left - originPosition.left
    };

    if (currentPosition.top < 24) {
      currentPosition.top = 24;
    }

    if (currentPosition.left < 24) {
      currentPosition.left = 24;
    }

    if (contentRects.right - containerRects.right < 24) {
      currentPosition.right = 24;
    }

    if (contentRects.bottom - containerRects.bottom > 24) {
      currentPosition.bottom = 24;
    }

    return currentPosition;
  }, [anchorPosition, originPosition]);

  const edgeMargins = useMemo(() => {
    const unit = edgeMarginUnit;

    const top = hasTopMargin(anchorOrigin, transformOrigin);
    const right = hasRightMargin(anchorOrigin, transformOrigin);
    const left = hasLeftMargin(anchorOrigin, transformOrigin);
    const bottom = hasRightBottom(anchorOrigin, transformOrigin);

    return {
      top: top && unit,
      left: right && unit,
      right: left && unit,
      bottom: bottom && unit
    };
  }, [anchorOrigin, transformOrigin]);
  useEffect(() => updateOriginPosition(), [updateOriginPosition]);

  useEffect(() => updateAnchorPosition(), [updateAnchorPosition]);

  useEffect(() => updateContentRef(), [updateContentRef]);

  useEffect(() => updateContainerRef(), [updateContainerRef]);

  return (
    <div>
      {open && (
        <div
          ref={containertRef}
          style={{ opacity: activeContentRef ? '1' : '0' }}
          onClick={hanldeClose}
          className={`${classes.fullWidthHeightLayer}`}>
          <div className={`${classes.cardWrapper}`} style={edgeMargins}>
            <div ref={contentRef} onClick={blockClose} style={{ ...positionStyles }} className={`${classes.cardBase}`}>
              {children}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Popover;
