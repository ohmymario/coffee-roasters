import styled from 'styled-components';

const WhyUsStyles = styled.div`
  background: #2c343e;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 10px;
  padding: 100px 70px 0 70px;

  .whyus-text {
    width: 540px;
    text-align: center;
    color: var(--lightCreamBG);
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
  .whyus-cards {
    /* drop cards down out of the container */
    display: flex;
    transform: translateY(70px);
    .whyus-card {
      background: var(--darkCyan);
      color: var(--lightCreamBG);
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      border-radius: 10px;
      width: 33%;
      padding: 4.5em 3em 3em 3em;
      margin: 0 15px 0 15px;

      img {
        height: 72px;
      }

      h4 {
        color: inherit;
        padding: 56px 0 2rem 0;
      }
    }
  }
`;

export default WhyUsStyles;
