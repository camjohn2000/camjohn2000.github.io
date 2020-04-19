let slideIndex = 1;

// Next/previous controls
let plusSlides = n => {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
let currentSlide = n => {
  showSlides(slideIndex = n);
}

let showSlides = n => {
  let i;
  let slides = document.getElementsByClassName("mySlides");

  //If the index is > the number of slides, show 1 (read below)
  if (n > slides.length) {
    slideIndex = 1
  }

  //If the index is < 1, show the last slide (only show between 1 and 5)
  if (n < 1) {
    slideIndex = slides.length
  }

  //Don't show slides we aren't on
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  
  //Allows the testimonial box to actually display as a block
  slides[slideIndex - 1].style.display = "block";
}

showSlides(slideIndex);