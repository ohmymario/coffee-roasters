import styled from 'styled-components';

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

  @media screen and (min-width: 501px) and (max-width: 768px) {
    padding: 27px 44px 27px 44px;
    margin-bottom: 2.5em;
  }

  @media (max-width: 768px) {
    .order-title {
      font-size: 16px;
    }
  }

  @media (max-width: 500px) {
    padding: 32px 24px;
    margin-bottom: 3.2em;
  }
`;

export default OrderSummaryStyles;
