import { LoadingIndicator, Typography } from '@/my-ui-core';
import classNames from 'classnames';
import React, { FC, useCallback, useState } from 'react';
import { FileUploaderErrors } from '.';
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
}

const FileUploader: FC<FileUploaderProps> = ({
  minWidth = 40,
  maxWidth = 2000,
  minHeight = 40,
  maxHeight = 2000,
  minSize,
  maxSize,
  accept = 'image/*',
  loadingPercent,
  onChange,
  onError
}) => {
  const [highlight, setHighlight] = useState<boolean>(false);
  const [drop, setDrop] = useState<boolean>(false);
  const [uploadedFile, setUploadedFile] = useState<any>();

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

  function readImage(file) {
    const reader = new FileReader();
    const image = new Image();

    reader.readAsDataURL(file);
    reader.onload = (_file): void => {
      image.src = _file.target.result as string;
      image.onload = function () {
        //@ts-ignore
        if (this.width > maxWidth && onError) {
          onError({ type: FileUploaderErrors.MAX_WIDTH, file: file });
        } //@ts-ignore
        else if (this.width < minWidth && onError) {
          onError({ type: FileUploaderErrors.MIN_WIDTH, file: file });
        }
        //@ts-ignore
        else if (this.height > maxHeight && onError) {
          onError({ type: FileUploaderErrors.MAX_HEIGHT, file: file });
        }
        //@ts-ignore
        else if (this.height < minHeight && onError) {
          onError({ type: FileUploaderErrors.MIN_HEIGHT, file: file });
        }
      };
    };
  }

  const handleUpload = useCallback(
    (e) => {
      e.preventDefault();
      e.stopPropagation();

      setHighlight(false);
      setDrop(true);

      const [file] = e.target.files || e.dataTransfer.files;

      if (file.size > maxSize && onError) {
        onError({ type: FileUploaderErrors.MAX_SIZE, file: file });
      } else if (file.size < minSize && onError) {
        onError({ type: FileUploaderErrors.MIN_SIZE, file: file });
      }
      if (accept.includes('image')) {
        readImage(file);
      }

      setUploadedFile(file);
      onError(null);
      onChange(file);
    },
    [onChange, setHighlight, setDrop, drop, onError]
  );

  return (
    <>
      {!drop ? (
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
          }}
          label={uploadedFile?.name}
        />
      )}
    </>
  );
};

export default FileUploader;
