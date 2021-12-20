import { GoToLivePopUp } from '@/icons';
import { Icons } from '@/icons/icon-pack';
import { Button } from '@/my-ui-core';
import { action } from '@storybook/addon-actions';
import { text, withKnobs } from '@storybook/addon-knobs';
import { dialog } from '.';
import Dialog from './Dialog';
import DialogProvider from './DialogProvider';

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
            mode: 'dark',
            actions: [
              {
                icon: <Icons.EditIcon />,
                label: 'Edit',
                onClick: action('editOnClick')
              },
              {
                icon: <Icons.TrashIndicator />,
                label: 'Delete',
                onClick: action('deleteOnClick'),
                position: 'left'
              }
            ]
          });
        }}>
        Click to open dialog with actions
      </Button>

      <DialogProvider />
    </>
  );
};
