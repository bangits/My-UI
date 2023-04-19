import { Icons, Tooltip, Typography } from '@/my-ui-core';
import { RenderElProps } from '../interfaces';
import styles from './linkFileUploader.module.scss';
import classNames from 'classnames';
import { useCallback, useMemo, useRef } from 'react';

const nameVisibleLength = 11;

export const LinkFileUploader = ({
  browseText,
  loadingPercent,
  uploadedFile,
  handleUpload,
  handleRemove,
  accept
}: RenderElProps) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const onRemove = useCallback(() => {
    inputRef.current.value = null;
    handleRemove();
  }, []);

  const showNameTooltip = useMemo(() => {
    return uploadedFile?.name.length > nameVisibleLength;
  }, [uploadedFile]);

  const handleClick = useCallback(() => {
    inputRef?.current.click();
  }, []);

  return (
    <div className={classNames(styles.container)}>
      <div onClick={handleClick} className={classNames(styles.wrapper)}>
        <input title='' accept={accept} hidden ref={inputRef} type='file' onChange={handleUpload} />
        <div className={classNames(styles.icon)}>
          <Icons.ViewIcon color='currentColor' width={14} height={14} />
        </div>
        <Typography className={classNames(styles.text)} variant='p4' color='primary'>
          {uploadedFile ? (
            <>
              {showNameTooltip ? (
                <Tooltip text={uploadedFile.name}>
                  <span>{uploadedFile.name}</span>
                </Tooltip>
              ) : (
                uploadedFile.name
              )}
            </>
          ) : (
            browseText
          )}
        </Typography>
      </div>
      {uploadedFile && (
        <Typography className={classNames(styles.loadingPercent)} variant='p4' color='primary' fontWeight={600}>
          {loadingPercent}%
        </Typography>
      )}
      {uploadedFile && (
        <div className={classNames(styles.trashIcon)}>
          <Icons.TrashIndicator color='currentColor' onClick={onRemove} width={14} height={14} />
        </div>
      )}
    </div>
  );
};
