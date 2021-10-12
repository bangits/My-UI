import { Avatar, Badge } from '@/components';
import React from 'react';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.Header}>
      <div className={styles.HeaderContainer}>
        <Badge />
        <Avatar className={styles.AvatarContainer} />
      </div>
    </header>
  );
};

export default Header;
