import { typedMemo } from '@/helpers';
import { IComponent } from '@/types';
import classNames from 'classnames';
import React, { FC } from 'react';
import styles from './Breadcrumb.module.scss';

export interface BreadcrumbProps extends IComponent {
  links?: { isRedirect?: boolean; link?: string; label?: string }[];
  activeLink?: boolean;
}

const Breadcrumb: FC<BreadcrumbProps> = ({ links, activeLink }) => {
  return (
    <ul className={classNames(styles.BreadcrumbBase)}>
      {links.map((link) => (
        <>
          <li>
            <a href='#'>{link.label}</a>
          </li>
        </>
      ))}
    </ul>
  );
};

export default typedMemo(Breadcrumb);
