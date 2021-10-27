import { number, object, text, withKnobs } from '@storybook/addon-knobs';
import Breadcrumb from './Breadcrumb';

export default {
  component: Breadcrumb,
  decorators: [withKnobs],
  title: 'components/Navigation/Breadcrumb'
};

export const Default = () => {
  return (
    <Breadcrumb
      links={object('links', [{ label: 'Home', isRedirect: true }, { label: 'Library' }, { label: 'Game Management' }])}
    />
  );
};
