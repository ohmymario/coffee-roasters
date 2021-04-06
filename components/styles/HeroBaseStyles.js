import styled from 'styled-components';

const HeroBaseStyles = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;

  .hero-image {
    border-radius: 10px;
    z-index: 0;
  }

  .hero-text {
    padding-left: 5.3125em;
    width: 50%;
    position: relative;
    z-index: 10000;

    h1,
    h2 {
      color: var(--lightCreamBG);
    }

    p {
      color: var(--lightCreamBG);
      max-width: 75%;
    }
  }
`;

export default HeroBaseStyles;
