import { typedMemo } from '@/helpers';
import { ComponentType, IComponent } from '@/types';
import classNames from 'classnames';
import React, { FC } from 'react';
import styles from './Breadcrumb.module.scss';

export interface BreadcrumbProps extends IComponent, ComponentType {
  links: {
    isRedirect?: boolean;
    linkComponent?: ComponentType;
    label: string;
    isClickable?: boolean;
    componentProps?: any;
  }[];
  activeLink: number;
  wrapperComponent?: ComponentType;
  itemComponent?: ComponentType;
}

const Breadcrumb: FC<BreadcrumbProps> = ({
  links,
  activeLink = 0,
  wrapperComponent: Component = 'ul',
  itemComponent: ItemComponent = 'li'
}) => {
  return (
    <Component className={classNames(styles.BreadcrumbBase)}>
      {links.map(({ linkComponent: LinkComponent = 'a', label, componentProps = {} }, key) => (
        <ItemComponent key={key}>
          <LinkComponent {...componentProps}>{label}</LinkComponent>
        </ItemComponent>
      ))}
    </Component>
  );
};

export default typedMemo(Breadcrumb);
