import { object, withKnobs } from '@storybook/addon-knobs';
import Breadcrumb from './Breadcrumb';

export default {
  component: Breadcrumb,
  decorators: [withKnobs],
  title: 'components/Navigation/Breadcrumb'
};

export const Default = () => {
  return (
    <Breadcrumb
      links={object('links', [{ label: 'Home' }, { label: 'Library', isRedirect: true }, { label: 'Game Management' }])}
    />
  );
};
