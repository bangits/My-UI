import { ReactNode, useEffect, useRef } from 'react';
import { Portal } from '../shared';
import styles from './Drawer.module.scss';
import { Icons } from '@/my-ui-core';

export interface IDrawerProps {
  opened?: boolean;
  title: string;
  onClose: () => void;
  children: ReactNode;
  closeOnOutsideClick?: boolean;
}

const Drawer = ({
  opened = false,
  title = '',
  onClose,
  children,
  closeOnOutsideClick = false
}: IDrawerProps): JSX.Element => {
  const drawerRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (closeOnOutsideClick && drawerRef.current && !drawerRef.current.contains(event.target as Node)) {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  return (
    <Portal>
      <div ref={drawerRef} className={`${styles.drawerContainer} ${opened ? styles.opened : ''}`}>
        <div className={styles.titleContainer}>
          {title && <p className={styles.title}>{title}</p>}
          <Icons.CloseIcon width={12} height={12} fill='#505D6E' onClick={onClose} />
        </div>
        <div className={styles.content}>{children}</div>
      </div>
      <div className={`${opened ? styles.drawerOverlay : ''}`} />
    </Portal>
  );
};

export default Drawer;
