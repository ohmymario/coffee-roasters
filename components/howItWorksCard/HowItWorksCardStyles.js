import styled from 'styled-components';

const HowItWorksCardStyles = styled.div`
  position: relative;

  .dot {
    --size: 31px;
    height: var(--size);
    width: var(--size);
    border: 2px solid var(--darkCyan);
    border-radius: 50%;
    display: inline-block;
    margin-bottom: 67px;
    ::after {
      content: '';
      border-bottom: 2px solid var(--paleOrange);
      width: calc(100% - var(--size));

      position: absolute;
      top: calc(var(--size) / 2);
      left: var(--size);
    }
  }

  .card {
    h1 {
      color: var(--paleOrange);
      margin-bottom: 0.52em;
    }
    h3 {
      margin-bottom: 1.3em;
      width: 56%;
      min-width: 255px;
      color: ${props =>
        props.primary ? 'var(--darkGreyBlue)' : 'var(--lightCreamBG)'};
    }
    p {
      width: 66%;
      min-width: 285px;
      color: ${props =>
        props.primary ? 'var(--darkGreyBlue)' : 'var(--lightCreamBG)'};
    }
  }
`;

export default HowItWorksCardStyles;
