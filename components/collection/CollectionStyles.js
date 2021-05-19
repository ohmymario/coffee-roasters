import styled from 'styled-components';

const CollectionStyles = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-bottom: 12.5rem;

  .collection-lg-title {
    font-family: 'Fraunces', serif;
    text-align: center;
    text-transform: lowercase;
    font-size: 9.375rem;
    line-height: normal;

    background: linear-gradient(180deg, var(--grey) 0%, #ffffff 85%);
    background-size: 100%;

    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
  }

  .collection-items {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: -75px;

    padding: 0 5.4em;

    .collection-item {
      display: flex;
      flex: 0 0 256px;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-bottom: 2rem;

      .collection-text {
        margin-top: 4.5rem;
        width: 85%;
        text-align: center;
        h4 {
          margin-bottom: 1em;
        }
        p {
          color: var(--darkGreyBlue);
          max-height: 78px;
        }
      }
    }
  }

  @media screen and (min-width: 769px) and (max-width: 1265px) {
    .collection-lg-title {
      font-size: clamp(6.5rem, 12vw, 9rem);
    }
    .collection-items {
      justify-content: space-between;
      .collection-item {
        flex: 0 0 50%;
        margin-bottom: 5.5rem;
        .collection-text {
          width: 50%;
        }
      }
    }
  }

  @media (max-width: 768px) {
    margin-bottom: 9rem;
    .collection-lg-title {
      font-size: clamp(4.5rem, 12vw, 6rem);
    }

    .collection-items {
      flex-direction: column;
      margin-top: -45px;
      padding: 0;
      flex-shrink: 0;

      .collection-item {
        flex-direction: row;
        flex: 1 1 auto;
        gap: 10px;

        img.collection-image {
          margin-right: 50px;
        }

        .collection-text {
          max-width: 282px;
          margin-top: 0;
          text-align: start;
        }
      }
    }
  }
`;

export default CollectionStyles;
