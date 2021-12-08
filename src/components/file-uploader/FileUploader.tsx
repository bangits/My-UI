import { getImageByFile } from '@/helpers';
import { TrashIndicator } from '@/icons';
import { LoadingIndicator, Typography } from '@/my-ui-core';
import { UIColors } from '@/types';
import classNames from 'classnames';
import React, { FC, useCallback, useState } from 'react';
import { FileUploaderErrors } from './file-uploader-enums';
import styles from './FileUploader.module.scss';

export interface FileUploaderProps {
  minWidth?: number;
  maxWidth?: number;
  minHeight?: number;
  maxHeight?: number;
  minSize?: number;
  maxSize?: number;
  accept?: string;
  onChange?: (file: File) => void;
  onError?: (error: { type: FileUploaderErrors; file }) => void;
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
    async (e: React.DragEvent<HTMLDivElement> | React.ChangeEvent<HTMLInputElement>) => {
      e.preventDefault();
      e.stopPropagation();

      setHighlight(false);

      // @ts-expect-error Expectng ts error, cause the event type is input change event or drag event
      const uploadedFiles: FileList = (e.target as HTMLInputElement).files || e.dataTransfer.files;

      const file = uploadedFiles[0];

      let error: { type: FileUploaderErrors; file };

      if (!new RegExp(accept?.replace('*', '.*')).test(file.type) && onError)
        return onError({ type: FileUploaderErrors.TYPE, file });

      if (accept.includes('image')) {
        const { width, height, imageSrc } = await getImageByFile(file);

        if (width > maxWidth) error = { type: FileUploaderErrors.MAX_WIDTH, file };

        if (width < minWidth && onError) error = { type: FileUploaderErrors.MIN_WIDTH, file };

        if (height > maxHeight && onError) error = { type: FileUploaderErrors.MAX_HEIGHT, file };

        if (height < minHeight && onError) error = { type: FileUploaderErrors.MIN_HEIGHT, file };

        if (file.size > maxSize && onError) error = { type: FileUploaderErrors.MAX_SIZE, file };

        if (file.size < minSize && onError) error = { type: FileUploaderErrors.MIN_SIZE, file };

        if (!error) setUploadedImageSource(imageSrc);
      }

      if (file.size > maxSize && onError) error = { type: FileUploaderErrors.MAX_SIZE, file };

      if (file.size < minSize && onError) error = { type: FileUploaderErrors.MIN_SIZE, file };

      if (error && onError) return onError(error);

      setUploadedFile(file);

      onChange(file);
    },
    [onChange, onError]
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
              <img src={imageSrc || uploadedImageSource} alt={uploadedFile.name} />
            </span>
            <span className={styles.ImageFormatLabel}>{uploadedFile.name}</span>
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
