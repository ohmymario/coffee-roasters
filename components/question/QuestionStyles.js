import styled from 'styled-components';

const QuestionStyles = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 5.5em;

  :nth-last-child(3) {
    margin-bottom: ${props => (props.open ? '' : '40px')};
  }

  .answer-container,
  .question-container {
    display: flex;
    justify-content: space-between;
  }

  .question-container {
    margin-bottom: 3.5em;
    align-items: center;
    border: none;
    outline: none;
    background: none;
    opacity: ${props => (props.disabled ? `50%` : `100%`)};
    &:focus-visible {
      box-shadow: 0 0 2px 2px #51a7e8;
    }
    &[disabled] {
      cursor: not-allowed;
    }
    &:hover:not([disabled]) img {
      filter: brightness(0) saturate(100%) invert(81%) sepia(69%) saturate(341%)
        hue-rotate(121deg) brightness(90%) contrast(81%);
    }

    h2 {
      color: var(--grey);
      text-align: start;
      padding-right: 10px;
    }

    img {
      transform: ${props => (props.open ? `rotate(180deg)` : `rotate(0deg)`)};
    }
  }

  .answer-container {
    gap: 23px;

    /* for mobile view */
    /* flex-direction: column; */

    &.fadeOut {
      opacity: 0;
      height: 0;
      display: none;
    }
    &.fadeIn {
      opacity: 1;
      transition: height 0.2s, opacity 0.5s;
    }

    button {
      background: var(--selectDefault);
      border: none;
      text-align: initial;
      border-radius: 10px;
      width: 100%;
      padding: 32px 28px 84px 28px;
      outline: none;
      cursor: pointer;
      :hover,
      :focus-visible,
      :active {
        background: var(--selectHover);
      }

      &[disabled] {
        pointer-events: none;
      }

      &.selected {
        background: var(--selectActive);
        :hover,
        :focus-visible,
        :active {
          /* TODO: MODIFY WITH LIGHTEN RATHER THAN HARDCODED VALUE */
          background: #11a29f;
        }
        > * {
          color: var(--lightCreamBG);
        }
      }

      > * {
        color: var(--darkGreyBlue);
      }

      h4 {
        margin-bottom: 1em;
      }
    }
  }

  @media screen and (min-width: 769px) and (max-width: 1275px) {
    .question-container {
      margin-bottom: 2.5em;
      h2 {
        font-size: clamp(32px, 3vw, 40px);
      }
    }
  }

  @media (max-width: 768px) {
    margin-bottom: 6.275em;

    :nth-last-child(3) {
      margin-bottom: ${props => (props.open ? '144px' : '40px')};
    }

    .question-container {
      margin-bottom: 2.5em;
      h2 {
        font-size: 32px;
      }
    }
    .answer-container {
      gap: 10px;
      min-height: 250px;
      button {
        p {
          font-size: 16px;
        }
      }
    }
  }
`;

export default QuestionStyles;
