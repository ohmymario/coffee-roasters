import styled from 'styled-components';

const QuestionContainerStyles = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 85px;
  max-width: 1280px;
  border: 1px solid red;

  .question {
    flex: 0 1 730px;
    &-submit {
      text-align: end;
    }
  }

  @media screen and (min-width: 769px) and (max-width: 1275px) {
    padding: 85px 3.5vw 85px 3.5vw;

    .selection {
      padding-right: 40px;
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
