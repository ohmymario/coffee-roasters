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
    /* will wrap in smaller viewports */
  }

  @media (max-width: 768px) {
    margin: 0 auto 7em auto;
  }
`;

export default HeadquartersStyles;
