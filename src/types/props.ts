import { ReactHTML, ReactSVG } from 'react';
export type ComponentType = keyof ReactHTML | keyof ReactSVG;

export interface IComponent {
  className?: string;
}
