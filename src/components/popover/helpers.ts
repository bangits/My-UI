import { Origins } from './Popover';
import { AlignmentVertical, AlignemntHorizontal } from './enums';

export const getVerticalTranslate = (vertical: AlignmentVertical) => {
  if (vertical === AlignmentVertical.top) {
    return 0;
  }
  if (vertical === AlignmentVertical.bottom) {
    return -100;
  }
  if (vertical === AlignmentVertical.center) {
    return -50;
  }
};

export const getHorizontalTranslate = (horizontal: AlignemntHorizontal) => {
  if (horizontal === AlignemntHorizontal.left) {
    return 0;
  }
  if (horizontal === AlignemntHorizontal.right) {
    return -100;
  }
  if (horizontal === AlignemntHorizontal.center) {
    return -50;
  }
};

export const getTopPosition = (rects: DOMRect, anchorOrigin: Origins) => {
  if (!rects) {
    return;
  }
  if (anchorOrigin.vertical === AlignmentVertical.top) {
    return rects[AlignmentVertical.top];
  }
  if (anchorOrigin.vertical === AlignmentVertical.bottom) {
    return rects[AlignmentVertical.bottom];
  }
  if (anchorOrigin.vertical === AlignmentVertical.center) {
    return rects.top + rects.height / 2;
  }
};

export const getLeftPosition = (rects: DOMRect, anchorOrigin: Origins) => {
  if (!rects) {
    return;
  }
  if (anchorOrigin.horizontal === AlignemntHorizontal.left) {
    return rects[AlignemntHorizontal.left];
  }
  if (anchorOrigin.horizontal === AlignemntHorizontal.right) {
    return rects[AlignemntHorizontal.right];
  }
  if (anchorOrigin.horizontal === AlignemntHorizontal.center) {
    return rects.left + rects.width / 2;
  }
};

export const hasTopMargin = (anchorOrigin, transformOrigin) => {
  return (
    anchorOrigin.vertical === AlignmentVertical.bottom &&
    transformOrigin.vertical === AlignmentVertical.top &&
    anchorOrigin.horizontal === AlignemntHorizontal.left
  );
};

export const hasRightMargin = (anchorOrigin, transformOrigin) => {
  return (
    anchorOrigin.vertical === AlignmentVertical.top &&
    transformOrigin.vertical === AlignmentVertical.top &&
    anchorOrigin.horizontal === AlignemntHorizontal.right
  );
};

export const hasLeftMargin = (anchorOrigin, transformOrigin) => {
  return (
    anchorOrigin.vertical === AlignmentVertical.top &&
    transformOrigin.vertical === AlignmentVertical.top &&
    anchorOrigin.horizontal === AlignemntHorizontal.left
  );
};

export const hasRightBottom = (anchorOrigin, transformOrigin) => {
  return (
    anchorOrigin.vertical === AlignmentVertical.top &&
    transformOrigin.vertical === AlignmentVertical.bottom &&
    anchorOrigin.horizontal === AlignemntHorizontal.left
  );
};
