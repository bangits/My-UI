import { withKnobs } from '@storybook/addon-knobs';
import Drawer from './Drawer';
import { useState } from 'react';
import { Button } from '../inputs-and-elements';

export default {
  component: Drawer,
  decorators: [withKnobs],
  title: 'components/Drawer/Drawer'
};

export const Default = () => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <>
      <Button onClick={handleOpen} variant='ghost'>
        Open Drawer
      </Button>
      <Drawer opened={open} closeOnOutsideClick title='drawer title' onClose={handleClose}>
        <div>Content</div>
      </Drawer>
    </>
  );
};
