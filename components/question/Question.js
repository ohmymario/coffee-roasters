import React from 'react';
import QuestionStyles from './QuestionStyles';

const Question = props => {
  console.log(props);
  const { name, open, question, selected, selectedAnswer, selections } = props;
  return (
    <QuestionStyles selected={selected}>
      <div className="question-container">
        <h2>{question}</h2>
        <span>arrow</span>
      </div>
      <div className="answer-container">
        {selections.map(answer => (
          <div>
            <h4>{answer.title}</h4>
            <p>{answer.description}</p>
          </div>
        ))}
      </div>
    </QuestionStyles>
  );
};

export default Question;
