import { action } from '@storybook/addon-actions';
import { boolean, number, text, withKnobs } from '@storybook/addon-knobs';
import FileUploader from './FileUploader';
import { LinkFileUploader, RenderElProps } from './variants';

export default {
  title: 'components/File Uploader/File Uploader',
  component: FileUploader,
  decorators: [withKnobs]
};

export const InputUploader = () => {
  return (
    <>
      <FileUploader
        onChange={action('onChange')}
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
  return (
    <>
      <FileUploader
        browseText='Attach'
        renderEl={(props: RenderElProps) => <LinkFileUploader {...props} />}
        onChange={action('onChange')}
        onError={action('onError')}
        loadingPercent={100}
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
