import styled from 'styled-components';

const HeadquarterCardStyles = styled.div`
  width: 100%;
  margin-bottom: 2em;
  &:not(:last-child) {
    margin-right: 95px;
  }
  .card-img {
    margin-bottom: 45px;
    min-height: 60px;
  }

  h3 {
    margin-bottom: 0.75em;
  }

  pre,
  p {
    color: var(--darkGreyBlue);
  }

  @media (max-width: 768px) {
    &:not(:last-child) {
      margin-right: 10px;
    }

    h3 {
      font-size: 24px;
      margin-bottom: 0.875em;
    }

    pre,
    p {
      font-size: 16px;
      line-height: 1.625;
    }
  }
`;

export default HeadquarterCardStyles;
