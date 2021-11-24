import { FC } from 'react';
import ReactDom from 'react-dom';

const Portal: FC = (props) => {
  return ReactDom.createPortal(props.children, document.body);
};

export default Portal;
