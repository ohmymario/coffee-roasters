import styled from 'styled-components';

const WhyUsStyles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 12.5rem;

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

  @media screen and (min-width: 801px) and (max-width: 970px) {
    padding: 100px 20px 0 20px;
  }

  @media screen and (min-width: 769px) and (max-width: 900px) {
    padding: 100px 45px 0 45px;
    margin-bottom: 9rem;
  }

  @media screen and (min-width: 501px) and (max-width: 768px) {
    margin-bottom: 9rem;
    padding: 56px 58px 0 58px;
    .whyus-text {
      h2 {
        font-size: 32px;
      }
    }
  }

  @media (max-width: 500px) {
    padding: 64px 24px 0 24px;
    margin-bottom: 7.5rem;

    .whyus-background {
      height: 900px;
    }

    .whyus-text {
      width: unset;
      text-align: center;
      color: var(--lightCreamBG);
      margin-bottom: 49px;
      h2 {
        color: inherit;
        margin-bottom: 0.8em;
        font-size: 1.75rem;
      }
      p {
        opacity: 0.8;
        padding: 0 10px 1em 10px;
      }
    }
  }
`;

export default WhyUsStyles;
