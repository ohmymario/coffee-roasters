import styled from 'styled-components';

const OrderModalStyles = styled.div`
  position: relative;
  background: white;
  max-width: 540px;
  margin: auto;
  border-radius: 10px;
  overflow: hidden;

  .title-bg {
    background: var(--darkGreyBlue);
    .title {
      padding: 48px 56px 40px 56px;
      h2 {
        color: #ffffff;
      }
    }
  }

  .order {
    padding: 56px;
    &-summary {
      margin-bottom: 47px;
      h4 {
        margin-bottom: 7px;
        span {
          color: var(--darkCyan);
        }
      }
    }
    &-checkout {
      display: flex;
      align-items: center;
      gap: 15px;
    }
  }
`;

const Overlay = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 10000;
`;

export { OrderModalStyles, Overlay };
