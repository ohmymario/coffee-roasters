import React from 'react';
import Image from 'next/image';
import QuestionStyles from './QuestionStyles';

const Question = props => {
  const {
    name,
    open,
    disabled,
    question,
    selected,
    selectedAnswer,
    selections,
    setQuestion,
    toggleTab,
  } = props;

  return (
    <QuestionStyles disabled={disabled} selected={selected} open={open}>
      <button
        disabled={disabled}
        type="button"
        className="question-container"
        onClick={() => toggleTab(name)}
      >
        <h2>{question}</h2>
        <Image
          src="/images/icons/icon-arrow.svg"
          layout="fixed"
          height={11}
          width={18}
        />
      </button>
      <div className={`answer-container ${open ? 'fadeIn' : 'fadeOut'}`}>
        {selections.map((answer, i) => (
          <button
            disabled={disabled}
            key={i}
            onClick={() => setQuestion(name, answer.title)}
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
