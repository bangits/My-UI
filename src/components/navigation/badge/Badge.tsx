import React, { FC, ReactNode } from 'react';
import { IComponent } from '@/types';

export interface Badge extends IComponent {
  quantity: number;
  icon: ReactNode;
}

const Badge: FC<Badge> = () => {
  return <>Badge</>;
};

export default Badge;
