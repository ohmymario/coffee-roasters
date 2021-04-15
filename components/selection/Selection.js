import React from 'react';

// there is a selection in the tab then grey out
// not clickable only tracks the answered questions
// 'hook' up to each question and keep in state located in questionContainer

const Selection = props => {
  console.log('fasdf');
  const { name, index, selected } = props;
  return (
    <>
      <p>
        <span>{index}</span>
        {name}
      </p>
    </>
  );
};

export default Selection;
