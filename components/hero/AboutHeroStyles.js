import styled from 'styled-components';
import HeroBaseStyles from '../styles/HeroBaseStyles';

const AboutHeroStyles = styled(HeroBaseStyles)`
  height: 450px;
  margin-bottom: 10.5rem;

  .hero-text {
    margin: auto 0;

    h2 {
      margin-bottom: 0.6em;
    }
  }

  @media screen and (min-width: 769px) and (max-width: 1100px) {
    margin-bottom: 7rem;

    .hero-text {
      width: 68%;
      h2 {
        font-size: clamp(2rem, 4.5vw, 2.5rem);
      }
    }
  }

  @media (max-width: 768px) {
    height: 400px;
    margin-bottom: 9rem;

    .hero-text {
      width: 66%;
      padding-left: 58px;

      h2 {
        margin-bottom: 0.75em;
        font-size: 32px;
      }
      p {
        max-width: 100%;
      }
    }
  }
`;

export default AboutHeroStyles;
