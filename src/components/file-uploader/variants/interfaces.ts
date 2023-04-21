import { UIColors } from '@/types';

export interface RenderElProps {
  imageSrc?: string;
  uploadedFile?: File | null;
  forceShowUploader?: boolean;
  handleEnter?: (e: React.DragEvent<HTMLDivElement>) => void;
  handleLeave?: (e: React.DragEvent<HTMLDivElement>) => void;
  handleOver?: (e: React.DragEvent<HTMLDivElement>) => void;
  handleUpload?: (e: React.DragEvent<HTMLDivElement> | React.ChangeEvent<HTMLInputElement>) => Promise<void>;
  handleRemove?: () => void;
  isLocalUploadedImage?: boolean;
  highlight?: boolean;
  fullWidth?: boolean;
  disabled?: boolean;
  dragFileText?: string;
  browseText?: string;
  accept?: string;
  indicatorColor?: UIColors;
  loadingPercent?: number;
}
