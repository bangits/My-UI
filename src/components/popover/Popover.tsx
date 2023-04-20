import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
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
  hasTopMargin,
  preventOverflow
} from './helpers';
import { PopoverProps } from './interfaces';
import { Portal } from '../shared';

const Popover = ({
  children,
  open,
  onClose,
  anchorEl,
  renderOpenEl,
  edgeMarginUnit = 4,
  safetyMarginUnit = 24,
  anchorOriginVertical = AlignmentVertical.bottom,
  anchorOriginHorisontal = AlignemntHorizontal.left,
  transformOriginVertical = AlignmentVertical.top,
  transformOriginHorizontal = AlignemntHorizontal.left
}: PopoverProps) => {
  const [internalOpen, setInternalOpen] = useState<boolean>(false);
  const [anchorRects, setAnchorRects] = useState<DOMRect | null>(null);
  const [contentRects, setContentRects] = useState<DOMRect | null>(null);
  const [containerRects, setContainerRects] = useState<DOMRect | null>(null);

  const renderElRef = useRef<HTMLDataElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const containertRef = useRef<HTMLDivElement | null>(null);

  const isOpen = useMemo(() => (renderOpenEl ? internalOpen : open), [renderOpenEl, internalOpen, open]);

  const anchorPosition = useMemo(() => {
    const rects = anchorRects ? anchorRects : anchorEl?.current?.getBoundingClientRect();

    return {
      top: getTopPosition(rects, anchorOriginVertical),
      left: getLeftPosition(rects, anchorOriginHorisontal)
    };
  }, [anchorEl, anchorOriginVertical, anchorOriginHorisontal, anchorRects]);

  const originPosition = useMemo(() => {
    return {
      top: getVerticalTranslate(contentRects, transformOriginVertical),
      left: getHorizontalTranslate(contentRects, transformOriginHorizontal)
    };
  }, [transformOriginVertical, transformOriginHorizontal, contentRects]);

  const endPosition = useMemo(() => {
    return preventOverflow(anchorPosition, originPosition, contentRects, containerRects, safetyMarginUnit);
  }, [anchorPosition, originPosition, contentRects, containerRects, safetyMarginUnit]);

  const edgeMargins = useMemo(() => {
    const top = hasTopMargin(anchorOriginVertical, anchorOriginHorisontal, transformOriginVertical);
    const right = hasRightMargin(anchorOriginVertical, anchorOriginHorisontal, transformOriginVertical);
    const left = hasLeftMargin(anchorOriginVertical, anchorOriginHorisontal, transformOriginVertical);
    const bottom = hasRightBottom(anchorOriginVertical, anchorOriginHorisontal, transformOriginVertical);

    return {
      top: top && edgeMarginUnit,
      left: right && edgeMarginUnit,
      right: left && edgeMarginUnit,
      bottom: bottom && edgeMarginUnit
    };
  }, [anchorOriginVertical, anchorOriginHorisontal, transformOriginVertical, edgeMarginUnit]);

  const handleInternalClose = useCallback(() => setInternalOpen(false), []);

  const handleInternalOpen = useCallback(() => setInternalOpen(true), []);

  const hanldeClose = useCallback(() => {
    renderOpenEl ? handleInternalClose() : onClose();
    setContentRects(null);
    setContainerRects(null);
  }, []);

  const blockClose = useCallback((e: React.SyntheticEvent) => e.stopPropagation(), []);

  const eventHandlersController = useCallback(() => {
    if (isOpen) {
      registerHandlers();
    } else {
      unRegisterHandler();
    }
  }, [isOpen]);

  const updateDependentRects = useCallback(() => {
    const anchorRects = renderOpenEl
      ? renderElRef?.current?.getBoundingClientRect()
      : anchorEl?.current?.getBoundingClientRect();
    const containerRects = containertRef?.current?.getBoundingClientRect();
    const contentRects = contentRef?.current?.getBoundingClientRect();

    anchorRects && setAnchorRects(anchorRects);
    containerRects && setContainerRects(containerRects);
    contentRects && setContentRects(contentRects);
  }, [anchorEl, containertRef]);

  const registerHandlers = useCallback(() => {
    window.addEventListener('resize', updateDependentRects);
    window.addEventListener('scroll', updateDependentRects);
  }, [updateDependentRects]);

  const unRegisterHandler = useCallback(() => {
    window.removeEventListener('resize', updateDependentRects);
    window.removeEventListener('scroll', updateDependentRects);
  }, [updateDependentRects]);

  useEffect(() => isOpen && updateDependentRects(), [isOpen]);

  useEffect(() => eventHandlersController(), [eventHandlersController]);

  return (
    <>
      {isOpen && (
        <Portal>
          <div
            ref={containertRef}
            style={{ visibility: contentRects ? 'visible' : 'hidden' }}
            onClick={hanldeClose}
            className={`${classes.fullWidthHeightLayer}`}>
            <div className={`${classes.cardWrapper}`} style={edgeMargins}>
              <div ref={contentRef} onClick={blockClose} className={`${classes.cardBase}`} style={endPosition}>
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
