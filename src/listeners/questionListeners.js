'use strict';

import { handleNextQuestion } from '../handlers/questionHandlers.js';
import { handleAnswerCheck } from '../handlers/questionHandlers.js';
<<<<<<< HEAD
=======
import { countDownTimer } from '../handlers/questionHandlers.js';
>>>>>>> 409e8dc658db790e4d3385fc9f5a9fe01ecfade5
export const nextQuestion = () => {
  handleNextQuestion();
};

export const checkAnswer = (event) => {
  handleAnswerCheck(event);
};
export const startTimer = (event) => {
  countDownTimer(event);
};
