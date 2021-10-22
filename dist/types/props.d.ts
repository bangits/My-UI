import { CSSProperties } from 'react';
export declare type ComponentType = keyof JSX.IntrinsicElements;
export interface IComponent {
    className?: string;
    style?: CSSProperties;
}
