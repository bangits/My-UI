import { AlignmentVertical, AlignemntHorizontal } from './enums';

export const preventOverflow = (anchorPosition, originPosition, contentRects, containerRects, safetyMarginUnit) => {
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
};

export const getVerticalTranslate = (rects: DOMRect, vertical: AlignmentVertical) => {
  if (!rects) {
    return 0;
  }
  if (vertical === AlignmentVertical.top) {
    return 0;
  }
  if (vertical === AlignmentVertical.bottom) {
    return rects.height;
  }
  if (vertical === AlignmentVertical.center) {
    return rects.height / 2;
  }
};

export const getHorizontalTranslate = (rects: DOMRect, horizontal: AlignemntHorizontal) => {
  if (!rects) {
    return 0;
  }
  if (horizontal === AlignemntHorizontal.left) {
    return 0;
  }
  if (horizontal === AlignemntHorizontal.right) {
    return rects.width;
  }
  if (horizontal === AlignemntHorizontal.center) {
    return rects.width / 2;
  }
};

export const getTopPosition = (rects: DOMRect, anchorOriginVertical) => {
  if (!rects) {
    return;
  }
  if (anchorOriginVertical === AlignmentVertical.top) {
    return rects[AlignmentVertical.top];
  }
  if (anchorOriginVertical === AlignmentVertical.bottom) {
    return rects[AlignmentVertical.bottom];
  }
  if (anchorOriginVertical === AlignmentVertical.center) {
    return rects.top + rects.height / 2;
  }
};

export const getLeftPosition = (rects: DOMRect, anchorOriginHorisontal) => {
  if (!rects) {
    return;
  }
  if (anchorOriginHorisontal === AlignemntHorizontal.left) {
    return rects[AlignemntHorizontal.left];
  }
  if (anchorOriginHorisontal === AlignemntHorizontal.right) {
    return rects[AlignemntHorizontal.right];
  }
  if (anchorOriginHorisontal === AlignemntHorizontal.center) {
    return rects.left + rects.width / 2;
  }
};

export const hasTopMargin = (anchorOriginVertical, anchorOriginHorisontal, transformOriginVertical) => {
  return (
    anchorOriginVertical === AlignmentVertical.bottom &&
    transformOriginVertical === AlignmentVertical.top &&
    anchorOriginHorisontal === AlignemntHorizontal.left
  );
};

export const hasRightMargin = (anchorOriginVertical, anchorOriginHorisontal, transformOriginVertical) => {
  return (
    anchorOriginVertical === AlignmentVertical.top &&
    transformOriginVertical === AlignmentVertical.top &&
    anchorOriginHorisontal === AlignemntHorizontal.right
  );
};

export const hasLeftMargin = (anchorOriginVertical, anchorOriginHorisontal, transformOriginVertical) => {
  return (
    anchorOriginVertical === AlignmentVertical.top &&
    transformOriginVertical === AlignmentVertical.top &&
    anchorOriginHorisontal === AlignemntHorizontal.left
  );
};

export const hasRightBottom = (anchorOriginVertical, anchorOriginHorisontal, transformOriginVertical) => {
  return (
    anchorOriginVertical === AlignmentVertical.top &&
    transformOriginVertical === AlignmentVertical.bottom &&
    anchorOriginHorisontal === AlignemntHorizontal.left
  );
};
