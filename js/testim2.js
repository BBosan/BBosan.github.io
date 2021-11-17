var slideIndex = 0;
var t;
var dots;
var timedelay = 2000;

window.onload = function() {
  var x = document.getElementsByClassName("mySlides");
  var parent_elem = document.getElementById('myslideFrame')
  showDivs(slideIndex);
  carousel();
};

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  dots = document.getElementsByClassName("dot");

  if (n > x.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = x.length;
  }

  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  x[slideIndex - 1].style.display = "inline-block";
  dots[slideIndex - 1].className += " active";

}

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slideIndex++;

  if (slideIndex > x.length) {
    slideIndex = 1
  }

  x[slideIndex - 1].style.display = "inline-block";
  dots[slideIndex - 1].className += " active";
  t = setTimeout(carousel, timedelay);
}

function pauseCarousel() {
  clearTimeout(t)
}

function startCarousel() {
  t = setTimeout(carousel, timedelay);
}
