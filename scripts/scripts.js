const showAnswerButton = document.querySelector('[data-js="answer-button"]');
const firstAnswer = document.querySelector('[data-js="first-answer"]');

showAnswerButton?.addEventListener('click', () => {
  firstAnswer.classList.toggle('display-toggle');
});

const inputForm = document.querySelector('[data-js="input-form"]');
const inputCounter = document.querySelector('[data-js="input-counter"]');

inputForm?.addEventListener('input', () => {
  if (inputForm.value.length < 40) {
    inputCounter.textContent = inputForm.value.length;
  } else {
    inputCounter.textContent = 'Your limit is reached';
  }
});
