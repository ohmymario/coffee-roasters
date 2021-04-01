import styled from 'styled-components';

const HowItWorksStyles = styled.div`
  h4 {
    color: var(--grey);
  }
  .dot {
    height: 25px;
    width: 25px;
    border: 1px solid red;
    border-radius: 50%;
    display: inline-block;
    ::after {
      content: 'here i try and make line';
    }
  }
`;

// circle css

export default HowItWorksStyles;
