import styled from 'styled-components';

const AboutMessageStyles = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 85px 0 85px;
  position: relative;
  margin-bottom: 10.5rem;

  div[class*='about']:nth-child(1) {
    margin-right: 35px;
  }

  div[class*='about']:nth-child(2) {
    margin-left: 34px;
  }

  .about-msg-background {
    position: absolute;
    width: 100%;
    height: 474px;
    border-radius: 10px;
    top: 88px;
    left: 0;
    background: #2c343e;
    z-index: -1;
  }

  .about-msg-image {
    img {
      border-radius: 8px;
    }
  }

  .about-msg-message {
    max-width: 540px;
    margin-top: ${props => (props.bg ? '2.4em' : '0')};
    h2 {
      margin-bottom: 0.8em;
    }
    p {
      opacity: ${props => (props.primary ? '100%' : '80%')};
    }
    h2,
    p {
      color: ${props =>
        props.primary ? 'var(--darkGreyBlue)' : 'var(--lightCreamBG)'};
    }
  }

  @media screen and (min-width: 769px) and (max-width: 1250px) {
    .about-msg-message {
      margin-top: ${props => (props.bg ? '15%' : '0')};
    }
  }

  @media screen and (min-width: 769px) and (max-width: 1100px) {
    div[class*='about']:nth-child(1) {
      margin-right: 0;
    }
  }

  @media screen and (min-width: 769px) and (max-width: 1040px) {
    .about-msg-message {
      margin-top: ${props => (props.bg ? '20%' : '0')};
    }
  }

  @media screen and (min-width: 501px) and (max-width: 990px) {
    padding: 0;
    flex-wrap: ${props => (props.wrapping ? 'wrap' : '')};
    justify-content: ${props => (props.wrapping ? 'center' : '')};
    margin-bottom: ${props => (props.bg ? '13.125rem' : '9rem')};

    div[class*='about']:nth-child(1) {
      margin: ${props => (props.wrapping ? '0' : '')};
    }

    div[class*='about']:nth-child(2) {
      margin: ${props => (props.wrapping ? '0' : '')};
      margin-bottom: ${props => (props.wrapping ? '64px' : '')};
    }

    .about-msg-background {
      position: absolute;
      width: 100%;
      height: 488px;
      border-radius: 10px;
      top: 170px;
      left: 0;
      background: #2c343e;
      z-index: -1;
    }

    .about-msg-image {
      order: ${props => (props.wrapping ? '-1' : '')};
      * {
        max-width: ${props => (!props.wrapping ? '281px' : '573px')};
        max-height: ${props => (!props.wrapping ? '470px' : '320px')};
      }
      img {
        object-fit: cover;
        border-radius: 8px;
      }
    }

    .about-msg-message {
      margin: ${props => (props.wrapping ? '0' : '')};
      text-align: ${props => (props.wrapping ? 'center' : '')};
      h2 {
        font-size: 32px;
        margin-bottom: ${props => (props.wrapping ? '0.75em' : '0.95em')};
        line-height: 1.5;
      }
      p {
        line-height: 1.667;
      }
    }
  }

  @media (max-width: 500px) {
    margin-bottom: 7.5rem;
    flex-wrap: ${props => (props.wrapping ? 'wrap' : '')};
    flex-direction: ${props => (props.wrapping ? '' : 'column')};
    padding: ${props => (props.primary ? '0' : '0 24px')};

    div[class*='about']:nth-child(1) {
      margin: 0;
      margin-bottom: ${props => (props.wrapping ? '4rem' : '3rem')};
    }

    div[class*='about']:nth-child(2) {
      margin: 0;
      margin: ${props => (props.wrapping ? '0 auto 64px auto' : '')};
      text-align: center;
    }

    .about-msg-background {
      height: 450px;
    }

    .about-msg-image {
      width: 100%;
      order: ${props => (props.wrapping ? '-1' : '')};
      * {
        max-width: 100%;
        max-height: ${props => (!props.wrapping ? '400px' : '156px')};
        object-position: ${props => (!props.wrapping ? 'top' : '50% 88%')};
      }
      img {
        object-fit: cover;
        border-radius: 8px;
      }
    }

    .about-msg-message {
      text-align: center;
      h2 {
        font-size: ${props => (props.primary ? '32px' : '28px')};

        margin-bottom: 1em;
        line-height: 1.5;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      }
      p {
        line-height: 1.667;
      }
    }
  }
`;

export default AboutMessageStyles;
