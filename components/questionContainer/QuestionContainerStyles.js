import styled from 'styled-components';

const QuestionContainerStyles = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 85px;
  max-width: 1280px;

  .question {
    flex: 0 1 730px;
    &-submit {
      text-align: end;
    }
  }

  @media (max-width: 768px) {
    padding: 0;
    margin-bottom: 9em;

    .selection {
      display: none;
    }

    .question {
      &-submit {
        text-align: center;
      }
    }
  }
`;

export default QuestionContainerStyles;
