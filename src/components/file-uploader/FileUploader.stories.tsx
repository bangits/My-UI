import CardImg from '@/components/card-img/CardImg';
import { withKnobs } from '@storybook/addon-knobs';
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

              setPreview(`data:image/jpg;base64,${fileRes}`);
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
        loadingPercent={70}
      />

      <br />
      <br />

      <div style={{ width: 280 }}>
        <CardImg title='Uploaded Image' image={error ? '' : preview} />
      </div>
    </>
  );
};
