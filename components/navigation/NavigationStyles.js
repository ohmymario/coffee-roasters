import styled from 'styled-components';

const NavigationStyles = styled.nav`
  ul {
    padding: 0;
    margin: 0;
    a {
      transition: color 0.25s;
      &:hover {
        color: var(--darkGreyBlue);
      }
    }
  }
`;

export default NavigationStyles;
