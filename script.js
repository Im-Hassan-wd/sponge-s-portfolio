//global selections
const heroCamera = document.querySelectorAll('.hero-camera');
const heroImages = document.querySelectorAll('.hero-image');
const heroImagesBottom = document.querySelectorAll('.hero-image .bottom');
const selectedEffect = document.querySelectorAll('.selected-project-effect');
const nav = document.querySelector('.nav');
const hamburgerIcon = document.querySelector('.hamburger');
const form = document.querySelector('form');
const topSlider = document.querySelectorAll(".top-slide");
const bottomSlider = document.querySelectorAll(".bottom-slide");
// after effects
const success = document.querySelector('.success');
const successEffect = document.querySelector('.success-json');

// event listeners
hamburgerIcon.addEventListener('click', () => {
    nav.classList.toggle('active');
});

form.addEventListener('submit', e => {
    e.preventDefault();
    success.classList.add('active');
    successEffect.play();
    form.reset();
    setTimeout(() => {
        success.classList.remove('active');
    }, 4000);
});

window.addEventListener("scroll", (e) => {
    slideLeft(e);
});

//functions
function slideLeft(e){
    console.log(window.pageYOffset)
}