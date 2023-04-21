import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { AlignmentHorizontal, AlignmentVertical } from './enums';
import classes from './Popover.module.scss';

import {
  getHorizontalTranslate,
  getLeftPosition,
  getTopPosition,
  getVerticalTranslate,
  hasLeftMargin,
  hasRightBottom,
  hasRightMargin,
  hasTopMargin,
  preventOverflow
} from './helpers';
import { PopoverProps } from './interfaces';
import { Portal } from '../shared';
import { useWindowEventRegistrar } from '@/helpers';

const Popover = ({
  children,
  open,
  onClose,
  anchorEl,
  renderOpenEl,
  edgeMarginUnit = 4,
  safetyMarginUnit = 24,
  anchorOriginVertical = AlignmentVertical.bottom,
  anchorOriginHorizontal = AlignmentHorizontal.left,
  transformOriginVertical = AlignmentVertical.top,
  transformOriginHorizontal = AlignmentHorizontal.left
}: PopoverProps) => {
  const [internalOpen, setInternalOpen] = useState(false);
  const [anchorRects, setAnchorRects] = useState<DOMRect | null>(null);
  const [contentRects, setContentRects] = useState<DOMRect | null>(null);
  const [containerRects, setContainerRects] = useState<DOMRect | null>(null);

  const renderElRef = useRef<HTMLDataElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const containertRef = useRef<HTMLDivElement | null>(null);

  const isOpen = renderOpenEl ? internalOpen : open;

  const anchorPosition = useMemo(() => {
    const rects = anchorRects || anchorEl?.current?.getBoundingClientRect();

    return {
      top: getTopPosition(rects, anchorOriginVertical),
      left: getLeftPosition(rects, anchorOriginHorizontal)
    };
  }, [anchorEl, anchorOriginVertical, anchorOriginHorizontal, anchorRects]);

  const originPosition = useMemo(
    () => ({
      top: getVerticalTranslate(contentRects, transformOriginVertical),
      left: getHorizontalTranslate(contentRects, transformOriginHorizontal)
    }),
    [transformOriginVertical, transformOriginHorizontal, contentRects]
  );

  const endPosition = useMemo(
    () => preventOverflow(anchorPosition, originPosition, contentRects, containerRects, safetyMarginUnit),
    [anchorPosition, originPosition, contentRects, containerRects, safetyMarginUnit]
  );

  const edgeMargins = useMemo(() => {
    const top = hasTopMargin(anchorOriginVertical, anchorOriginHorizontal, transformOriginVertical);
    const right = hasRightMargin(anchorOriginVertical, anchorOriginHorizontal, transformOriginVertical);
    const left = hasLeftMargin(anchorOriginVertical, anchorOriginHorizontal, transformOriginVertical);
    const bottom = hasRightBottom(anchorOriginVertical, anchorOriginHorizontal, transformOriginVertical);

    return {
      top: top && edgeMarginUnit,
      left: right && edgeMarginUnit,
      right: left && edgeMarginUnit,
      bottom: bottom && edgeMarginUnit
    };
  }, [anchorOriginVertical, anchorOriginHorizontal, transformOriginVertical, edgeMarginUnit]);

  const handleInternalClose = useCallback(() => setInternalOpen(false), []);

  const handleInternalOpen = useCallback(() => setInternalOpen(true), []);

  const handleClose = useCallback(() => {
    renderOpenEl ? handleInternalClose() : onClose();
    setContentRects(null);
    setContainerRects(null);
  }, [renderOpenEl]);

  const blockClose = useCallback((e: React.SyntheticEvent) => e.stopPropagation(), []);

  const updateDependentRects = useCallback(() => {
    const anchorRects = renderOpenEl
      ? renderElRef?.current?.getBoundingClientRect()
      : anchorEl?.current?.getBoundingClientRect();
    const containerRects = containertRef?.current?.getBoundingClientRect();
    const contentRects = contentRef?.current?.getBoundingClientRect();

    anchorRects && setAnchorRects(anchorRects);
    containerRects && setContainerRects(containerRects);
    contentRects && setContentRects(contentRects);
  }, [anchorEl, containertRef, renderOpenEl]);

  useEffect(() => isOpen && updateDependentRects(), [isOpen]);

  useWindowEventRegistrar(['resize', 'scroll'], updateDependentRects, !isOpen);

  return (
    <>
      {isOpen && (
        <Portal>
          <div
            ref={containertRef}
            style={{ visibility: contentRects ? 'visible' : 'hidden' }}
            onClick={handleClose}
            className={classes.FullWidthHeightLayer}>
            <div className={classes.CardWrapper} style={edgeMargins}>
              <div ref={contentRef} onClick={blockClose} className={classes.CardBase} style={endPosition}>
                {children}
              </div>
            </div>
          </div>
        </Portal>
      )}
      {renderOpenEl?.({
        isOpened: internalOpen,
        close: handleInternalClose,
        open: handleInternalOpen,
        renderElRef: renderElRef
      })}
    </>
  );
};

export default Popover;
