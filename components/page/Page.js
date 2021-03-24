import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyles = createGlobalStyle`

  ${normalize}

  @import url('https://fonts.googleapis.com/css2?family=Barlow:wght@400;700&family=Fraunces:wght@900&display=swap');

  html {
    --lightCyan: #66D2CF;
    --darkCyan: #0E8784;
    --darkGreyBlue: #333D4B;
    --darkGrayBlue: val(--darkGreyBlue);
    --paleOrange: #FDD6BA;
    --lightCreamBG: #FEFCF7;
    --grey: #83888F;
    --gray: val(--grey);
    --btnDisabled: #E2DEDB;

    --maxWidth: 1280px;
    box-sizing: border-box;
    font-size: 1rem;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  h1, h2, h3, h4 {
    font-family: 'Fraunces', serif;
    color: var(--darkGreyBlue)
  }

  h1 {
    /* 72px */
    font-size: 4.5rem;
    line-height: 1;
  }

  h2 {
    /* 40px */
    font-size: 2.5rem;
    line-height: 1.2;
  }

  h3 {
    /* 32px */
    font-size: 2rem;
    line-height: 1.125;
  }

  h4 {
    /* 24px */
    font-size: 1.5rem;
    line-height: 1.33;
  }

  body {
    font-family: 'Barlow', sans-serif;
    font-size: 1rem;
    line-height: 1.625;
    padding: 0;
    margin: 0;
    color: var(--grey);
  }

  a {
    text-decoration: none;
    color: var(--lightCreamBG);
    &:hover {
      text-decoration: underline;
    }
  }

  button {
    font-family: 'Fraunces', serif;
    font-size: 1.125rem;
    color: var(--lightCreamBG);
    background: var(--darkCyan);
    &:hover {
      background: var(--lightCyan)
    }
    &:disabled {
      background: var(--btnDisabled)
    }
  }

`;

const Page = props => {
  const { children } = props;
  return (
    <>
      <GlobalStyles />
      {children}
    </>
  );
};

export default Page;
