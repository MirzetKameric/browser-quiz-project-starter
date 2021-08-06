import { createDOMElement } from '../utils/DOMUtils.js';
export const countDownTimer = () => {
  const timerElement = createDOMElement('p');
  timerElement.classList.add('timer');
  const container = document.getElementById('user-interface');
  container.appendChild(timerElement);
  const startingMinutes = 10;
  let time = startingMinutes * 60;
  const timeOver = setInterval(updateCountDown, 1000);
  function updateCountDown() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    if (time <= 0) {
      clearInterval(timeOver);
    }
    timerElement.textContent = `${minutes} : ${seconds}`;
    time--;
  }
};
