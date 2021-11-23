import { typedMemo } from '@/helpers';
import { BreadcrumbNext } from '@/icons';
import { ComponentType, IComponent } from '@/types';
import classNames from 'classnames';
import React, { FC } from 'react';
import styles from './Breadcrumb.module.scss';
import { getMyUIPrefix } from '@/configs';
export interface BreadcrumbProps extends IComponent {
  links: {
    isRedirect?: boolean;
    linkComponent?: ComponentType;
    label: string;
    componentProps?: any;
  }[];
  wrapperComponent?: ComponentType;
  itemComponent?: ComponentType;
}

const Breadcrumb: FC<BreadcrumbProps> = ({
  links,
  wrapperComponent: Component = 'ul',
  itemComponent: ItemComponent = 'li'
}) => {
  return (
    <Component className={classNames(styles.BreadcrumbBase, `${getMyUIPrefix()}-BreadcrumbBase`)}>
      {links.map(({ linkComponent: LinkComponent = 'a', label, componentProps = {}, isRedirect }, index) => (
        <>
          <ItemComponent key={index} className={classNames(styles.BreadcrumbItem, `${getMyUIPrefix()}-BreadcrumbItem`)}>
            <LinkComponent
              {...componentProps}
              className={classNames(styles.BreadcrumbText, `${getMyUIPrefix()}-BreadcrumbText`, {
                [styles.BreadcrumbLink]: isRedirect
              })}>
              {label}
            </LinkComponent>
          </ItemComponent>
          {index !== links.length - 1 && (
            <div className={classNames(styles.BreadcrumbIconContainer, `${getMyUIPrefix()}-BreadcrumbIconContainer`)}>
              <BreadcrumbNext />
            </div>
          )}
        </>
      ))}
    </Component>
  );
};

export default typedMemo(Breadcrumb);
