import styled from 'styled-components';
import HeroBaseStyles from '../styles/HeroBaseStyles';

const HeroStyles = styled(HeroBaseStyles)`
  height: 600px;
  margin-bottom: 8.5rem;

  .hero-text {
    h1 {
      margin-bottom: 0.44em;
    }
    p {
      opacity: 80%;
      margin-bottom: 3.1875em;
    }
    button {
      a {
        color: inherit;
      }
    }
  }

  @media screen and (min-width: 769px) and (max-width: 1220px) {
    .hero-text {
      width: 60%;
      h1 {
        font-size: clamp(3.5rem, 5.75vw, 4.5rem);
      }
    }
  }

  @media screen and (min-width: 501px) and (max-width: 768px) {
    .hero-text {
      width: 70%;
    }
  }

  @media (max-width: 768px) {
    height: 500px;
    h1 {
      font-size: 3rem;
      margin-bottom: 0.5em;
    }
    p {
      max-width: 100%;
      margin-bottom: 2.7em;
    }
  }

  @media (max-width: 670px) {
    .hero-text {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 0 24px;
      width: 100%;
      h1,
      p {
        text-align: center;
      }
      p {
        margin-bottom: 2.6em;
      }
    }
  }

  @media (max-width: 500px) {
    margin-bottom: 7.5rem;
    .hero-image {
      filter: brightness(60%);
    }
  }
`;

export default HeroStyles;
