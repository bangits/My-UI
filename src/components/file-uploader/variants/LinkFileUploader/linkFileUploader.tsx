import { useCallback, useRef } from 'react';
import { Icons, Typography } from '@/my-ui-core';
import { RenderElProps } from '../interfaces';
import styles from './linkFileUploader.module.scss';

export const LinkFileUploader = ({
  browseText,
  loadingPercent,
  uploadedFile,
  isLocalUploadedImage,
  imageSrc,
  handleUpload,
  handleRemove,
  accept
}: RenderElProps) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const onRemove = useCallback(() => {
    inputRef.current.value = null;
    handleRemove();
  }, []);

  const handleClick = useCallback(() => {
    inputRef?.current.click();
  }, []);

  return (
    <div className={styles.Container}>
      <div onClick={handleClick} className={styles.Wrapper}>
        <input accept={accept} hidden ref={inputRef} type='file' onChange={handleUpload} />
        <div className={styles.Icon}>
          <Icons.Attach color='currentColor' width={14} height={14} />
        </div>
        <Typography component='span' className={styles.Text} variant='p4' color='primary'>
          {browseText}
        </Typography>
      </div>
      {uploadedFile && isLocalUploadedImage && (
        <>
          <div className={styles.LoadingBar}></div>
          <Typography className={styles.LoadingPercent} variant='p4' color='primary' fontWeight={600}>
            {loadingPercent}%
          </Typography>
        </>
      )}
      {!isLocalUploadedImage && imageSrc && (
        <div className={styles.TrashIcon}>
          <Icons.TrashIndicator color='currentColor' onClick={onRemove} width={14} height={14} />
        </div>
      )}
    </div>
  );
};
