import React, { useState, useContext, createContext } from 'react';
import ReactDOM from 'react-dom';
import OrderModalStyles from './OrderModalStyles';

const OrderModal = props => {
  const { open, setOpen, data } = props;
  console.log(props);
  return (
    <OrderModalStyles>
      <p>OrderModal</p>
    </OrderModalStyles>
  );
};

export default OrderModal;
