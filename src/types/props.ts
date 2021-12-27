import React, { CSSProperties } from 'react';

export type ComponentType = keyof JSX.IntrinsicElements | React.ComponentType;

export interface IComponent {
  className?: string;
  style?: CSSProperties;
}
