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

  @media screen and (min-width: 769px) and (max-width: 1275px) {
    padding: 85px 3.5vw 85px 3.5vw;

    .selection {
      padding-right: 40px;
    }
  }

  @media screen and (min-width: 769px) and (max-width: 905px) {
    padding: 85px 0 85px 0;

    .selection {
      padding-right: 20px;
    }
  }

  @media screen and (min-width: 501px) and (max-width: 768px) {
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

  @media (max-width: 500px) {
    padding: 0;
    margin-bottom: 7.5em;
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
