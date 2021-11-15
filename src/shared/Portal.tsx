import ReactDom from 'react-dom';
import { FC } from 'react';

const Portal: FC = (props) => {
  return ReactDom.createPortal(props.children, document.body);
};

export default Portal;
