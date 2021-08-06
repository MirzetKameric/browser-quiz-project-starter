'use strict';

import { QUESTION_CONTAINER_ID } from '../constants.js';
import { createQuestionElement } from '../views/questionViews.js';
import { clearDOMElement, getDOMElement } from '../utils/DOMUtils.js';
import { countDownTimer } from '../components/timer.js';
import { quizData } from '../data.js';

export const showCurrentQuestion = () => {
  const currentQuestion =
    quizData.questions[Math.floor(Math.random() * quizData.questions.length)];
  const questionDOM = createQuestionElement(currentQuestion);
  const questionContainer = getDOMElement(QUESTION_CONTAINER_ID);
  clearDOMElement(questionContainer);
  questionContainer.appendChild(questionDOM);
  document.querySelector(
    '.score'
  ).textContent = `Correct Answers ${score} / ${quizData.questions.length}`;
  const disabledBtn = getDOMElement('next-question-button');
  disabledBtn.setAttribute('disabled', 'disabled');
  disabledBtn.classList.add('disabled');
};

export const handleNextQuestion = () => {
  quizData.currentQuestionIndex = quizData.currentQuestionIndex + 1;

  showCurrentQuestion();
};

let score = 0;
export const handleAnswerCheck = (event) => {
  const enabledBtn = getDOMElement('next-question-button');
  enabledBtn.removeAttribute('disabled');
  enabledBtn.classList.remove('disabled');
  const elementChosenAnswer = event.target;
  const elementAnswer = event.target.getAttribute('data-value');
  const currentQuestion = quizData.questions[quizData.currentQuestionIndex];
  const rightAnswer = currentQuestion.correct;
  document.querySelectorAll('.answer-options').forEach((answer) => {
    answer.style.pointerEvents = 'none';
  });

  if (elementAnswer === currentQuestion.correct) {
    elementChosenAnswer.style.pointerEvents = 'none';
    elementChosenAnswer.classList.add('correctAnswer');
    score++;
    document.querySelector(
      '.score'
    ).textContent = `Correct Answers ${score} / ${quizData.questions.length} `;
  } else {
    elementChosenAnswer.style.pointerEvents = 'none';
    const rightAnswerElement = document.querySelector(
      `[data-value=${rightAnswer}]`
    );
    elementChosenAnswer.classList.add('wrongAnswer');
    rightAnswerElement.style.color = 'orange';
  }
};

countDownTimer();
