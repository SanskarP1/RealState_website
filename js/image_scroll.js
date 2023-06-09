const scrollLeftButton = document.querySelector('.scroll-left');
const scrollRightButton = document.querySelector('.scroll-right');
const galleryContainer = document.querySelector('.gallery-container');

scrollLeftButton.addEventListener('click', () => {
  galleryContainer.scrollBy({
    left: -200, // Adjust the scrolling distance as needed
    behavior: 'smooth',
  });
});

scrollRightButton.addEventListener('click', () => {
  galleryContainer.scrollBy({
    left: 200, // Adjust the scrolling distance as needed
    behavior: 'smooth',
  });
});
