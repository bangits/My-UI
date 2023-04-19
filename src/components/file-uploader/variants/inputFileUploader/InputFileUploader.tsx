import { TrashIndicator } from '@/icons';
import { Typography, LoadingIndicator } from '@/my-ui-core';
import classNames from 'classnames';
import styles from './inputFileUploader.module.scss';
import { RenderElProps } from '../interfaces';

export const InputFileUploader = ({
  imageSrc,
  uploadedFile,
  forceShowUploader,
  handleEnter,
  handleLeave,
  handleOver,
  handleUpload,
  highlight,
  fullWidth,
  disabled,
  dragFileText,
  browseText,
  accept,
  indicatorColor,
  loadingPercent,
  uploadedImageSource,
  handleRemove
}: RenderElProps) => {
  return (
    <>
      {!imageSrc && !uploadedFile && !forceShowUploader ? (
        <div
          onDragEnter={handleEnter}
          onDragLeave={handleLeave}
          onDragOver={handleOver}
          onDrop={handleUpload}
          className={classNames({
            [styles.DropzoneBase]: !highlight,
            [styles.DropIndicator]: highlight,
            [styles['DropzoneBase--full-width']]: fullWidth,
            [styles['DropzoneBase--disabled']]: disabled
          })}>
          <Typography component='span' variant='p4'>
            {dragFileText}
            <div className={styles['DropzoneBase--browse']}>
              {browseText}
              <input
                type='file'
                title=''
                accept={accept}
                onChange={handleUpload}
                className={styles['DropzoneBase--upload']}
              />
            </div>
          </Typography>
        </div>
      ) : (
        <LoadingIndicator
          variant='square'
          color={indicatorColor}
          percent={loadingPercent}
          fullWidth={fullWidth}
          disabled={disabled}>
          <div className={styles.GameIndicatorIconWrapper}>
            <span className={styles.GameIndicatorIcon}>
              <img src={uploadedImageSource} alt={uploadedFile?.name} />
            </span>
            <span className={styles.ImageFormatLabel}>{uploadedFile?.name}</span>
          </div>
          <div className={styles.PerconWrapper}>
            <span className={styles.PercentUpload}>{loadingPercent}%</span>
            <button type='button' onClick={handleRemove} className={styles.TrashUploadIcon}>
              <TrashIndicator />
            </button>
          </div>
        </LoadingIndicator>
      )}
    </>
  );
};
