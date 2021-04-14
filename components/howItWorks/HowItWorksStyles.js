import styled from 'styled-components';

const HowItWorksStyles = styled.div`
  border-radius: 10px;
  ${props => !props.primary && `background: #2C343E`};
  ${props =>
    props.primary ? `padding: 0 85px 0 85px` : `padding: 91px 85px 107px 85px`};
  /* max-width: 87%; */
  margin: 0 auto ${props => (props.primary ? `200px` : `159px`)} auto;

  h4 {
    color: var(--grey);
    margin-bottom: 3.3em;
  }

  .cards-container {
    display: flex;
    ${props => (props.primary ? `margin-bottom: 64px;` : `margin-bottom: 0`)};
    div:last-child .dot::after {
      display: none;
    }
  }
`;

export default HowItWorksStyles;
