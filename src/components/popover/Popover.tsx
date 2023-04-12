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
  anchorOrigin = { vertical: AlignmentVertical.bottom, horizontal: AlignemntHorizontal.right },
  transformOrigin = { vertical: AlignmentVertical.top, horizontal: AlignemntHorizontal.left }
}: PopoverProps) => {
  const [originPosition, setOriginPosition] = useState<any>({});
  const [position, setPosition] = useState<any>({});
  const [activeContainerRef, setActiveContainerRef] = useState<HTMLDivElement | null>(null);
  const [activeContentRef, setActiveContentRef] = useState<HTMLDivElement | null>(null);

  const contentRef = useRef();
  const containertRef = useRef();

  const hanldeClose = () => onClose();
  const blockClose = (e: React.SyntheticEvent) => e.stopPropagation();

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

  const updateOriginPosition = useCallback(() => {
    const vertical = getVerticalTranslate(transformOrigin.vertical);
    const horizontal = getHorizontalTranslate(transformOrigin.horizontal);

    setOriginPosition({ transform: `translate(${horizontal}%, ${vertical}%)` });
  }, [transformOrigin.vertical, transformOrigin.horizontal]);

  const updatePosition = useCallback(() => {
    const anchorRects = anchorEl?.getBoundingClientRect();

    setPosition({
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

  useEffect(() => updateOriginPosition(), [updateOriginPosition]);

  useEffect(() => updatePosition(), [updatePosition]);

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
            <div
              ref={contentRef}
              onClick={blockClose}
              style={{ ...position, ...originPosition }}
              className={`${classes.cardBase}`}>
              {children}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Popover;
