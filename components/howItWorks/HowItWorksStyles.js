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

  @media (max-width: 768px) {
    padding: 0;
    margin: 0 auto ${props => (props.primary ? `144px` : `159px`)} auto;
    margin-top: 241px;
    h4 {
      margin-bottom: 1.7em;
    }
    .cards-container {
      ${props => (props.primary ? `margin-bottom: 44px;` : `margin-bottom: 0`)};
    }

    .bg {
      width: calc(100% + 64px);
      height: calc(100% + 167px);
      top: -97px;
      left: -32px;
    }
  }
`;

export default HowItWorksStyles;
