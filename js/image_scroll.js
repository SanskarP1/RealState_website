document.addEventListener('DOMContentLoaded', function() {
  const galleryContainer = document.querySelector('.gallery-container');
  const gallery = document.querySelector('.gallery');
  const scrollLeftBtn = document.querySelector('.scroll-btn.left');
  const scrollRightBtn = document.querySelector('.scroll-btn.right');

  scrollLeftBtn.addEventListener('click', function() {
    gallery.scrollLeft -= 200; // Adjust the scroll distance as needed
  });

  scrollRightBtn.addEventListener('click', function() {
    gallery.scrollLeft += 200; // Adjust the scroll distance as needed
  });
});