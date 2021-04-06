import styled from 'styled-components';

const AboutUsStyles = styled.div`
  //same as hero.js
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 8.5rem;

  height: 450px; //
  .hero-image {
    border-radius: 10px;
    z-index: 0;
  }

  .hero-text {
    /* 117 85 */
    padding-left: 5.3125em;
    margin: auto 0; //
    width: 50%;
    position: relative;
    z-index: 10000;
    h2 {
      color: var(--lightCreamBG);
      margin-bottom: 0.6em;
    }
    p {
      color: var(--lightCreamBG); //
      max-width: 80%;
      /* margin-bottom: 3.1875em; */
    }
  }
`;

export default AboutUsStyles;
