import React from 'react';
import ReactDOM from 'react-dom';
import { OrderModalStyles, Overlay } from './OrderModalStyles';

const OrderModal = props => {
  const { open, setOpen, data } = props;
  console.log(props);
  return open
    ? ReactDOM.createPortal(
        <Overlay onClick={() => setOpen(false)}>
          <OrderModalStyles>
            <p>OrderModal</p>
          </OrderModalStyles>
        </Overlay>,
        document.body
      )
    : null;
};

export default OrderModal;
