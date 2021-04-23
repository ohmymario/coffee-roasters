import React, { useState } from 'react';
import QuestionContainerStyles from './QuestionContainerStyles';
import Question from '../question/Question';
import Selection from '../selection/Selection';
import { QuestionContainerData } from './QuestionContainerData';

const QuestionContainer = () => {
  const [questionData, setQuestionData] = useState(QuestionContainerData);

  // prob really good place for a custom hook
  function updateQuesState(updatedQuestion, name) {
    const updatedData = questionData.map(data => {
      if (data.name === name) return updatedQuestion;
      return data;
    });

    setQuestionData(updatedData);
  }

  function updateAnswer(foundQuestion, name, answer) {
    const updatedQuestion = {
      ...foundQuestion,
      selectedAnswer: answer,
      selected: true,
    };
    updateQuesState(updatedQuestion, name);
  }

  function deselectAnswer(foundQuestion, name) {
    const updatedQuestion = {
      ...foundQuestion,
      selected: false,
      selectedAnswer: null,
    };

    updateQuesState(updatedQuestion, name);
  }

  function toggleTab(name) {
    const foundQuestion = questionData.find(data => data.name === name);
    const updatedQuestion = {
      ...foundQuestion,
      open: !foundQuestion.open,
    };
    updateQuesState(updatedQuestion, name);
  }

  function handlePref(foundQuestion, name, answer) {
    const grindDefault = QuestionContainerData.find(
      item => item.name === 'Grind Option'
    );

    const grindDisabled = {
      ...grindDefault,
      disabled: true,
    };

    const updatedQuestion = {
      ...foundQuestion,
      selectedAnswer: answer,
      selected: true,
    };

    const noAnswer = {
      ...foundQuestion,
      selected: false,
      selectedAnswer: null,
    };

    // if its trying to remove answer then reset grind
    if (answer === foundQuestion.selectedAnswer) {
      const updatedData = questionData.map(data => {
        if (data.name === name) return noAnswer;
        if (data.name === 'Grind Option') return grindDefault;
        return data;
      });
      setQuestionData(updatedData);
      return;
    }

    // if its anything but capsule then reset grind
    if (answer !== 'Capsule') {
      const updatedData = questionData.map(data => {
        if (data.name === name) return updatedQuestion;
        if (data.name === 'Grind Option') return grindDefault;
        return data;
      });
      setQuestionData(updatedData);
      return;
    }

    // if its capsule then reset disable
    if (answer === 'Capsule') {
      const updatedData = questionData.map(data => {
        if (data.name === name) return updatedQuestion;
        if (data.name === 'Grind Option') return grindDisabled;
        return data;
      });
      setQuestionData(updatedData);
    }
  }

  function setQuestion(name, answer) {
    const foundQuestion = questionData.find(data => data.name === name);
    if (name === 'Preferences') {
      handlePref(foundQuestion, name, answer);
      return;
    }
    if (answer === foundQuestion.selectedAnswer) {
      deselectAnswer(foundQuestion, name);
      return;
    }

    updateAnswer(foundQuestion, name, answer);
  }

  return (
    <QuestionContainerStyles>
      <div className="selection">
        {questionData.map((question, i) => (
          <Selection
            toggleTab={toggleTab}
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
            toggleTab={toggleTab}
            setQuestion={setQuestion}
          />
        ))}
      </div>
    </QuestionContainerStyles>
  );
};

export default QuestionContainer;
