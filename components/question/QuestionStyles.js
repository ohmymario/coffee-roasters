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
    h2 {
      color: var(--grey);
    }
  }

  .answer-container {
    gap: 23px;

    /* for mobile view */
    /* flex-direction: column; */

    div {
      background: ${props =>
        props.selected ? 'var(--selectActive)' : 'var(--selectDefault)'};
      border-radius: 10px;
      width: 100%;
      padding: 32px 28px 84px 28px;
      :hover {
        background: var(--selectHover);
      }

      > * {
        color: var(--lightCreamBG);
        color: ${props =>
          props.selected ? 'var(--lightCreamBG)' : 'var(--darkGreyBlue)'};
      }

      h4 {
        margin-bottom: 1em;
      }
    }
  }
`;

export default QuestionStyles;
