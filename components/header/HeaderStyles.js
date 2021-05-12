import styled from 'styled-components';

const HeaderStyles = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.2em 0 2.7em 0;

  @media (max-width: 768px) {
    margin-bottom: 10px;
  }
`;

export default HeaderStyles;
