import Popover from './Popover';
import { useRef, useState } from 'react';
import { Button } from '../inputs-and-elements/Button';
import { ComponentMeta } from '@storybook/react';
import { AlignemntHorizontal, AlignmentVertical } from './enums';
import { Typography } from '../typography';
import { PopoverProps } from './interfaces';

export default {
  title: 'components/Popover/Popover',
  component: Popover
} as ComponentMeta<typeof Popover>;

const InternalStateTemplate = (args) => {
  const [content, setContent] = useState('popover content');

  return (
    <>
      <div>
        <div style={{ width: 'fit-content', marginLeft: '5vw', marginTop: '5vh' }}>
          <Typography variant='h5'>Type to change popover content</Typography>
          <div style={{ margin: '20px 0' }}>
            <textarea
              autoFocus
              onChange={(e) => setContent(e.target.value)}
              value={content}
              cols={30}
              rows={5}></textarea>
          </div>
          <Popover
            {...args}
            renderOpenEl={({ open, renderElRef }) => (
              <Button ref={renderElRef} onClick={open}>
                Click me
              </Button>
            )}>
            <div>{content}</div>
          </Popover>
        </div>
      </div>
    </>
  );
};

const ExternalStateTemplate = (args) => {
  const [content, setContent] = useState('popover content');
  const [isOpen, setIsOpen] = useState(false);
  const anchorEl = useRef(null);

  return (
    <>
      <div>
        <div style={{ width: 'fit-content', marginLeft: '5vw', marginTop: '5vh' }}>
          <Typography variant='h5'>Type to change popover content</Typography>
          <div style={{ margin: '20px 0' }}>
            <textarea
              autoFocus
              onChange={(e) => setContent(e.target.value)}
              value={content}
              cols={30}
              rows={5}></textarea>
          </div>
          <Button ref={anchorEl} onClick={() => setIsOpen(true)}>
            Click me
          </Button>
          <Popover {...args} anchorEl={anchorEl} open={isOpen} onClose={() => setIsOpen(false)}>
            <div>{content}</div>
          </Popover>
        </div>
      </div>
    </>
  );
};

export const WithInternalState = InternalStateTemplate.bind({});
WithInternalState.args = {
  anchorOriginVertical: AlignmentVertical.bottom,
  anchorOriginHorisontal: AlignemntHorizontal.left,
  transformOriginVertical: AlignmentVertical.top,
  transformOriginHorizontal: AlignemntHorizontal.right,
  edgeMarginUnit: 4,
  safetyMarginUnit: 24
} as PopoverProps;

export const WithExternalState = ExternalStateTemplate.bind({});
WithExternalState.args = {
  anchorOriginVertical: AlignmentVertical.bottom,
  anchorOriginHorisontal: AlignemntHorizontal.left,
  transformOriginVertical: AlignmentVertical.top,
  transformOriginHorizontal: AlignemntHorizontal.right,
  edgeMarginUnit: 4,
  safetyMarginUnit: 24
} as PopoverProps;
