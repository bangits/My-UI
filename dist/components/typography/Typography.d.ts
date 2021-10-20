import { ComponentType, IComponent, UIColors } from '../../types';
import { FC } from 'react';
export declare type TypographyVariants = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p1' | 'p2' | 'p3' | 'p4' | 'p5';
export interface TypographyProps extends IComponent {
    variant?: TypographyVariants;
    component?: ComponentType;
    color?: UIColors;
}
declare const Typography: FC<TypographyProps>;
export default Typography;
