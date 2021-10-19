import { CSSProperties } from 'react';

export type ComponentType = keyof JSX.IntrinsicElements;

export interface IComponent {
  className?: string;
  style?: CSSProperties;
}
