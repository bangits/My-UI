import { AlignmentVertical, AlignemntHorizontal } from './enums';

export const haveTopMargin = (anchorOrigin, transformOrigin) => {
  return (
    anchorOrigin.vertical === AlignmentVertical.bottom &&
    transformOrigin.vertical === AlignmentVertical.top &&
    anchorOrigin.horizontal === AlignemntHorizontal.left
  );
};

export const haveRightMargin = (anchorOrigin, transformOrigin) => {
  return (
    anchorOrigin.vertical === AlignmentVertical.top &&
    transformOrigin.vertical === AlignmentVertical.top &&
    anchorOrigin.horizontal === AlignemntHorizontal.right
  );
};

export const haveLeftMargin = (anchorOrigin, transformOrigin) => {
  return (
    anchorOrigin.vertical === AlignmentVertical.top &&
    transformOrigin.vertical === AlignmentVertical.top &&
    anchorOrigin.horizontal === AlignemntHorizontal.left
  );
};

export const haveRightBottom = (anchorOrigin, transformOrigin) => {
  return (
    anchorOrigin.vertical === AlignmentVertical.top &&
    transformOrigin.vertical === AlignmentVertical.bottom &&
    anchorOrigin.horizontal === AlignemntHorizontal.left
  );
};
