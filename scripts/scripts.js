const showAnswerButton = document.querySelector('[data-js="answer-button"]');
const firstAnswer = document.querySelector('[data-js="first-answer"]');

showAnswerButton.addEventListener('click', () => {
  firstAnswer.classList.toggle('display-toggle');
});
