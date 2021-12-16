import { text, withKnobs, optionsKnob } from '@storybook/addon-knobs';
import Dialog from './Dialog';
import { GoToLivePopUp } from '@/icons';
import { Button } from '@/my-ui-core';
import DialogProvider from './DialogProvider';
import { dialog } from '.';
import { action } from '@storybook/addon-actions';

export default {
  component: Dialog,
  decorators: [withKnobs],
  title: 'components/Pop Ups/Dialog'
};

export const Default = () => {
  const title = text('title', 'Go to Live');
  const cancelButtonText = text('cancelButtonText', 'Cancel');
  const submitButtonText = text('submitButtonText', 'Publish');

  return (
    <>
      <Button
        type='button'
        onClick={() => {
          dialog.acceptionDialog({
            title,
            description: (
              <>
                Do you want to publish <strong>"Albatros"</strong> partner ?
              </>
            ),
            icon: <GoToLivePopUp />,
            cancelButtonText,
            submitButtonText,
            onCancel: action('onCancel'),
            onSubmit: (closeDialog) => {
              action('onSubmit')();

              closeDialog();
            }
          });
        }}>
        Click to open
      </Button>

      <br />

      <Button
        type='button'
        onClick={() => {
          dialog.dialogWithActions({
            title,
            size: 'md',
            mode: 'dark'
          });
        }}>
        Click to open dialog with actions
      </Button>

      <DialogProvider />
    </>
  );
};
