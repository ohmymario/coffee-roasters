import React, { useState } from 'react';
import { QuestionContainerData } from './QuestionContainerData';

const QuestionContainer = () => {
  const [questionData, setQuestionData] = useState(QuestionContainerData);

  function setQuestionAnswer() {
    const testName = 'Preferences';
    const testAnswer = 'Capsule';

    const findQuestion = questionData.find(data => data.name === testName);
    const updateQuestion = {
      ...findQuestion,
      selectedAnswer: testAnswer,
      selected: true,
    };

    const updatedData = questionData.map(data => {
      if (data.name === testName) return updateQuestion;
      return data;
    });

    setQuestionData(updatedData);
  }

  // console.log(questionData);
  return (
    <div>
      <button type="button" onClick={() => setQuestionAnswer()}>
        selection
      </button>
    </div>
  );
};

export default QuestionContainer;
