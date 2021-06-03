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

  @media screen and (min-width: 501px) and (max-width: 768px) {
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

  @media (max-width: 500px) {
    height: 400px;
    align-items: flex-start;
    margin-bottom: 7.5rem;
    padding: 0 24px;

    .hero-image {
      filter: brightness(51%);
    }

    .hero-text {
      width: 100%;
      padding-left: 0;
      margin: auto 0;

      h1 {
        font-size: 2.75rem;
      }

      p {
        max-width: 100%;
        opacity: 80%;
      }

      * {
        text-align: center;
      }
    }
  }

  @media (max-width: 375px) {
    .hero-text {
      margin: 100px 0 0 auto;

      h1 {
        font-size: 2.5rem;
      }
    }
  }
`;

export default SubscribeHeroStyles;
