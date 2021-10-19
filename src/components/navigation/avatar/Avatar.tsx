import { IComponent } from '@/types';
import React, { FC, ReactNode, useState, useEffect } from 'react';
import styles from './Avatar.module.scss';
import { Card, Typography } from '@/components';
import SubMenuItems from '../sidebar/sidebar-components/SubMenuItems';
import classNames from 'classnames';
import useOutsideClickEvent from '../../../helpers/useOutsideClickEvent';

export interface AvatarProps extends IComponent {
  imageSource?: string;
  avatarLabel: string;
  dropdownTitle?: string;
  topButtonLabel?: string;
  onTopButtonClick?: () => void;
  dropdownLinks?: {
    label?: string;
    icon?: ReactNode;
    onClick?: () => void;
  }[];
  bottomButtonLabel?: string;
  onBottomButtonClick?: () => void;
}

const Avatar: FC<AvatarProps> = ({
  imageSource,
  avatarLabel,
  dropdownTitle,
  topButtonLabel,
  bottomButtonLabel,
  onTopButtonClick,
  onBottomButtonClick,
  dropdownLinks,
  className
}) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const subscriber = useOutsideClickEvent('.AvatarWrapper');
    subscriber.subscribe(() => {
      setOpen(false);
    });
    return () => {
      subscriber.unsubscribe();
    };
  }, []);

  return (
    <div className={classNames(styles.Avatar, className)}>
      <div className={classNames(styles.AvatarWrapper, className, 'AvatarWrapper')}>
        <span className={styles.AvatarLabel} onClick={() => setOpen(!open)}>
          {avatarLabel}
        </span>
        <div className={styles.AvatarImg}>
          <img src={imageSource} alt='avatar' onClick={() => setOpen(!open)} />
        </div>
      </div>
      <div
        className={classNames({
          [styles.DropDownShow]: open,
          [styles.DropDownHide]: !open
        })}>
        <Card borderRadius={0.8} className={styles.AvatarDropdownCard}>
          <Typography className={styles.AvatarDropdownTitle} variant='p5' color='primary'>
            {dropdownTitle}
          </Typography>
          <SubMenuItems
            className={styles.SubMenuItems}
            label={topButtonLabel}
            onClick={onTopButtonClick}
            style={{ marginLeft: '0' }}
          />

          <hr className={styles.AvatarDropdownDivider} />

          <ul className={styles.AvatarDropdownMenu}>
            {dropdownLinks.map((items, idx) => (
              <li key={idx}>
                <SubMenuItems
                  className={styles.SubMenuItems}
                  onClick={items.onClick}
                  icon={items.icon}
                  label={items.label}
                />
              </li>
            ))}
          </ul>

          <hr className={styles.AvatarDropdownDivider} />
          <SubMenuItems
            className={styles.SubMenuItems}
            label={bottomButtonLabel}
            onClick={onBottomButtonClick}
            style={{ marginLeft: '0' }}
          />
        </Card>
      </div>
    </div>
  );
};

export default Avatar;
