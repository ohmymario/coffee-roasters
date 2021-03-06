import styled from 'styled-components';

const HeaderStyles = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.2em 0 2.7em 0;
  position: ${props => (props.open ? 'fixed' : '')};
  z-index: ${props => (props.open ? '10001' : '')};
  width: ${props => (props.open ? 'calc(100% - 48px);' : '')};

  .mobNav-Container {
    display: none;
    button {
      border: none;
      background: none;
      cursor: pointer;
    }
  }

  @media (max-width: 768px) {
    margin-bottom: 10px;
  }

  @media (max-width: 605px) {
    margin-bottom: 10px;

    .mobNav-Container {
      display: block;
    }

    nav {
      display: none;
    }
  }
`;

export default HeaderStyles;
