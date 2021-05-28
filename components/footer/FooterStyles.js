import styled from 'styled-components';

const FooterStyles = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 120px;
  background: var(--darkGreyBlue);
  padding: 0 85px 0 85px;
  .footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 620px;
    flex: 1 1 auto;
  }

  .socials {
    div {
      &:hover {
        /* workaround to produce proper color */
        /* cant use fill with next images */
        filter: brightness(0) saturate(100%) invert(86%) sepia(18%)
          saturate(5793%) hue-rotate(306deg) brightness(138%) contrast(115%);
        cursor: pointer;
      }
      &:not(:last-child) {
        margin-right: 1.5em;
      }
    }
  }

  @media screen and (min-width: 769px) and (max-width: 1035px) {
    .footer-logo {
      padding-right: 20px;
    }
    .footer {
      padding-right: 25px;
    }
  }

  @media screen and (min-width: 769px) and (max-width: 920px) {
    padding: 0 25px 0 25px;

    .footer {
      justify-content: space-between;
    }
  }

  @media screen and (min-width: 769px) and (max-width: 805px) {
    .footer {
      justify-content: space-around;
    }
    ul {
      flex-direction: column;
    }
  }

  @media screen and (min-width: 501px) and (max-width: 768px) {
    padding: 54px 85px 54px 85px;
    flex-wrap: wrap;
    justify-content: center;
    .footer {
      flex-wrap: wrap;
      justify-content: center;
      .footer-logo {
        margin-bottom: 16px;
      }
    }
  }

  @media (max-width: 500px) {
    padding: 54px 0;
    flex-direction: column;

    .footer {
      display: flex;
      flex-direction: column;
      align-items: center;
      .footer-logo {
        margin-bottom: 3.125rem;
      }
    }
    ul {
      flex-direction: column;
      text-align: center;
      padding: 0;
      margin: 0;
      margin-bottom: 3rem;
      li:not(:last-child) {
        margin-bottom: 1.5rem;
        padding-right: 0;
      }
    }
  }
`;

export default FooterStyles;
