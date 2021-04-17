import React from 'react';

const Question = props => {
  console.log(props);
  const { name, open, question, selected, selectedAnswer, selections } = props;
  return (
    <>
      <div>
        <h2>{question}</h2>
        <span>arrow</span>
      </div>
      <div>
        {selections.map(answer => (
          <>
            <h4>{answer.title}</h4>
            <p>{answer.description}</p>
          </>
        ))}
      </div>
    </>
  );
};

export default Question;
