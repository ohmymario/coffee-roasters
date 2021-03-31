import styled from 'styled-components';

const WhyUsStyles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  padding: 100px 70px 0 70px;

  position: relative;

  .whyus-background {
    position: absolute;
    width: 100%;
    height: 577px;
    border-radius: 10px;
    top: 0;
    left: 0;
    background: #2c343e;
    z-index: -1;
  }

  .whyus-text {
    width: 540px;
    text-align: center;
    color: var(--lightCreamBG);
    margin-bottom: 70px;
    h2 {
      color: inherit;
      margin-bottom: 0.8em;
    }
    p {
      opacity: 0.8;
      padding: 0 10px 1em 10px;
      padding-bottom: 1em;
    }
  }
`;

export default WhyUsStyles;
