import styled from 'styled-components';

const OrderSummaryStyles = styled.div`
  width: 100%;
  padding: 47px 64px 47px 64px;
  background: #2c343e;
  border-radius: 10px;
  color: #ffffff;
  margin-bottom: 2.2em;

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
`;

export default OrderSummaryStyles;
