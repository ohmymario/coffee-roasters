import styled from 'styled-components';

const NavigationStyles = styled.nav`
  font-family: 'Barlow', sans-serif;
  font-weight: 700;
  font-size: 0.75rem;
  letter-spacing: 0.92px;
  text-transform: uppercase;

  ul {
    display: flex;
    padding: 0;
    margin: 0;
  }

  // add padding to all but last child
  li:not(:last-child) {
    padding-right: 2.75em;
  }
`;

export default NavigationStyles;
