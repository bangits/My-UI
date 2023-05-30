import { DetailedHTMLProps, FC, HTMLAttributes, ReactNode, useMemo } from 'react';
import { Typography } from '@/my-ui-core';
import classNames from 'classnames';
import styles from './TagWithImage.module.scss';

export interface TagWithImageProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, null> {
  imgSrc: string;
  tagName: ReactNode;
  imagePosition?: 'start' | 'end';
  className?: string;
}

const TagWithImage: FC<TagWithImageProps> = ({ tagName, imgSrc, className, imagePosition = 'start' }) => {
  const labelClasses = useMemo(
    () =>
      classNames(styles['Label'], {
        [styles['Label--left-margin']]: imagePosition === 'start',
        [styles['Label--right-margin']]: imagePosition === 'end'
      }),
    [imagePosition]
  );

  return (
    <div className={classNames(styles['TagImageWrapper'], className)}>
      {imagePosition === 'start' && (
        <div className={styles.Image}>
          <img src={imgSrc} />
        </div>
      )}
      <div className={labelClasses}>
        <Typography component='span' variant='p4'>
          {tagName}
        </Typography>
      </div>
      {imagePosition === 'end' && (
        <div className={styles.Image}>
          <img src={imgSrc} />
        </div>
      )}
    </div>
  );
};

export default TagWithImage;
