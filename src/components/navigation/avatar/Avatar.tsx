import { Card, Typography } from '@/components';
import { useOutsideClickEvent } from '@/helpers';
import { IComponent } from '@/types';
import classNames from 'classnames';
import React, { FC, ReactNode, useEffect, useState } from 'react';
import SubMenuItems from '../sidebar/sidebar-components/SubMenuItems';
import styles from './Avatar.module.scss';
import { getMyUIPrefix } from '@/configs';
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
    <div className={classNames(styles.Avatar, className, `${getMyUIPrefix()}-Avatar`)}>
      <div className={classNames(styles.AvatarWrapper, className, 'AvatarWrapper', `${getMyUIPrefix()}-AvatarWrapper`)}>
        <span
          className={classNames(styles.AvatarLabel, `${getMyUIPrefix()}-AvatarLabel`)}
          onClick={() => setOpen(!open)}>
          {avatarLabel}
        </span>
        <div className={classNames(styles.AvatarImg, `${getMyUIPrefix()}-AvatarImg`)}>
          <img
            src={imageSource}
            alt='avatar'
            onClick={() => setOpen(!open)}
            className={`${getMyUIPrefix()}-AvatarImgSize`}
          />
        </div>
      </div>
      <div
        className={classNames(`${getMyUIPrefix()}-AvatarDropDownCardToggle`, {
          [styles.DropDownShow]: open,
          [styles.DropDownHide]: !open
        })}>
        <Card
          borderRadius={0.8}
          className={classNames(styles.AvatarDropdownCard, `${getMyUIPrefix()}-AvatarDropdownCard`)}>
          <Typography
            component='span'
            className={classNames(styles.AvatarDropdownTitle, `${getMyUIPrefix()}-AvatarDropdownTitle`)}
            variant='p5'
            color='primary'>
            {dropdownTitle}
          </Typography>
          <SubMenuItems
            className={classNames(styles.SubMenuItems, `${getMyUIPrefix()}-SubMenuItems`)}
            label={topButtonLabel}
            onClick={onTopButtonClick}
            style={{ marginLeft: '0' }}
          />

          <hr className={classNames(styles.AvatarDropdownDivider, `${getMyUIPrefix()}-AvatarDropdownDivider`)} />

          <ul className={classNames(styles.AvatarDropdownMenu, `${getMyUIPrefix()}-AvatarDropdownMenu`)}>
            {dropdownLinks.map((items, idx) => (
              <li key={idx}>
                <SubMenuItems
                  className={classNames(styles.SubMenuItems, `${getMyUIPrefix()}-SubMenuItems`)}
                  onClick={items.onClick}
                  icon={items.icon}
                  label={items.label}
                />
              </li>
            ))}
          </ul>

          <hr className={classNames(styles.AvatarDropdownDivider, `${getMyUIPrefix()}-AvatarDropdownDivider`)} />
          <SubMenuItems
            className={classNames(styles.SubMenuItems, `${getMyUIPrefix()}-SubMenuItems`)}
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
