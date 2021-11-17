import { withKnobs } from '@storybook/addon-knobs';
import Dialog from './Dialog';
import DialogHeader from './DialogHeader';
import { GoToLivePopUp } from '@/icons';
import DialogBody from './DialogBody';
import { Button, Typography } from '@/my-ui-core';
import DialogActions from './DialogActions';
import { useState } from 'react';
import { CSSTransition, Transition } from 'react-transition-group';

export default {
  component: Dialog,
  decorators: [withKnobs],
  title: 'components/Pop Ups/Dialog'
};

export const Default = () => {
  const [isOpened, setOpened] = useState(false);

  const toggleOpened = () => setOpened(!isOpened);

  return (
    <>
      <Button type='button' onClick={toggleOpened}>
        Click to open
      </Button>

      <Dialog onClose={() => setOpened(false)} isOpened={isOpened}>
        <DialogHeader title='Go to Live' icon={<GoToLivePopUp />} />
        <DialogBody>
          {/* <div className={styles.PopUpText}> */}
          <Typography component='p' variant='p3'>
            Do you want to publish <span>"Albatros"</span> partner ?
          </Typography>
          {/* </div> */}
        </DialogBody>
        <DialogActions onClose={toggleOpened} cancelButtonText='Cancel' submitButtonText='Publish' />
      </Dialog>
    </>
  );
};
