import { ReactNode } from 'react';
import { AlignmentVertical, AlignemntHorizontal } from './enums';
import { Never } from '@/types/utils';

type RefType = any;

type RenderOpenEl = ({
  isOpened,
  open,
  close,
  renderElRef
}: {
  isOpened: boolean;
  open(): void;
  close(): void;
  renderElRef: RefType;
}) => ReactNode;

type PopoverPositionProps = {
  top: number;
  right: number;
  bottom: number;
  left: number;
};

type PopoverInternalState = {
  renderOpenEl: RenderOpenEl;
};

type PopoverExternalStateProps = {
  open: boolean;
  onClose(): void;
  anchorEl: RefType;
  positions?: PopoverPositionProps;
};

type OnlyInternalState = PopoverInternalState & Never<PopoverExternalStateProps>;
type OnlyExternalState = PopoverExternalStateProps & Never<PopoverInternalState>;

export type PopoverProps = {
  children: ReactNode;
  edgeMarginUnit?: number;
  safetyMarginUnit?: number;
  anchorOriginVertical?: AlignmentVertical;
  anchorOriginHorisontal?: AlignemntHorizontal;
  transformOriginVertical?: AlignmentVertical;
  transformOriginHorizontal?: AlignemntHorizontal;
} & (OnlyInternalState | OnlyExternalState);
