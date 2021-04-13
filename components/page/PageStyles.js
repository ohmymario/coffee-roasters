import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyles = createGlobalStyle`

  ${normalize}

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

    --maxWidth: calc(1280px + 3rem);
    box-sizing: border-box;
    font-size: 1rem;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  h1, h2, h3, h4 {
    font-family: 'Fraunces', serif;
    color: var(--darkGreyBlue);
    margin: 0;
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
    background: var(--lightCreamBG);

  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: var(--grey);
    &:hover {
      /* text-decoration: underline; */
    }
  }

  p {
    margin: 0;
  }

  pre {
    font-family: 'Barlow', sans-serif;
    margin: 0;
  }

  button {
    font-family: 'Fraunces', serif;
    font-size: 1.125rem;
    color: var(--lightCreamBG);
    background: var(--darkCyan);
    border: none;
    padding: 17px 0;
    width: 220px;
    border-radius: 3px;
    margin: 5px 0;
    &:hover {
      cursor: pointer;
      background: var(--lightCyan);
    }
    &:disabled {
      background: var(--btnDisabled);
    }
  }

`;

export { GlobalStyles };
