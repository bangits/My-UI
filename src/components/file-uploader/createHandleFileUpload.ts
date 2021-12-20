import { getImageByFile } from '@/helpers';
import { FileUploaderErrors } from '@/my-ui-core';

export interface BaseFileUploaderProps {
  minWidth?: number;
  maxWidth?: number;
  minHeight?: number;
  maxHeight?: number;
  minSize?: number;
  maxSize?: number;
  accept?: string;
  onChange?: (file: File) => void;
  onError?: (error: { type: FileUploaderErrors; file }) => void;
  onImageSourceChange?: (imageSource: string) => void;
}

export const createHandleFileUpload =
  ({
    onError,
    onChange,
    maxHeight = 2000,
    maxSize = 5000000,
    minHeight = 40,
    minSize = 1000,
    minWidth = 40,
    accept = 'image/*',
    maxWidth = 2000,
    onImageSourceChange
  }: BaseFileUploaderProps) =>
  async (e: React.DragEvent<HTMLDivElement> | React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    e.stopPropagation();

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

      if (!error && onImageSourceChange) onImageSourceChange(imageSrc);
    }

    if (file.size > maxSize && onError) error = { type: FileUploaderErrors.MAX_SIZE, file };

    if (file.size < minSize && onError) error = { type: FileUploaderErrors.MIN_SIZE, file };

    if (error && onError) return onError(error);

    onChange(file);
  };
