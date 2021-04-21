import React, { useState } from 'react';
import QuestionContainerStyles from './QuestionContainerStyles';
import Question from '../question/Question';
import Selection from '../selection/Selection';
import { QuestionContainerData } from './QuestionContainerData';

const QuestionContainer = () => {
  const [questionData, setQuestionData] = useState(QuestionContainerData);

  // prob really good place for a custom hook

  function updateAnswer(findQuestion, name, answer) {
    const updatedQuestion = {
      ...findQuestion,
      selectedAnswer: answer,
      selected: true,
    };
    const updatedData = questionData.map(data => {
      if (data.name === name) return updatedQuestion;
      return data;
    });
    setQuestionData(updatedData);
  }

  function deselectAnswer(findQuestion, name) {
    const updatedQuestion = {
      ...findQuestion,
      selected: false,
      selectedAnswer: null,
    };

    const updatedData = questionData.map(data => {
      if (data.name === name) return updatedQuestion;
      return data;
    });
    setQuestionData(updatedData);
  }

  function setQuestion(name, answer) {
    const findQuestion = questionData.find(data => data.name === name);
    if (answer === findQuestion.selectedAnswer) {
      deselectAnswer(findQuestion, name);
      return;
    }

    updateAnswer(findQuestion, name, answer);
  }

  function setTab(name) {
    const findQuestion = questionData.find(data => data.name === name);
    const updatedQuestion = {
      ...findQuestion,
      open: !findQuestion.open,
    };

    const updatedData = questionData.map(data => {
      if (data.name === name) return updatedQuestion;
      return data;
    });
    setQuestionData(updatedData);
  }

  return (
    <QuestionContainerStyles>
      <div className="selection">
        {questionData.map((question, i) => (
          <Selection
            setTab={setTab}
            name={question.name}
            selected={question.selected}
            index={i}
            key={i}
          />
        ))}
      </div>
      <div className="question">
        {questionData.map((props, i) => (
          <Question
            key={i}
            {...props}
            setTab={setTab}
            setQuestion={setQuestion}
          />
        ))}
      </div>
    </QuestionContainerStyles>
  );
};

export default QuestionContainer;
