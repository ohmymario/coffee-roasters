import styled from 'styled-components';

const WhyUsCardsStyles = styled.div`
  display: flex;
  margin-bottom: 200px;
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

    &-icon {
      /* height to match truck to other icons w/o changing actual icon dimensions */
      min-height: 72px;
      margin-bottom: 56px;
    }

    &-text {
      text-align: center;
      h4 {
        color: inherit;
        margin-bottom: 2rem;
      }
    }
  }
`;

export default WhyUsCardsStyles;
