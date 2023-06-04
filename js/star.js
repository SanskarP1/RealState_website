// Add event listeners to star rating elements
var starRatingElements = document.getElementsByClassName("star-rating");
for (var i = 0; i < starRatingElements.length; i++) {
  var stars = starRatingElements[i].getElementsByTagName("span");
  for (var j = 0; j < stars.length; j++) {
    stars[j].addEventListener("click", onStarClick);
  }
}

// Event listener for star click
function onStarClick(event) {
  var selectedStar = event.target;
  var selectedRating = selectedStar.parentNode.getElementsByClassName("rating-value")[0];
  
  // Reset previous selected stars
  var siblingStars = selectedStar.parentNode.getElementsByTagName("span");
  for (var i = 0; i < siblingStars.length; i++) {
    siblingStars[i].classList.remove("selected");
  }
  
  // Add selected class to clicked star and update rating value
  selectedStar.classList.add("selected");
  selectedRating.textContent = getRatingValue(selectedStar);
}

// Get the rating value based on the selected star
function getRatingValue(selectedStar) {
  var stars = selectedStar.parentNode.getElementsByTagName("span");
  for (var i = 0; i < stars.length; i++) {
    if (stars[i] === selectedStar) {
      return i + 1;
    }
  }
}
