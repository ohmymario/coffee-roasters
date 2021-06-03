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

  @media screen and (min-width: 769px) and (max-width: 1210px) {
    padding-right: 25px;

    .card {
      h3,
      p {
        width: 95%;
        min-width: unset;
      }

      h3 {
        font-size: clamp(1.75rem, 4vw, 2rem);
        min-height: 72px;
      }
    }
  }

  @media screen and (min-width: 769px) and (max-width: 791px) {
    .card {
      h3 {
        min-height: 105px;
      }
    }
  }

  @media screen and (min-width: 501px) and (max-width: 768px) {
    padding-right: 18px;
    .dot {
      margin-bottom: 48px;
    }
    .card {
      max-width: 223px;
      h3,
      p {
        width: 100%;
        min-width: unset;
      }
      h1 {
        margin-bottom: 0.6em;
      }
      h3 {
        font-size: 28px;
      }
    }
  }

  @media (max-width: 500px) {
    margin-bottom: 3.5rem;
    &:last-child {
      margin-bottom: ${props => (props.primary ? '' : '0')};
    }
    .dot {
      display: none;
    }
    .card {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      h3 {
        font-size: ${props => (props.primary ? '' : '28px')};
      }
      h1,
      h3 {
        margin-bottom: 1.5rem;
      }
      h3,
      p {
        width: 100%;
        text-align: center;
      }
      p {
        width: 95%;
        text-align: center;
      }
    }
  }
`;

export default HowItWorksCardStyles;
