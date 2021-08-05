'use strict';

import { QUESTION_CONTAINER_ID } from '../constants.js';
import { createQuestionElement } from '../views/questionViews.js';
import { clearDOMElement, getDOMElement } from '../utils/DOMUtils.js';
import { quizData } from '../data.js';

export const showCurrentQuestion = () => {
  const currentQuestion = quizData.questions[quizData.currentQuestionIndex];

  const questionDOM = createQuestionElement(currentQuestion);

  const questionContainer = getDOMElement(QUESTION_CONTAINER_ID);
  clearDOMElement(questionContainer);
  questionContainer.appendChild(questionDOM);
  document.querySelector(
    '.score'
  ).textContent = `Correct Answers ${score} / ${quizData.questions.length} `;
};

export const handleNextQuestion = () => {
  quizData.currentQuestionIndex = quizData.currentQuestionIndex + 1;

  showCurrentQuestion();
};
let score = 0;
export const handleAnswerCheck = (event) => {
  const elementChosenAnswer = event.target;
  const elementAnswer = event.target.getAttribute('data-value');
  console.log(elementChosenAnswer);
  const currentQuestion = quizData.questions[quizData.currentQuestionIndex];
  const rightAnswer = currentQuestion.correct;

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

export const countDownTimer = () => {
  const startingMinutes = 10;
  let time = startingMinutes * 60;
  const countdownEl = document.getElementById('timer');
  const timeOver = setInterval(updateCountDown, 1000);
  function updateCountDown() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    if (time <= 0) {
      clearInterval(timeOver);
    }
    countdownEl.textContent = ` ${minutes} : ${seconds}`;
    time--;
  }
};
// countDownTimer();
