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
        color: var(--grey);
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

  /* TODO: revisit tablet view */
  @media screen and (min-width: 501px) and (max-width: 768px) {
    .order {
      &-summary {
        p {
          font-size: 16px;
        }
      }
    }
  }

  @media (max-width: 500px) {
    margin: 35px 24px;

    .title-bg {
      .title {
        padding: 28px 0 28px 24px;
        h2 {
          color: #ffffff;
          font-size: 28px;
        }
      }
    }
    .order {
      padding: 40px 24px 24px 24px;
      &-summary {
        margin-bottom: 1.5em;
        h4 {
          margin-bottom: 0;
          line-height: 1.66;
        }
      }
      &-checkout {
        h3 {
          display: none;
        }
        button {
          width: 100%;
        }
      }
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
