import { poUpAnswer } from './each-answer.js';
console.log(poUpAnswer);

//Antwort anzeigen einzeln
/* const showAnswerButton = document.querySelector('[data-js="answer-button"]');
const firstAnswer = document.querySelector('[data-js="answer"]');

showAnswerButton?.addEventListener('click', () => {
  firstAnswer.classList.toggle('display-toggle');
});
*/
//Aktion Textfeld füllen:

const inputForm = document.querySelector('[data-js="input-form"]');
const inputCounter = document.querySelector('[data-js="input-counter"]');

inputForm?.addEventListener('input', () => {
  if (inputForm.value.length < 40) {
    inputCounter.textContent = inputForm.value.length;
  } else {
    inputCounter.textContent = 'Your limit is reached';
  }
});

// toggle bookmark js  JAN */

const bookmarkList = document.querySelectorAll('[data-js="bookmark"]');

bookmarkList.forEach(bookmark => {
  const greenBookmark = bookmark.querySelector('[data-js="bookmark-green"]');
  const pinkBookmark = bookmark.querySelector('[data-js="bookmark-pink"]');

  bookmark.addEventListener('click', () => {
    greenBookmark.classList.toggle('mark-icon-green--hidden');
    pinkBookmark.classList.toggle('mark-icon-pink--hidden');
  });
});

// const greenBookmarkList = document.querySelectorAll(
//   '[data-js="bookmark-green"]'
// );
