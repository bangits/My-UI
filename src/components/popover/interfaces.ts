import { RefObject, ReactNode } from 'react';
import { AlignmentVertical, AlignemntHorizontal } from './enums';
import { Never } from '@/types/utils';

type RenderOpenEl = ({
  isOpened,
  open,
  close,
  renderElRef
}: {
  isOpened: boolean;
  open(): void;
  close(): void;
  renderElRef: RefObject<HTMLElement>;
}) => ReactNode;

type PopoverPositionProps = {
  top: number;
  right: number;
  bottom: number;
  left: number;
};

type PopoverUnControlled = {
  renderOpenEl: RenderOpenEl;
};

type PopoverControlled = {
  open: boolean;
  onClose(): void;
  anchorEl: RefObject<HTMLElement>;
  positions?: PopoverPositionProps;
};

type OnlyUnControlled = PopoverUnControlled & Never<PopoverControlled>;
type OnlyControlled = PopoverControlled & Never<PopoverUnControlled>;

export type PopoverProps = {
  children: ReactNode;
  edgeMarginUnit?: number;
  safetyMarginUnit?: number;
  anchorOriginVertical?: AlignmentVertical;
  anchorOriginHorisontal?: AlignemntHorizontal;
  transformOriginVertical?: AlignmentVertical;
  transformOriginHorizontal?: AlignemntHorizontal;
} & (OnlyControlled | OnlyUnControlled);
