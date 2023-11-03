// TODO: Which element is the following line of code selecting?
//referencing the carouselbox class
var carousel = document.querySelector(".carouselbox");
// TODO: Which element is the following line of code selecting?
// references the two buttons that control the carousel
var next = carousel.querySelector(".next");
var prev = carousel.querySelector(".prev");
var index = 0;
var currentImage;

var images = [
  "https://picsum.photos/id/10/300/200",
  "https://picsum.photos/id/20/300/201",
  "https://picsum.photos/id/30/300/202",
  "https://picsum.photos/id/47/300/203"
];

carousel.style.backgroundImage = "url('https://picsum.photos/id/10/300/200')";

function navigate(direction) {
  index = index + direction;
  if (index < 0) { 
    index = images.length - 1; 
  } else if (index > images.length - 1) { 
    index = 0;
  }
  currentImage = images[index];
  carousel.style.backgroundImage = "url('" + currentImage + "')";
}

// TODO: Describe the functionality of the following event listener.
// opens image in the window
carousel.addEventListener("click", function() {
  window.location.href = images[index];
});

// TODO: Describe the functionality of the following event listener.
// references the navigate function and moves the direction forward
next.addEventListener("click", function(event) {
  // TODO: What is the purpose of the following line of code?
  // keeps the function from bubbling up and opening a new window
  event.stopPropagation();

  navigate(1);
});

// TODO: Describe the functionality of the following event listener.
// references the navigate function and moves the carousel backwards
prev.addEventListener("click", function(event) {
    // TODO: What would happen if we didn't add the following line of code?
    //keeps the function from bubbling up and opening a new window
  event.stopPropagation();

  navigate(-1);
});

navigate(0);
