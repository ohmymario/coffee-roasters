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

    ul {
      /* needed for future */
    }
  }

  .socials {
    div {
      &:not(:last-child) {
        margin-right: 1.5em;
      }
    }
  }
`;

export default FooterStyles;
