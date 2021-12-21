import { TrashIndicator } from '@/icons';
import { LoadingIndicator, Typography } from '@/my-ui-core';
import { UIColors } from '@/types';
import classNames from 'classnames';
import React, { FC, useCallback, useState } from 'react';
import { BaseFileUploaderProps, createHandleFileUpload } from './createHandleFileUpload';
import styles from './FileUploader.module.scss';

export interface FileUploaderProps extends BaseFileUploaderProps {
  loadingPercent?: number;
  dragFileText?: string;
  browseText?: string;
  imageSrc?: string;
  indicatorColor?: UIColors;
  forceShowUploader?: boolean;
}

const FileUploader: FC<FileUploaderProps> = ({
  minWidth = 40,
  maxWidth = 2000,
  minHeight = 40,
  maxHeight = 2000,
  minSize = 1000,
  maxSize = 5000000,
  accept = 'image/*',
  loadingPercent,
  onChange,
  onError,
  dragFileText = 'Drag file here ',
  browseText = 'Browse',
  imageSrc,
  indicatorColor = 'success',
  forceShowUploader
}) => {
  const [highlight, setHighlight] = useState<boolean>(false);

  const [uploadedFile, setUploadedFile] = useState<File>(null);

  const [uploadedImageSource, setUploadedImageSource] = useState('');

  const handleEnter = useCallback(
    (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      e.stopPropagation();

      setHighlight(true);
    },
    [setHighlight]
  );

  const handleOver = useCallback(
    (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      e.stopPropagation();

      setHighlight(true);
    },
    [setHighlight]
  );

  const handleLeave = useCallback(
    (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      e.stopPropagation();

      setHighlight(false);
    },
    [setHighlight]
  );

  const handleUpload = useCallback(
    createHandleFileUpload({
      minWidth,
      maxWidth,
      minHeight,
      maxHeight,
      minSize,
      maxSize,
      accept,
      onChange: (file) => {
        onChange(file);
        setUploadedFile(file);
      },
      onError,
      onImageSourceChange: setUploadedImageSource
    }),
    [onChange, onError, accept]
  );

  return (
    <>
      {!uploadedFile && !forceShowUploader ? (
        <div
          onDragEnter={handleEnter}
          onDragLeave={handleLeave}
          onDragOver={handleOver}
          onDrop={handleUpload}
          className={classNames({
            [styles.DropzoneBase]: !highlight,
            [styles.DropIndicator]: highlight
          })}>
          <Typography component='span' variant='p4'>
            {dragFileText}
            <div className={styles['DropzoneBase--browse']}>
              {browseText}
              {!highlight && (
                <input
                  type='file'
                  title=''
                  accept={accept}
                  onChange={handleUpload}
                  className={styles['DropzoneBase--upload']}
                />
              )}
            </div>
          </Typography>
        </div>
      ) : (
        <LoadingIndicator variant='square' color={indicatorColor} percent={loadingPercent}>
          <div className={styles.GameIndicatorIconWrapper}>
            <span className={styles.GameIndicatorIcon}>
              <img src={imageSrc || uploadedImageSource} alt={uploadedFile?.name} />
            </span>
            <span className={styles.ImageFormatLabel}>{uploadedFile?.name}</span>
          </div>
          <div className={styles.PerconWrapper}>
            <span className={styles.PercentUpload}>{loadingPercent}%</span>
            <button
              type='button'
              onClick={() => {
                setUploadedFile(null);
                onChange(null);
              }}
              className={styles.TrashUploadIcon}>
              <TrashIndicator />
            </button>
          </div>
        </LoadingIndicator>
      )}
    </>
  );
};

export default FileUploader;
