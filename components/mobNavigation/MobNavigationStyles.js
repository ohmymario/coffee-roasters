import styled from 'styled-components';

const MobNavigationStyles = styled.ul`
  position: relative;
  margin: 130px auto;
  padding: 0;
  overflow: hidden;
  text-align: center;
  li {
    margin-bottom: 2em;
    a {
      font-size: 24px;
      color: var(--darkGreyBlue);
      text-transform: capitalize;
      font-family: 'Fraunces', serif;
    }
  }
`;

const Overlay = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 1);
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0.99) 60%,
    rgba(240, 240, 240, 0.99) 70%,
    rgba(162, 162, 162, 0.35) 100%
  );
  z-index: 10000;
`;

export { MobNavigationStyles, Overlay };
