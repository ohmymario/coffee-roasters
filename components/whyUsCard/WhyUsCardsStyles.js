import styled from 'styled-components';

const WhyUsCardsStyles = styled.div`
  display: flex;
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

  @media screen and (min-width: 769px) and (max-width: 1160px) {
    .whyus-card {
      padding: 3em 2.2em 3em 2.2em;
      margin: 0 10px 0 10px;

      &-text {
        h4 {
          font-size: clamp(1.3rem, 2vw, 1.5rem);
        }
      }
    }
  }

  @media screen and (min-width: 901px) and (max-width: 970px) {
    .whyus-card {
      padding: 3em 1.5em 3em 1.5em;
    }
  }

  @media screen and (min-width: 501px) and (max-width: 900px) {
    justify-content: center;
    flex-direction: column;
    .whyus-card {
      width: 100%;
      flex-direction: row;
      padding: 2.5em 3em 2.5em 4.4em;
      margin: 0;
      margin-bottom: 1.5em;
      &-icon {
        padding-top: 5px;
        max-width: 56px;
        * {
          max-height: 56px;
        }

        margin-bottom: 0;
        flex-shrink: 0;
        margin-right: 55px;
      }
      &-text {
        line-height: 1.67;
        text-align: unset;
        h4 {
          margin-bottom: 1rem;
        }
      }
    }
  }

  @media (max-width: 500px) {
    justify-content: center;
    flex-direction: column;
    .whyus-card {
      width: 100%;
      padding: 4.5em 12px 2.5em 12px;
      margin: 0;
      margin-bottom: 1.5em;
      &-icon {
        margin-bottom: 46px;
        * {
        }
      }
      &-text {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        p {
          width: 78%;
        }
      }
    }
  }
`;

export default WhyUsCardsStyles;
