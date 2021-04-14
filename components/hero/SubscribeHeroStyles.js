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
`;

export default SubscribeHeroStyles;
