import { DetailedHTMLProps, FC, HTMLAttributes, ReactNode, useMemo } from 'react';
import { AlertClose } from '@/icons';
import { Typography } from '@/my-ui-core';
import classNames from 'classnames';
import styles from './TagWithImage.module.scss';

export interface TagWithImageBaseProps {
  label: ReactNode;
  imageSource: string;
  imagePosition?: 'start' | 'end';
  actionIcon?: React.FC<React.SVGProps<SVGSVGElement>>;
  showActionIcon?: boolean;
  onActionIconClick?: () => void;
  onClick?: () => void;
  className?: string;
}

export type TagWithImageProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, null> & TagWithImageBaseProps;

const TagWithImage: FC<TagWithImageProps> = ({
  label,
  imageSource,
  className,
  imagePosition = 'start',
  actionIcon: ActionIcon = AlertClose,
  showActionIcon,
  onActionIconClick,
  onClick
}) => {
  const labelClasses = useMemo(
    () =>
      classNames(styles['Label'], {
        [styles['Label--left-margin']]: imagePosition === 'start',
        [styles['Label--right-margin']]: imagePosition === 'end'
      }),
    [imagePosition]
  );

  const ActionIconComponent = () => (
    <ActionIcon
      width={10}
      height={10}
      className={classNames(styles['ActionIcon'], {
        [styles['ActionIcon--left-margin']]: imagePosition === 'start',
        [styles['ActionIcon--right-margin']]: imagePosition === 'end'
      })}
      onClick={(e) => {
        e.stopPropagation();
        onActionIconClick?.();
      }}
    />
  );

  return (
    <div
      className={classNames(
        styles['TagImageWrapper'],
        { [styles['TagImageWrapper--hover']]: showActionIcon },
        className
      )}
      onClick={() => onClick?.()}>
      {imagePosition === 'start' ? (
        <div className={styles.Image}>
          <img src={imageSource} />
        </div>
      ) : (
        showActionIcon && <ActionIconComponent />
      )}
      <div className={labelClasses}>
        <Typography component='span' variant='p4'>
          {label}
        </Typography>
      </div>
      {imagePosition === 'end' ? (
        <div className={styles.Image}>
          <img src={imageSource} />
        </div>
      ) : (
        showActionIcon && <ActionIconComponent />
      )}
    </div>
  );
};

export default TagWithImage;
