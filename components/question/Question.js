import React from 'react';
import QuestionStyles from './QuestionStyles';

const Question = props => {
  const {
    name,
    open,
    question,
    selected,
    selectedAnswer,
    selections,
    setQuestionAnswer,
  } = props;

  return (
    <QuestionStyles selected={selected}>
      <div className="question-container">
        <h2>{question}</h2>
        <span>arrow</span>
      </div>
      <div className="answer-container">
        {selections.map((answer, i) => (
          <button
            key={i}
            onClick={() => setQuestionAnswer(name, answer.title)}
            type="button"
            className={answer.title === selectedAnswer ? 'selected' : undefined}
          >
            <h4>{answer.title}</h4>
            <p>{answer.description}</p>
          </button>
        ))}
      </div>
    </QuestionStyles>
  );
};

export default Question;
