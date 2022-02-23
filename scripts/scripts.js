import { poUpAnswer } from './each-answer.js';
console.log(poUpAnswer);

//Antwort anzeigen einzeln
/* const showAnswerButton = document.querySelector('[data-js="answer-button"]');
const firstAnswer = document.querySelector('[data-js="answer"]');

showAnswerButton?.addEventListener('click', () => {
  firstAnswer.classList.toggle('display-toggle');
});
*/

/* Aktion Textfeld füllen: ----- fehlt hier wieder was / der Zähler funktioniert nicht mehr??
------------------------------------------------------------------------*/

const inputForm = document.querySelector('[data-js="input-form"]');
const inputCounter = document.querySelector('[data-js="input-counter"]');

inputForm?.addEventListener('input', () => {
  if (inputForm.value.length < 40) {
    inputCounter.textContent = inputForm.value.length;
  } else {
    inputCounter.textContent = 'Your limit is reached';
  }
});

/*------------toggle bookmark von pink zu grün 
---------------------------------------------------------------------------- */

const bookmarkList = document.querySelectorAll('[data-js="bookmark"]');

bookmarkList.forEach(bookmark => {
  const greenBookmark = bookmark.querySelector('[data-js="bookmark-green"]');
  const pinkBookmark = bookmark.querySelector('[data-js="bookmark-pink"]');

  bookmark.addEventListener('click', () => {
    greenBookmark.classList.toggle('mark-icon-green--hidden');
    pinkBookmark.classList.toggle('mark-icon-pink--hidden');
  });
});

/* ----------------------------------------------
---------------------------------------------------------------------- */
const linkHome = document.querySelector('.link-home');
const linkBoockmarks = document.querySelector('.link-boockmarks');
const linkCreate = document.querySelector('.link-create');
const linkProfile = document.querySelector('.link-profile');

const pageHome = document.querySelector('#home');
const pageBookmarks = document.querySelector('#bookmars');
const pageCreate = document.querySelector('#create');
const pageProfile = document.querySelector('#profile');

linkHome.addEventListener('click', () => {
  pageHome.classList.add('current');
  pageBookmarks.classList.remove('current');
  pageCreate.classList.remove('current');
  pageProfile.classList.remove('current');
});

linkBoockmarks.addEventListener('click', () => {
  pageHome.classList.remove('current');
  pageBookmarks.classList.add('current');
  pageCreate.classList.remove('current');
  pageProfile.classList.remove('current');
});

linkCreate.addEventListener('click', () => {
  pageHome.classList.remove('current');
  pageBookmarks.classList.remove('current');
  pageCreate.classList.add('current');
  pageProfile.classList.remove('current');
});

linkProfile.addEventListener('click', () => {
  pageHome.classList.remove('current');
  pageBookmarks.classList.remove('current');
  pageCreate.classList.remove('current');
  pageProfile.classList.add('current');
});
