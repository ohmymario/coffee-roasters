import styled from 'styled-components';
import HeroBaseStyles from '../styles/HeroBaseStyles';

const SubscribeHeroStyles = styled(HeroBaseStyles)`
  height: 450px;
  margin-bottom: 11rem;

  .hero-text {
    margin: auto 0;

    h1 {
      margin-bottom: 0.45em;
    }

    p {
      max-width: 85%;
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

  @media (max-width: 768px) {
    height: 400px;
    margin-bottom: 9rem;

    .hero-text {
      width: 66%;
      padding-left: 58px;

      h1 {
        font-size: 3rem;
      }

      p {
        max-width: 100%;
      }
    }
  }
`;

export default SubscribeHeroStyles;
