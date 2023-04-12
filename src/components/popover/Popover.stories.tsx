import { withKnobs } from '@storybook/addon-knobs';
import Popover from './Popover';
import { ReactNode, useRef, useState } from 'react';
import { Button } from '../inputs-and-elements/Button';

export default {
  component: Popover,
  decorators: [withKnobs],
  title: 'components/Popover/Popover'
};

export const Default = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const anchorEl = useRef();

  const onClose = (): void => setIsOpen(false);

  const onClick = (): void => setIsOpen(!isOpen);

  return (
    <>
      <div style={{ paddingLeft: '200px', paddingTop: '50px' }}>
        <div ref={anchorEl} style={{ width: 'fit-content' }}>
          <Button onClick={onClick}>Click me</Button>
        </div>
      </div>
      <Popover anchorEl={anchorEl.current} open={isOpen} onClose={onClose}>
        <div>content Popover contentPopover content</div>
      </Popover>
    </>
  );
};
