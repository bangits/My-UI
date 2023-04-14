import Popover, { PopoverProps } from './Popover';
import { useRef, useState } from 'react';
import { Button } from '../inputs-and-elements/Button';
import { ComponentMeta } from '@storybook/react';
import { AlignemntHorizontal, AlignmentVertical } from './enums';
import { TextInput } from '../inputs-and-elements';
import { Typography } from '../typography';

export default {
  title: 'components/Popover/Popover',
  component: Popover
} as ComponentMeta<typeof Popover>;

const Template = (args) => {
  const [content, setContent] = useState('popover content');
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const anchorEl = useRef();

  const onClose = (): void => setIsOpen(false);

  const onClick = (): void => setIsOpen(!isOpen);

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
          <Button ref={anchorEl} onClick={onClick}>
            Click me
          </Button>
        </div>
      </div>
      <Popover {...args} anchorEl={anchorEl.current} open={isOpen} onClose={onClose}>
        <div>{content}</div>
      </Popover>
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  anchorOriginVertical: AlignmentVertical.bottom,
  anchorOriginHorisontal: AlignemntHorizontal.left,
  transformOriginVertical: AlignmentVertical.top,
  transformOriginHorizontal: AlignemntHorizontal.right,
  edgeMarginUnit: 4,
  safetyMarginUnit: 24
} as PopoverProps;
