import { UIColors } from '@/types';
import React, { FC, useCallback, useEffect, useMemo, useState } from 'react';
import { BaseFileUploaderProps, createHandleFileUpload } from './createHandleFileUpload';
import { InputFileUploader, RenderElProps } from './variants';

export interface FileUploaderProps extends BaseFileUploaderProps {
  renderEl?: (props: RenderElProps) => JSX.Element;
  loadingPercent?: number;
  dragFileText?: string;
  browseText?: string;
  imageSrc?: string;
  indicatorColor?: UIColors;
  forceShowUploader?: boolean;
  fullWidth?: boolean;
  disabled?: boolean;
}

const FileUploader: FC<FileUploaderProps> = ({
  renderEl = (props: RenderElProps) => <InputFileUploader {...props} />,
  minWidth = 40,
  maxWidth = 2000,
  minHeight = 40,
  maxHeight = 2000,
  minSize = 1000,
  maxSize = 5000000,
  accept = 'image/*',
  loadingPercent,
  onChange,
  onRemove,
  onError,
  dragFileText = 'Drag file here ',
  browseText = 'Browse',
  imageSrc,
  indicatorColor = 'success',
  forceShowUploader,
  fullWidth,
  disabled
}) => {
  const [highlight, setHighlight] = useState<boolean>(false);

  const [isLocalUploadedImage, setIsLocalUploadedImage] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<File>(null);
  const [uploadedImageSource, setUploadedImageSource] = useState(imageSrc || '');

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
        if (disabled) return;

        onChange?.(file);
        setUploadedFile(file);
      },
      onError,
      onImageSourceChange: setUploadedImageSource
    }),
    [onChange, onError, accept, disabled]
  );

  const handleRemove = useCallback(() => {
    if (disabled) return;

    setUploadedImageSource('');
    setIsLocalUploadedImage(false);
    setUploadedFile(null);
    onChange?.(null);
    onRemove?.();
  }, [disabled]);

  const renderElProps: RenderElProps = useMemo(
    () => ({
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
      isLocalUploadedImage,
      indicatorColor,
      loadingPercent,
      imageSrc: uploadedImageSource,
      handleRemove
    }),
    [
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
      isLocalUploadedImage,
      indicatorColor,
      loadingPercent,
      uploadedImageSource,
      handleRemove
    ]
  );

  useEffect(() => {
    setIsLocalUploadedImage(!uploadedImageSource);
    setUploadedImageSource(imageSrc);

    if (!imageSrc) setUploadedFile(null);
  }, [imageSrc]);

  return <>{renderEl(renderElProps)}</>;
};

export default FileUploader;
