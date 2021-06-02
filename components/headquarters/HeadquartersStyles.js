import styled from 'styled-components';

const HeadquartersStyles = styled.div`
  max-width: 1045px;
  margin: 0 auto 8.5em auto;

  h4 {
    margin-bottom: 3em;
    color: var(--grey);
  }

  .hq-cards {
    display: flex;
    flex-wrap: nowrap;
    flex: 1 1 285px;
  }

  @media screen and (min-width: 501px) and (max-width: 768px) {
    margin: 0 auto 7em auto;
  }

  @media (max-width: 500px) {
    margin: 0 auto 7.5em auto;
    h4 {
      text-align: center;
    }
    .hq-cards {
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
`;

export default HeadquartersStyles;
