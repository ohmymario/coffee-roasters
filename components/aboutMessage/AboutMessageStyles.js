import styled from 'styled-components';

// img 520 x 445
// txt 450 x 340
// max-space between ~ 125px!!!!
// min space between 69px

// total 1110 x 520
// --darkGreyBlue: #333D4B;
// 85px padding
// take in props - alt, flip, wrap

// docs example background: ${props => props.primary ? "palevioletred" : "white"};
/* flex-wrap: ${props => (props.wrap ? 'wrap' : 'nowrap')}; */

const AboutMessageStyles = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 85px 0 85px;
  /* change padding on smaller viewports */
  position: relative;
  margin-bottom: 10.5rem;

  .about-msg-background {
    position: absolute;
    width: 100%;
    height: 577px;
    border-radius: 10px;
    top: 0;
    left: 0;
    background: #2c343e;
    z-index: -1;
  }

  .about-msg-image {
    margin-right: 35px;

    img {
      border-radius: 8px;
    }
  }
  .about-msg-message {
    max-width: 450px;
    margin-left: 34px;
    h2,
    p {
      color: ${props =>
        props.primary ? 'var(--lightCreamBG)' : 'var(--darkGreyBlue)'};
    }
  }
`;

export default AboutMessageStyles;
