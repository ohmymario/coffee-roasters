import styled from 'styled-components';

const CollectionStyles = styled.div`
  display: flex;

  /* FOR FUTURE TEXT */
  /* flex: 0 0 100%;  */
  .collection-item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img {
    }

    .collection-text {
      margin-top: 4.5rem;
      width: 75%;
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
`;

export default CollectionStyles;
