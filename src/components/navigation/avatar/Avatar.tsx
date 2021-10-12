import styles from './Avatar.module.scss';
import { IComponent } from '@/types';
import React, { FC } from 'react';
import AvatarImg from '@/images/avatar.png';
import { Card, Typography } from '@/components';
import SubMenuItems from '../sidebar/sidebar-components/SubMenuItems';
import { HomeIcon } from '@/icons';

const Avatar: FC<IComponent> = () => {
  return (
    <div className={styles.Avatar}>
      <span className={styles.AvatarLabel}>Evgenia</span>
      <div className={styles.AvatarImg}>
        <img src={AvatarImg} alt='avatar' />
      </div>
      <Card borderRadius={0.8} className={styles.AvatarDropdownCard}>
        <Typography className={styles.AvatarDropdownTitle} variant='p5' color='primary'>
          Profile Settings
        </Typography>
        <SubMenuItems label='asdsda' />
        <ul className={styles.AvatarDropdownMenu}>
          <li>
            <SubMenuItems icon={<HomeIcon />} label='asdsda' />
          </li>
          <li>
            <SubMenuItems icon={<HomeIcon />} label='asdsda' />
          </li>
          <li>
            <SubMenuItems icon={<HomeIcon />} label='asdsda' />
          </li>
        </ul>
        <SubMenuItems label='asdsda' />
      </Card>
    </div>
  );
};

export default Avatar;
