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
  hasTopMargin,
  preventOverflow
} from './helpers';
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
  anchorOriginVertical?: AlignmentVertical;
  anchorOriginHorisontal?: AlignemntHorizontal;
  transformOriginVertical?: AlignmentVertical;
  transformOriginHorizontal?: AlignemntHorizontal;
  onClose: () => void;
}

const Popover = ({
  children,
  open,
  onClose,
  anchorEl,
  edgeMarginUnit = 4,
  safetyMarginUnit = 24,
  anchorOriginVertical = AlignmentVertical.bottom,
  anchorOriginHorisontal = AlignemntHorizontal.left,
  transformOriginVertical = AlignmentVertical.top,
  transformOriginHorizontal = AlignemntHorizontal.left
}: PopoverProps) => {
  const [anchorRects, setAnchorRects] = useState<DOMRect | null>(null);
  const [contentRects, setContentRects] = useState<DOMRect | null>(null);
  const [containerRects, setContainerRects] = useState<DOMRect | null>(null);
  const [originPosition, setOriginPosition] = useState<Partial<DOMRect>>({});
  const [anchorPosition, setAnchorPosition] = useState<Partial<DOMRect>>({});

  const contentRef = useRef<HTMLDivElement | null>(null);
  const containertRef = useRef<HTMLDivElement | null>(null);

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

  const hanldeClose = useCallback(() => {
    onClose();
    setContentRects(null);
    setContainerRects(null);
  }, []);

  const blockClose = useCallback((e: React.SyntheticEvent) => e.stopPropagation(), []);

  const updateOriginPosition = useCallback(() => {
    setOriginPosition({
      top: getVerticalTranslate(contentRects, transformOriginVertical),
      left: getHorizontalTranslate(contentRects, transformOriginHorizontal)
    });
  }, [transformOriginVertical, transformOriginHorizontal, contentRects]);

  const updateAnchorPosition = useCallback(() => {
    const rects = anchorRects ? anchorRects : anchorEl?.getBoundingClientRect();

    setAnchorPosition({
      top: getTopPosition(rects, anchorOriginVertical),
      left: getLeftPosition(rects, anchorOriginHorisontal)
    });
  }, [anchorEl, anchorOriginVertical, anchorOriginHorisontal, anchorRects]);

  const updateContentRef = useCallback(
    () => contentRef.current && setContentRects(contentRef.current?.getBoundingClientRect()),
    [open]
  );

  const updateContainerRef = useCallback(
    () => containertRef.current && setContainerRects(containertRef.current?.getBoundingClientRect()),
    [open]
  );
  const resizeHandler = useCallback(() => (open ? registerResizeHandler() : unRegisterResizeHandler()), [open]);

  const updateDependentRects = useCallback(() => {
    const anchorRects = anchorEl?.getBoundingClientRect();
    const containerRects = containertRef?.current?.getBoundingClientRect();
    const contentRects = contentRef?.current?.getBoundingClientRect();
    anchorRects && setAnchorRects(anchorRects);
    containerRects && setContainerRects(containerRects);
    contentRects && setContentRects(contentRects);
  }, [anchorEl, containertRef]);

  const registerResizeHandler = useCallback(() => {
    window.addEventListener('resize', updateDependentRects);
  }, [updateDependentRects]);

  const unRegisterResizeHandler = useCallback(() => {
    window.removeEventListener('resize', updateDependentRects);
  }, [updateDependentRects]);

  useEffect(() => open && updateDependentRects(), [open]);

  useEffect(() => resizeHandler(), [resizeHandler]);

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
          <div ref={contentRef} onClick={blockClose} className={`${classes.cardBase}`} style={endPosition}>
            {children}
          </div>
        </div>
      </div>
    )
  );
};

export default Popover;
