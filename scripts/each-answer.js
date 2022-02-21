export const poUpAnswer = document.querySelectorAll(
  '[data-js="pop-up-answer"]'
);

poUpAnswer.forEach(poUpAnswer => {
  const answerButton = poUpAnswer.querySelector('[data-js="answer-button"]');
  const answer = poUpAnswer.querySelector('[data-js="answer"]');
  answerButton.addEventListener('click', () => {
    answer.classList.toggle('display-toggle');
  });
});
