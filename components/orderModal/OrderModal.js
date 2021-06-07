import React from 'react';
import ReactDOM from 'react-dom';
import useWindowDimensions from '../../hooks/useWindowSize';
import { OrderModalStyles, Overlay } from './OrderModalStyles';

const OrderModal = props => {
  const { open, setOpen, answers } = props;
  const { width } = useWindowDimensions();

  const checkForAnswer = search => {
    if (answers[search]) return answers[search];
    return '_____';
  };

  const orderSummaryMessage = preferences => {
    if (preferences === 'Capsule') {
      return (
        <>
          “I drink my coffee using
          <span> {checkForAnswer('Preferences')}s</span>, with a
          <span> {checkForAnswer('Bean Type')}</span> type of bean.
          <span> {checkForAnswer('Quantity')}</span> , sent to me
          <span> {checkForAnswer('Deliveries')}</span>.”
        </>
      );
    }

    return (
      <>
        “I drink my coffee as
        <span> {checkForAnswer('Preferences')}</span>, with a
        <span> {checkForAnswer('Bean Type')}</span> type of bean.
        <span> {checkForAnswer('Quantity')}</span> ground ala
        <span> {checkForAnswer('Grind Option')}</span>, sent to me
        <span> {checkForAnswer('Deliveries')}</span>.”
      </>
    );
  };

  const checkoutMsg = () =>
    width <= 500 ? 'Checkout - $14.00 / mo' : 'Checkout';

  const closeModal = ({ target: { id } }) => {
    if (id === 'overlay') setOpen(false);
    if (id === 'button') setOpen(false);
  };

  return open
    ? ReactDOM.createPortal(
        <Overlay id="overlay" onClick={e => closeModal(e)}>
          <OrderModalStyles>
            <div className="title-bg">
              <div className="title">
                <h2>Order Summary</h2>
              </div>
            </div>
            <div className="order">
              <div className="order-summary">
                <h4>{orderSummaryMessage(answers.Preferences)}</h4>
                <p>
                  Is this correct? You can proceed to checkout or go back to
                  plan selection if something is off. Subscription discount
                  codes can also be redeemed at the checkout.
                </p>
              </div>
              <div className="order-checkout">
                <h3>$14.00/ mo</h3>
                <button
                  type="button"
                  className="button"
                  id="button"
                  onClick={e => closeModal(e)}
                >
                  {checkoutMsg()}
                </button>
              </div>
            </div>
          </OrderModalStyles>
        </Overlay>,
        document.body
      )
    : null;
};

export default OrderModal;
