import { withKnobs } from '@storybook/addon-knobs';
import Breadcrumb from './Breadcrumb';

export default {
  component: Breadcrumb,
  decorators: [withKnobs],
  title: 'components/Navigation/Breadcrumb'
};

export const Default = () => {
  return <Breadcrumb links={[{ label: 'Home' }, { label: 'Library' }]} />;
};
