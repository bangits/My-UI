import { withKnobs } from '@storybook/addon-knobs';
import { Tag } from '../tag';
import Collapse from './Collapse';

export default {
  component: Collapse,
  decorators: [withKnobs],
  title: 'components/Collapse/Collapse'
};

export const Default = () => {
  return (
    <>
      <Collapse title='Banners'>
        <Tag title='Banner 1' />
      </Collapse>

      <Collapse title='Banners'>
        <Tag title='Banner 1' />
      </Collapse>

      <Collapse title='Banners'>
        <Tag title='Banner 1' />
      </Collapse>
    </>
  );
};
