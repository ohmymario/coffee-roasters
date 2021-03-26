import styled from 'styled-components';

const CollectionStyles = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-bottom: 12.5rem;
  /* TODO: NEEDS MARGIN READJUSTED */

  .collection-lg-title {
    font-family: 'Fraunces', serif;
    text-align: center;
    text-transform: lowercase;
    font-size: 9.375rem;
    line-height: normal;

    background: linear-gradient(180deg, var(--grey) 0%, #ffffff 80%);
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
    padding: 0 5.4em;
    margin-top: -75px;

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
`;

export default CollectionStyles;
