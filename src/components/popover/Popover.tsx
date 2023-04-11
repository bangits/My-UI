import { ReactNode, useMemo } from 'react';
import classes from './Popover.module.scss';
import { AlignemntHorizontal, AlignmentVertical } from './enums';
import { originMapping } from './mappings';
import { haveLeftMargin, haveRightBottom, haveRightMargin, haveTopMargin } from './helpers';

export interface PopoverProps {
  open: boolean;
  children: ReactNode;
  anchorEl?: HTMLElement;
  edgeMarginUnit?: number;
  anchorOrigin?: {
    vertical: AlignmentVertical;
    horizontal: AlignemntHorizontal;
  };
  transformOrigin?: {
    vertical: AlignmentVertical;
    horizontal: AlignemntHorizontal;
  };
  onClose: () => void;
}

const Popover = ({
  children,
  open,
  onClose,
  anchorEl,
  edgeMarginUnit = 4,
  anchorOrigin = { vertical: AlignmentVertical.top, horizontal: AlignemntHorizontal.left },
  transformOrigin = { vertical: AlignmentVertical.top, horizontal: AlignemntHorizontal.right }
}: PopoverProps) => {
  const hanldeClose = () => onClose();
  const blockClose = (e: React.SyntheticEvent) => e.stopPropagation();

  const computePosition = useMemo(() => {
    const rects = anchorEl?.getBoundingClientRect();

    return {
      top: rects?.[anchorOrigin.vertical],
      left: rects?.[anchorOrigin.horizontal]
    };
  }, [anchorEl, anchorOrigin]);

  const computeOriginPosition = useMemo(() => {
    const vertical = originMapping[transformOrigin.vertical];
    const horizontal = originMapping[transformOrigin.horizontal];

    return { transform: `translate(${horizontal}%, ${vertical}%)` };
  }, [transformOrigin]);

  const edgeMargins = useMemo(() => {
    const unit = edgeMarginUnit;

    const top = haveTopMargin(anchorOrigin, transformOrigin);
    const right = haveRightMargin(anchorOrigin, transformOrigin);
    const left = haveLeftMargin(anchorOrigin, transformOrigin);
    const bottom = haveRightBottom(anchorOrigin, transformOrigin);

    return {
      top: top && unit,
      left: right && unit,
      right: left && unit,
      bottom: bottom && unit
    };
  }, [anchorOrigin, transformOrigin]);

  return (
    <div>
      {open && (
        <div onClick={hanldeClose} className={`${classes.fullWidthHeightLayer}`}>
          <div className={`${classes.cardWrapper}`} style={edgeMargins}>
            <div
              onClick={blockClose}
              style={{ ...computePosition, ...computeOriginPosition }}
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
