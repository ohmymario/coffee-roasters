import styled from 'styled-components';

// 689 x 208

const OrderSummaryStyles = styled.div`
  width: 100%;
  background: #2c343e;
  border-radius: 10px;
  color: #ffffff;
  margin-bottom: 2.2em;
  padding: 47px 64px 47px 64px;

  .order-title {
    opacity: 0.537;
    text-transform: uppercase;
    margin-bottom: 8px;
  }
  .order-summary h4 {
    color: inherit;
    line-height: 1.7;
    span {
      color: var(--darkCyan);
    }
  }

  @media (max-width: 768px) {
    padding: 27px 44px 27px 44px;

    .order-title {
      font-size: 16px;
    }

    margin-bottom: 2.5em;
  }
`;

export default OrderSummaryStyles;
