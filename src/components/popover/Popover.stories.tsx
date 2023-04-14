import Popover, { PopoverProps } from './Popover';
import { useRef, useState } from 'react';
import { Button } from '../inputs-and-elements/Button';
import { ComponentMeta } from '@storybook/react';
import { AlignemntHorizontal, AlignmentVertical } from './enums';

export default {
  title: 'components/Popover/Popover',
  component: Popover
} as ComponentMeta<typeof Popover>;

const Template = (args) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const anchorEl = useRef();

  const onClose = (): void => setIsOpen(false);

  const onClick = (): void => setIsOpen(!isOpen);

  return (
    <>
      <div>
        <div style={{ width: 'fit-content', marginLeft: '10vw', marginTop: '20vh' }}>
          <Button ref={anchorEl} onClick={onClick}>
            Click me
          </Button>
        </div>
      </div>
      <Popover {...args} anchorEl={anchorEl.current} open={isOpen} onClose={onClose}>
        <div>popover content popover conten popover contenpopover content popover conten popover conten</div>
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
