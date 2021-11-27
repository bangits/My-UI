import { LoadingIndicator, Typography } from '@/my-ui-core';
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
  onError?: (error: { type: FileUploaderErrors; file: File }) => void;
  loadingPercent?: number;
  imageURL?: string;
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
  imageURL,
  onChange,
  onError
}) => {
  const [highlight, setHighlight] = useState<boolean>(false);
  const [drop, setDrop] = useState<boolean>(false);
  const [uploadedFile, setUploadedFile] = useState<any>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleEnter = useCallback(
    (e) => {
      e.preventDefault();
      e.stopPropagation();

      setHighlight(true);
    },
    [setHighlight]
  );

  const handleOver = useCallback(
    (e) => {
      e.preventDefault();
      e.stopPropagation();

      setHighlight(true);
    },
    [setHighlight]
  );

  const handleLeave = useCallback(
    (e) => {
      e.preventDefault();
      e.stopPropagation();
      setHighlight(false);
    },
    [setHighlight]
  );

  const handleUpload = useCallback(
    (e) => {
      e.preventDefault();
      e.stopPropagation();

      setHighlight(false);
      setDrop(true);

      const [file] = e.target.files || e.dataTransfer.files;

      if (accept.includes('image')) {
        const reader = new FileReader();
        const image = new Image();

        reader.readAsDataURL(file);
        reader.onload = (_file): void => {
          image.src = _file.target.result as string;
          image.onload = function () {
            if (image.width > maxWidth && onError) {
              return onError({ type: FileUploaderErrors.MAX_WIDTH, file: file });
            } else if (image.width < minWidth && onError) {
              return onError({ type: FileUploaderErrors.MIN_WIDTH, file: file });
            } else if (image.height > maxHeight && onError) {
              return onError({ type: FileUploaderErrors.MAX_HEIGHT, file: file });
            } else if (image.height < minHeight && onError) {
              return onError({ type: FileUploaderErrors.MIN_HEIGHT, file: file });
            } else if (file.size > maxSize && onError) {
              return onError({ type: FileUploaderErrors.MAX_SIZE, file: file });
            } else if (file.size < minSize && onError) {
              return onError({ type: FileUploaderErrors.MIN_SIZE, file: file });
            } else {
              onChange(file);
              setIsLoading(true);
            }
          };
        };
      }

      if (file.size > maxSize && onError && !accept.includes('image')) {
        return onError({ type: FileUploaderErrors.MAX_SIZE, file: file });
      } else if (file.size < minSize && onError && !accept.includes('image')) {
        return onError({ type: FileUploaderErrors.MIN_SIZE, file: file });
      } else if (!accept.includes('image')) {
        onChange(file);
        setIsLoading(true);
      }

      setUploadedFile(file);
    },
    [onChange, setHighlight, setDrop, drop, onError]
  );

  return (
    <>
      {!isLoading ? (
        <div
          onDragEnter={(e) => handleEnter(e)}
          onDragLeave={(e) => handleLeave(e)}
          onDragOver={(e) => handleOver(e)}
          onDrop={(e) => handleUpload(e)}
          className={classNames({
            [styles.DropzoneBase]: !highlight,
            [styles.DropIndicator]: highlight
          })}>
          <Typography component='span' variant='p4'>
            Drag file here{' '}
            <div className={styles['DropzoneBase--browse']}>
              Browse
              {!highlight && (
                <input
                  type='file'
                  title=''
                  accept={accept}
                  onChange={(e) => handleUpload(e)}
                  className={styles['DropzoneBase--upload']}
                />
              )}
            </div>
          </Typography>
        </div>
      ) : (
        <LoadingIndicator
          variant='square'
          color='primary'
          percent={loadingPercent}
          onClick={() => {
            setDrop(false);
            onChange(null);
            setIsLoading(false);
          }}
          label={uploadedFile?.name}
          imageSrc={imageURL}
        />
      )}
    </>
  );
};

export default FileUploader;
