import { DetailedHTMLProps, FC, HTMLAttributes, ReactNode, useMemo } from 'react';
import { Typography } from '@/my-ui-core';
import classNames from 'classnames';
import styles from './TagWithImage.module.scss';

export interface TagWithImageBaseProps {
  label: ReactNode;
  imageSource: string;
  imagePosition?: 'start' | 'end';
  className?: string;
}

export type TagWithImageProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, null> & TagWithImageBaseProps;

const TagWithImage: FC<TagWithImageProps> = ({ label, imageSource, className, imagePosition = 'start' }) => {
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
          <img src={imageSource} />
        </div>
      )}
      <div className={labelClasses}>
        <Typography component='span' variant='p4'>
          {label}
        </Typography>
      </div>
      {imagePosition === 'end' && (
        <div className={styles.Image}>
          <img src={imageSource} />
        </div>
      )}
    </div>
  );
};

export default TagWithImage;
