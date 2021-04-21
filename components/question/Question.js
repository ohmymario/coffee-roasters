import React from 'react';
import Image from 'next/image';
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
    <QuestionStyles selected={selected} open={open}>
      <div className="question-container">
        <h2>{question}</h2>
        <button type="button">
          <Image
            src="/images/icons/icon-arrow.svg"
            layout="fixed"
            height={11}
            width={18}
          />
        </button>
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
