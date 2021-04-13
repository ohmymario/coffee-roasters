import styled from 'styled-components';

const HeadquarterCardStyles = styled.div`
  width: 100%;
  margin-bottom: 2em;
  &:not(:last-child) {
    margin-right: 95px;
  }
  .card-img {
    margin-bottom: 45px;
  }

  h3 {
    margin-bottom: 0.75em;
  }

  pre,
  p {
    color: var(--darkGreyBlue);
  }
`;

export default HeadquarterCardStyles;
