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

  function handleCapsule(foundQuestion, name, answer) {
    const grindDef = {
      name: 'Grind Option',
      question: 'Want us to grind them?',
      open: false,
      disabled: true,
      selected: false,
      selectedAnswer: null,
      selections: [
        {
          title: 'Wholebean',
          description: 'Best choice if you cherish the full sensory experience',
        },
        {
          title: 'Filter',
          description:
            'For drip or pour-over coffee methods such as V60 or Aeropress',
        },
        {
          title: 'Cafetiére',
          description:
            'Course ground beans specially suited for french press coffee',
        },
      ],
    };

    const updatedQuestion = {
      ...foundQuestion,
      selectedAnswer: answer,
      selected: true,
    };

    const updatedData = questionData.map(data => {
      if (data.name === name) return updatedQuestion;
      if (data.name === 'Grind Option') return grindDef;
      return data;
    });

    setQuestionData(updatedData);
  }

  function setQuestion(name, answer) {
    const foundQuestion = questionData.find(data => data.name === name);

    if (answer === foundQuestion.selectedAnswer) {
      deselectAnswer(foundQuestion, name);
      return;
    }

    if (answer === 'Capsule') {
      handleCapsule(foundQuestion, name, answer);
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
