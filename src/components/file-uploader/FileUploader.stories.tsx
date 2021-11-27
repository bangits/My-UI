import CardImg from '@/components/card-img/CardImg';
import { FileUploaderErrors, Typography } from '@/my-ui-core';
import { number, text, withKnobs } from '@storybook/addon-knobs';
import React from 'react';
import FileUploader from './FileUploader';

export default {
  title: 'components/File Uploader/File Uploader',
  component: FileUploader,
  decorators: [withKnobs]
};

export const Default = () => {
  const [preview, setPreview] = React.useState('');
  const [error, setError] = React.useState<any>();

  return (
    <>
      <FileUploader
        onChange={(file) => {
          if (file) {
            const reader = new FileReader();
            reader.readAsBinaryString(file);

            reader.onload = () => {
              const fileRes = btoa(reader.result as string);

              setTimeout(() => {
                setPreview(`data:image/jpg;base64,${fileRes}`);
              }, 2000);
            };

            reader.onerror = () => {
              throw new Error('There is a problem while uploading...');
            };
          } else {
            setPreview('');
          }
        }}
        onError={(error) => {
          setError(error);
        }}
        loadingPercent={75}
        imageURL={
          !preview
            ? 'https://cutewallpaper.org/21/loading-gif-transparent-background/Download-Loading-Gif-Generator-Transparent-Background-PNG-.gif'
            : preview
        }
        minWidth={number('minWidth', 40)}
        maxWidth={number('maxWidth', 2000)}
        minHeight={number('minHeight', 40)}
        maxHeight={number('maxHeight', 2000)}
        minSize={number('minSize', 1000)}
        maxSize={number('maxSize', 5000000)}
        accept={text('accept', 'image')}
      />

      <br />
      <br />

      <div style={{ width: 280 }}>
        <CardImg title='Uploaded Image' image={preview} />
      </div>
      <br />
      <br />
      <Typography color='danger'>
        {error && error.type === FileUploaderErrors.MAX_HEIGHT
          ? 'Height is big!'
          : error?.type === FileUploaderErrors.MAX_HEIGHT
          ? 'Height is small!'
          : error?.type === FileUploaderErrors.MAX_WIDTH
          ? 'Width is big!'
          : error?.type === FileUploaderErrors.MIN_WIDTH
          ? 'Width is small!'
          : error?.type === FileUploaderErrors.MIN_SIZE
          ? 'Size is small!'
          : error?.type === FileUploaderErrors.MAX_SIZE
          ? 'Size is big!'
          : ''}
      </Typography>
    </>
  );
};
