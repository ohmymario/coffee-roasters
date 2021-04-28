import React from 'react';
import OrderSummaryStyles from './OrderSummaryStyles';

const OrderSummary = props => {
  const { answers } = props;

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
          <span> {checkForAnswer('Bean Type')} </span> type of bean.
          <span> {checkForAnswer('Quantity')} </span> , sent to me
          <span> {checkForAnswer('Deliveries')} </span>.”
        </>
      );
    }

    return (
      <>
        “I drink my coffee as
        <span> {checkForAnswer('Preferences')} </span>, with a
        <span> {checkForAnswer('Bean Type')} </span> type of bean.
        <span> {checkForAnswer('Quantity')} </span> ground ala
        <span> {checkForAnswer('Grind Option')} </span>, sent to me
        <span> {checkForAnswer('Deliveries')} </span>.”
      </>
    );
  };
  return (
    <OrderSummaryStyles>
      <p className="order-title">Order Summary</p>
      <div className="order-summary">
        <h4>{orderSummaryMessage(answers.Preferences)}</h4>
      </div>
    </OrderSummaryStyles>
  );
};

export default OrderSummary;
