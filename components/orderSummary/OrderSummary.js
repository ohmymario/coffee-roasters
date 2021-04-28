import React from 'react';

const OrderSummary = props => {
  const { answers } = props;

  const checkForAnswer = search => {
    if (answers[search]) return answers[search];
    return '_____';
  };

  const orderSummaryMessage = preferences => {
    if (preferences === 'Capsule') {
      return `“I drink my coffee using
      ${checkForAnswer('Preferences')}s, with a
      ${checkForAnswer('Bean Type')} type of bean.
      ${checkForAnswer('Quantity')} , sent to me
      ${checkForAnswer('Deliveries')}.”`;
    }

    return `“I drink my coffee as
    ${checkForAnswer('Preferences')}, with a
    ${checkForAnswer('Bean Type')} type of bean.
    ${checkForAnswer('Quantity')} ground ala
    ${checkForAnswer('Grind Option')}, sent to me
    ${checkForAnswer('Deliveries')}.”`;
  };

  return (
    <div>
      <p>Order Summary</p>
      <div className="order-summary">
        {orderSummaryMessage(answers.Preferences)}
      </div>
    </div>
  );
};

export default OrderSummary;
