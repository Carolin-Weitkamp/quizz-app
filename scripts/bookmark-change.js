const pinkBookmark = document.querySelector('[data-js="bookmark-pink"]');
const greenBookmark = document.querySelector('[data-js="bookmark-green"]');

pinkBookmark.addEventListener('click', () => {
  pinkBookmark.classList.toggle('bookmark-pink--hidden');
  greenBookmark.classList.toggle('bookmark-green--hidden');
});
