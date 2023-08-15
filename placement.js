var slideIndex = 1;
showSlide(slideIndex);
function plusSlides(n) {
    showSlide(slideIndex += n);
}
function currentSlide(n) {
    showSlide(slideIndex = n);
}
function showSlide(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
     slides[slideIndex - 1].style.display = "block";
     dots[slideIndex - 1].className += " active";
}

var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
   var slide = document.getElementsByClassName("mySlides");
   for (i = 0; i < slide.length; i++) {
       slide[i].style.display = "none";
   }
   slideIndex++;
   if (slideIndex > slide.length) { slideIndex = 1 }
   slide[slideIndex - 1].style.display = "block";
   setTimeout(showSlides, 4000); // Change image every 2 seconds
}

function toggleTable(tableId) {
    var tableContainers = document.querySelectorAll('.table-container');
    tableContainers.forEach(function(container) {
        if (container.id === tableId) {
            container.classList.toggle('actived');
        } else {
            container.classList.remove('active');
        }
    });
}