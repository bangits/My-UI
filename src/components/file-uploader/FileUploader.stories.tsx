import { useState } from 'react';
import { action } from '@storybook/addon-actions';
import { boolean, number, text, withKnobs } from '@storybook/addon-knobs';
import { LinkFileUploader, RenderElProps } from './variants';
import FileUploader from './FileUploader';

export default {
  title: 'components/File Uploader/File Uploader',
  component: FileUploader,
  decorators: [withKnobs]
};

export const InputUploader = () => {
  return (
    <>
      <FileUploader
        onError={action('onError')}
        loadingPercent={75}
        minWidth={number('minWidth', 40)}
        maxWidth={number('maxWidth', 2000)}
        minHeight={number('minHeight', 40)}
        maxHeight={number('maxHeight', 2000)}
        minSize={number('minSize', 1000)}
        maxSize={number('maxSize', 5000000)}
        accept={text('accept', 'image/*')}
        fullWidth={boolean('fullWidth', true)}
      />
    </>
  );
};

export const LinkUploader = () => {
  const [imageData, setImageData] = useState({
    name: '',
    src: '',
    percent: 0
  });

  return (
    <>
      <FileUploader
        browseText={imageData.name || 'Attach'}
        imageSrc={imageData.src}
        renderEl={(props: RenderElProps) => <LinkFileUploader {...props} />}
        onChange={(file) => {
          if (file) {
            setTimeout(() => {
              setImageData({ name: file?.name, src: 'some src', percent: 100 });
            }, 1000);
          }
        }}
        onRemove={() => setImageData({ name: '', src: '', percent: 0 })}
        onError={action('onError')}
        loadingPercent={imageData.percent}
        minWidth={number('minWidth', 40)}
        maxWidth={number('maxWidth', 2000)}
        minHeight={number('minHeight', 40)}
        maxHeight={number('maxHeight', 2000)}
        minSize={number('minSize', 1000)}
        maxSize={number('maxSize', 5000000)}
        accept={text('accept', 'image/*')}
        fullWidth={boolean('fullWidth', true)}
      />
    </>
  );
};
