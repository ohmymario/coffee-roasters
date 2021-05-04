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
      a:hover {
        color: var(--lightCreamBG);
      }
    }
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
`;

export default FooterStyles;
