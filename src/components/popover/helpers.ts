import { Mutable } from '@/types/utils';
import { AlignmentVertical, AlignmentHorizontal } from './enums';

export const preventOverflow = (
  anchorPosition: Partial<DOMRect>,
  originPosition: Partial<DOMRect>,
  contentRects: DOMRect,
  containerRects: DOMRect,
  safetyMarginUnit: number
) => {
  if (!contentRects || !containerRects) {
    return null;
  }

  const current: Mutable<Partial<DOMRect>> = {
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

  return {
    ...current,
    maxWidth: `calc(100% - ${safetyMarginUnit * 2}px)`,
    maxHeight: `calc(100% - ${safetyMarginUnit * 2}px)`
  };
};

export const getVerticalTranslate = (rects: DOMRect, vertical: AlignmentVertical) => {
  if (!rects) {
    return 0;
  }

  const conditions = {
    [AlignmentVertical.top]: 0,
    [AlignmentVertical.bottom]: rects.height,
    [AlignmentVertical.center]: rects.height / 2
  };

  return conditions[vertical];
};

export const getHorizontalTranslate = (rects: DOMRect, horizontal: AlignmentHorizontal) => {
  if (!rects) {
    return 0;
  }
  const conditions = {
    [AlignmentHorizontal.left]: 0,
    [AlignmentHorizontal.right]: rects.width,
    [AlignmentHorizontal.center]: rects.width / 2
  };

  return conditions[horizontal];
};

export const getTopPosition = (rects: DOMRect, anchorOriginVertical: AlignmentVertical) => {
  if (!rects) {
    return;
  }

  const conditions = {
    [AlignmentVertical.top]: rects[AlignmentVertical.top],
    [AlignmentVertical.bottom]: rects[AlignmentVertical.bottom],
    [AlignmentVertical.center]: rects.top + rects.height / 2
  };

  return conditions[anchorOriginVertical];
};

export const getLeftPosition = (rects: DOMRect, anchorOriginHorizontal: AlignmentHorizontal) => {
  if (!rects) {
    return;
  }

  const conditions = {
    [AlignmentHorizontal.left]: rects[AlignmentHorizontal.left],
    [AlignmentHorizontal.right]: rects[AlignmentHorizontal.right],
    [AlignmentHorizontal.center]: rects.left + rects.width / 2
  };

  return conditions[anchorOriginHorizontal];
};

export const hasTopMargin = (
  anchorOriginVertical: AlignmentVertical,
  anchorOriginHorizontal: AlignmentHorizontal,
  transformOriginVertical: AlignmentVertical
) =>
  anchorOriginVertical === AlignmentVertical.bottom &&
  transformOriginVertical === AlignmentVertical.top &&
  anchorOriginHorizontal === AlignmentHorizontal.left;

export const hasRightMargin = (
  anchorOriginVertical: AlignmentVertical,
  anchorOriginHorizontal: AlignmentHorizontal,
  transformOriginVertical: AlignmentVertical
) =>
  anchorOriginVertical === AlignmentVertical.top &&
  transformOriginVertical === AlignmentVertical.top &&
  anchorOriginHorizontal === AlignmentHorizontal.right;

export const hasLeftMargin = (
  anchorOriginVertical: AlignmentVertical,
  anchorOriginHorizontal: AlignmentHorizontal,
  transformOriginVertical: AlignmentVertical
) =>
  anchorOriginVertical === AlignmentVertical.top &&
  transformOriginVertical === AlignmentVertical.top &&
  anchorOriginHorizontal === AlignmentHorizontal.left;

export const hasRightBottom = (
  anchorOriginVertical: AlignmentVertical,
  anchorOriginHorizontal: AlignmentHorizontal,
  transformOriginVertical: AlignmentVertical
) =>
  anchorOriginVertical === AlignmentVertical.top &&
  transformOriginVertical === AlignmentVertical.bottom &&
  anchorOriginHorizontal === AlignmentHorizontal.left;
