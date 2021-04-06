import styled from 'styled-components';

const HeroBaseStyles = styled.div`
  width: 100%;
  height: 600px;
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 8.5rem;

  .hero-image {
    border-radius: 10px;
    z-index: 0;
  }

  .hero-text {
    /* 117 85 */
    padding-left: 5.3125em;
    width: 50%;
    position: relative;
    z-index: 10000;
    h1 {
      color: var(--lightCreamBG);
      margin-bottom: 0.44em;
    }
    p {
      max-width: 75%;
      margin-bottom: 3.1875em;
    }
  }
`;

export default HeroBaseStyles;
