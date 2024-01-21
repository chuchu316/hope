let tar = document.getElementById("header-content");
let ham = document.getElementById("hamburger");

ham.addEventListener("click", function (event) {
  tar.classList.toggle("header-content_active");
});

// dropdown.js

function toggleDropdown() {
    var dropdown = document.querySelector('.navigation-dropdown');
    dropdown.classList.toggle('active');
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
