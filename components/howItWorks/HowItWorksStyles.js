import styled from 'styled-components';

const HowItWorksStyles = styled.div`
  max-width: 87%;
  margin: 0 auto 200px auto;
  h4 {
    color: var(--grey);
    margin-bottom: 3.3em;
  }

  .cards-container {
    display: flex;
    margin-bottom: 64px;
    div:last-child .dot::after {
      display: none;
    }
  }
`;

export default HowItWorksStyles;
