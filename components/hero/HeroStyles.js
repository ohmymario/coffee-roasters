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
`;

export default HeroStyles;
