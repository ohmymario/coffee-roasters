import styled from 'styled-components';

const HowItWorksStyles = styled.div`
  ${props => !props.primary && `position: relative`};

  border-radius: 10px;
  ${props =>
    props.primary ? `padding: 0 85px 0 85px` : `padding: 91px 85px 107px 85px`};
  margin: 0 auto ${props => (props.primary ? `200px` : `159px`)} auto;

  h4 {
    color: var(--grey);
    margin-bottom: 3.3em;
  }

  .cards-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    ${props => (props.primary ? `margin-bottom: 64px;` : `margin-bottom: 0`)};
    div:last-child .dot::after {
      display: none;
    }
  }

  button {
    a {
      color: inherit;
    }
  }

  .bg {
    position: absolute;
    border-radius: 10px;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: #2c343e;
    z-index: -1;
  }

  @media screen and (min-width: 769px) and (max-width: 1250px) {
    margin: 0 auto ${props => (props.primary ? `200px` : `60px`)} auto;
  }

  @media screen and (min-width: 769px) and (max-width: 980px) {
    ${props =>
      props.primary ? `padding: 0 0 0 0` : `padding: 91px 45px 107px 45px`};
  }

  @media screen and (min-width: 769px) and (max-width: 900px) {
    ${props =>
      props.primary ? `padding: 0 0 0 0` : `padding: 71px 45px 87px 45px`};
  }

  @media screen and (min-width: 501px) and (max-width: 768px) {
    padding: 0;
    margin: 0 auto ${props => (props.primary ? `144px` : `159px`)} auto;
    margin-top: ${props => (props.primary ? `` : `241px`)};
    h4 {
      margin-bottom: 1.7em;
    }
    .cards-container {
      ${props => (props.primary ? `margin-bottom: 44px;` : `margin-bottom: 0`)};
    }

    .bg {
      width: calc(100% + 64px);
      height: calc(100% + 193px);
      top: -97px;
      left: -32px;
    }
  }

  @media (max-width: 500px) {
    display: flex;
    flex-direction: column;
    padding: 0;
    padding: ${props => (props.primary ? '0' : '80px 0')};
    margin: 0 auto 120px auto;

    h4 {
      text-align: center;
    }
    .cards-container {
      display: flex;
      flex-direction: column;
      ${props => (props.primary ? `margin-bottom: 18px;` : `margin-bottom: 0`)};
    }
    button {
      margin: 5px auto;
    }

    .bg {
      width: calc(100% + 48px);
      left: -24px;
    }
  }
`;

export default HowItWorksStyles;
