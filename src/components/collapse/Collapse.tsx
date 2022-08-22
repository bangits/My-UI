import { Icons } from '@/my-ui-core';
import { ComponentType, IComponent } from '@/types';
import classNames from 'classnames';
import { FC, PropsWithChildren, ReactNode, useCallback, useState } from 'react';
import { IconButton } from '../inputs-and-elements';
import styles from './Collapse.module.scss';

export interface CollapseProps extends IComponent {
  title?: ReactNode;

  opened?: boolean;
  defaultOpened?: boolean;
  openIcon?: ReactNode;
  closeIcon?: ReactNode;
  component?: ComponentType;

  onToggle?(): void;
}

const Collapse: FC<PropsWithChildren<CollapseProps>> = ({
  children,
  title,
  closeIcon,
  openIcon,
  defaultOpened = false,
  opened,
  onToggle,
  component: Component = 'div',
  className,
  ...props
}) => {
  // eslint-disable-next-line prefer-const
  let [isCollapseOpened, setCollapseOpened] = useState(defaultOpened);
  console.log('🚀 ~ file: Collapse.tsx ~ line 27 ~ isCollapseOpened', isCollapseOpened);

  if (opened !== undefined) isCollapseOpened = opened;

  const onCollapseToggle = useCallback(() => {
    setCollapseOpened((prevOpened) => !prevOpened);

    onToggle?.();
  }, [onToggle]);

  return (
    <Component
      {...props}
      className={classNames(
        styles.Collapse,
        {
          [styles['Collapse--opened']]: isCollapseOpened,
          [styles['Collapse--custom-icons']]: openIcon || closeIcon
        },
        className
      )}>
      <div className={styles['Collapse__wrapper']} onClick={onCollapseToggle}>
        <div>{title}</div>
        <IconButton
          className={styles.CollapseButton}
          icon={isCollapseOpened ? openIcon || <Icons.ArrowBottom /> : closeIcon || <Icons.ArrowBottom />}
        />
      </div>

      <div className={styles['Collapse__content']}>{children}</div>
    </Component>
  );
};

export default Collapse;
