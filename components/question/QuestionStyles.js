import styled from 'styled-components';

const QuestionStyles = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 5.5em;

  .answer-container,
  .question-container {
    display: flex;
    justify-content: space-between;
  }

  .question-container {
    margin-bottom: 3.5em;
    align-items: center;
    h2 {
      color: var(--grey);
    }
    button {
      border: none;
      outline: none;
      background: none;
      :focus-visible {
        box-shadow: 0 0 2px 2px #51a7e8;
      }
      img {
        transform: ${props => (props.open ? `rotate(180deg)` : `rotate(0deg)`)};
      }
    }
  }

  .answer-container {
    gap: 23px;

    /* for mobile view */
    /* flex-direction: column; */

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
`;

export default QuestionStyles;
