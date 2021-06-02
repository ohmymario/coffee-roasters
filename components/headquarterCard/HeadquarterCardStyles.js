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

  @media screen and (min-width: 769px) and (max-width: 1070px) {
    &:not(:last-child) {
      margin-right: 20px;
    }
  }

  @media screen and (min-width: 769px) and (max-width: 916px) {
    h3 {
      min-height: 72px;
    }
  }

  @media screen and (min-width: 501px) and (max-width: 768px) {
    &:not(:last-child) {
      margin-right: 10px;
    }

    h3 {
      font-size: 24px;
    }
  }

  @media (max-width: 768px) {
    h3 {
      margin-bottom: 0.875em;
    }

    pre,
    p {
      font-size: 16px;
      line-height: 1.625;
    }
  }

  @media (max-width: 500px) {
    margin-bottom: 5em;
    &:not(:last-child) {
      margin-right: 0;
    }

    &:last-child {
      margin-bottom: 0;
    }

    h3 {
      font-size: 28px;
    }

    * {
      text-align: center;
    }
  }
`;

export default HeadquarterCardStyles;
