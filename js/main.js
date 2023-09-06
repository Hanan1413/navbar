
// get  hamburgerIcon

const hamburgerIcon = document.getElementById("hamburger-icon");

// on click toggle navbar
hamburgerIcon.addEventListener("click", toggleNavBar);

function toggleNavBar() {
    hamburgerIcon.classList.toggle('open');
  }