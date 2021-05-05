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
  }

  @media (max-width: 768px) {
    height: 500px;

    .hero-text {
      width: 70%;
      h1 {
        font-size: 48px;
        margin-bottom: 0.5em;
      }
      p {
        font-size: 15px;
        max-width: 100%;
        margin-bottom: 2.7em;
      }
    }
  }
`;

export default HeroStyles;
