import { typedMemo } from '@/helpers';
import { BreadcrumbNext } from '@/icons';
import { ComponentType, IComponent } from '@/types';
import classNames from 'classnames';
import React, { FC } from 'react';
import styles from './Breadcrumb.module.scss';

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
    <Component className={classNames(styles.BreadcrumbBase)}>
      {links.map(({ linkComponent: LinkComponent = 'a', label, componentProps = {}, isRedirect }, index) => (
        <>
          <ItemComponent key={index} className={styles.BreadcrumbItem}>
            <LinkComponent
              {...componentProps}
              className={classNames(styles.BreadcrumbText, { [styles.BreadcrumbLink]: isRedirect })}>
              {label}
            </LinkComponent>
          </ItemComponent>
          {index !== links.length - 1 && (
            <div className={styles.BreadcrumbIconContainer}>
              <BreadcrumbNext width='1rem' />
            </div>
          )}
        </>
      ))}
    </Component>
  );
};

export default typedMemo(Breadcrumb);
