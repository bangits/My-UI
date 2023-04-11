import { ReactNode, useMemo } from 'react';
import classes from './Popover.module.scss';
import { AlignemntHorizontal, AlignmentVertical } from './enums';
import { originMapping } from './mappings';

export interface PopoverProps {
  open: boolean;
  children: ReactNode;
  anchorEl?: HTMLElement;
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
    const unit = 4;

    const top =
      anchorOrigin.vertical === AlignmentVertical.bottom &&
      transformOrigin.vertical === AlignmentVertical.top &&
      anchorOrigin.horizontal === AlignemntHorizontal.left;

    const right =
      anchorOrigin.vertical === AlignmentVertical.top &&
      transformOrigin.vertical === AlignmentVertical.top &&
      anchorOrigin.horizontal === AlignemntHorizontal.right;

    const left =
      anchorOrigin.vertical === AlignmentVertical.top &&
      transformOrigin.vertical === AlignmentVertical.top &&
      anchorOrigin.horizontal === AlignemntHorizontal.left;

    const bottom =
      anchorOrigin.vertical === AlignmentVertical.top &&
      transformOrigin.vertical === AlignmentVertical.bottom &&
      anchorOrigin.horizontal === AlignemntHorizontal.left;

    return {
      top: top && unit,
      left: right && unit,
      right: left && unit,
      bottom: bottom && unit
    };
  }, []);

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
