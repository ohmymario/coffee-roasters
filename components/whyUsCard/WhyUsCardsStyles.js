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
  @media (max-width: 768px) {
    justify-content: center;
    flex-direction: column;
    margin-bottom: 144px;
    .whyus-card {
      width: 100%;
      flex-direction: row;
      padding: 2.5em 3em 2.5em 4.4em;
      margin: 0;
      margin-bottom: 1.5em;

      &-icon {
        padding-top: 5px;
        * {
          max-height: 56px;
        }

        margin-bottom: 0;
        flex-shrink: 0;
        margin-right: 55px;
      }
      &-text {
        font-size: 15px;
        line-height: 1.67;
        text-align: unset;
        h4 {
          margin-bottom: 1rem;
        }
      }
    }
  }
`;

export default WhyUsCardsStyles;
