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

  @media (max-width: 768px) {
    height: 400px;
    margin-bottom: 9rem;

    .hero-text {
      width: 66%;
      padding-left: 58px;

      h1 {
        font-size: 48px;
      }

      p {
        max-width: 100%;
      }
    }
  }
`;

export default SubscribeHeroStyles;
