import { boolean, number, withKnobs } from '@storybook/addon-knobs';
import Scroll from './Scroll';

export default {
  title: 'components/Others/Scroll',
  component: Scroll,
  decorators: [withKnobs]
};

export const Default = () => {
  return (
    <Scroll
      width={number('width', 200)}
      height={number('height', 200)}
      autoHide={boolean('autoHide', true)}
      autoHideTimeout={number('autoHideTimeout', 1000)}
      autoHideDuration={number('autoHideDuration', 200)}>
      <div style={{ height: 200, width: 190 }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam id autem, ad non officiis fugiat magnam atque
        quis reprehenderit odit omnis eos voluptates cum delectus ipsa. Unde officia natus distinctio! Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Optio totam error sequi unde obcaecati, enim fugit magnam? Ratione odit
        enim tempora natus obcaecati! Necessitatibus pariatur dolorem esse numquam magni adipisci. Lorem ipsum dolor sit
        amet consectetur, adipisicing elit. Quod sapiente quidem reprehenderit laboriosam nam illum animi officiis
        fugiat optio laudantium, error quae voluptatibus a asperiores placeat ipsa nostrum est soluta. Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Illo deserunt sit iste error, qui adipisci. Dolore, harum animi at fuga
        ab sunt natus perferendis, magnam beatae culpa consequuntur tempora debitis?
      </div>
    </Scroll>
  );
};
