import styled from 'styled-components';

const PageLinksStyles = styled.ul`
  display: flex;
  padding: 0;
  a:hover {
    color: var(--lightCreamBG);
  }
  li {
    font-family: 'Barlow', sans-serif;
    font-weight: 700;
    font-size: 0.75rem;
    letter-spacing: 0.92px;
    text-transform: uppercase;
    &:not(:last-child) {
      padding-right: 2.85em;
    }
  }

  @media (max-width: 768px) {
    margin-bottom: 65px;
  }
`;

export default PageLinksStyles;
