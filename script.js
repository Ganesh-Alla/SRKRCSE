// Counting Numbers
function animateCounterNumbers() {
  var counterElements = document.querySelectorAll('.counter-numbers');
  var duration = 1000; 
  var totalSteps = 100; 

  counterElements.forEach(function(element) {
    var targetNumber = parseInt(element.getAttribute('data-number'));
    var startNumber = 0;
    var step = targetNumber / totalSteps;
    var intervalDuration = duration / totalSteps;

    var interval = setInterval(function() {
      if (startNumber >= targetNumber) {
        clearInterval(interval);
        element.textContent = targetNumber + "+";
        return;
      }
      startNumber += step;
      element.textContent = Math.round(startNumber);
    }, intervalDuration);
  });
}

function handleIntersection(entries, observer) {
  entries.forEach(function(entry) {
    if (entry.isIntersecting) {
      animateCounterNumbers();
      observer.unobserve(entry.target);
    }
  });
}

var counterSection = document.querySelector('.section-work-data');
var observer = new IntersectionObserver(handleIntersection, {
  root: null,
  rootMargin: '0px',
  threshold: 0.5 
});

observer.observe(counterSection);



  //navbar animation: 
  window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 0) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});


// Get all dropdown items
const dropdownItems = document.querySelectorAll('.dropdown');

// Add event listeners for hover
dropdownItems.forEach(item => {
    item.addEventListener('mouseenter', function () {
        this.classList.add('show');
    });
    item.addEventListener('mouseleave', function () {
        this.classList.remove('show');
    });
});

//Typing animation

var typed = new Typed(".auto-type",{
  strings: [
    '<span class="one">CSE Department.</span>',
    '<span class="two">World Of Innovation.</span>',
    '<span class="two">The Realm Of Teaching.</span>',
    '<span class="one">CSE Department.</span>'
  ],
  typeSpeed:100,
  backSpeed:50,
  loop:false,
  showCursor: true,
  onComplete: function() {
    var cursor = document.querySelector('.typed-cursor');
    cursor.style.display = 'none';
  }
})


//News Banner
const items = document.querySelectorAll(".headlines li");
let current = 0;

setInterval(() => {
  const prevItem = items[current];
  prevItem.classList.remove("active");

  current = (current + 1) % items.length;

  prevItem.addEventListener("transitionend", () => {
    items[current].classList.add("active");
  });
}, 3000);

//Knowmore hod sir

function toggleParagraph() {
  var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  var paragraph = document.getElementById("paragraph");
  var text= document.getElementById("Show")
  if (screenWidth >= 600) {
    var halfImage = document.getElementById("halfImage");
    if (paragraph.style.display === "none") {
      paragraph.style.display = "block";
      halfImage.style.backgroundImage = "url('./assests/images/hodsir.jpg')";
      text.innerHTML = "Show Less";

    } else {
      paragraph.style.display = "none";
      halfImage.style.backgroundImage = "url('./assests/images/hod.jpeg')";
      text.innerHTML = "Show More";
    }
  }
  else{
    if (paragraph.style.display === "none") {
      paragraph.style.display = "block";
      text.innerHTML = "Show Less";
    } else {
      paragraph.style.display = "none";
      text.innerHTML = "Show More";
    }
  }
}

