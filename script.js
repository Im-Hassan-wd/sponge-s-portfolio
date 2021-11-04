const heroCamera = document.querySelectorAll('.hero-camera');
const heroImages = document.querySelectorAll('.hero-image');
const heroImagesBottom = document.querySelectorAll('.hero-image .bottom');
const selectedEffect = document.querySelectorAll('.selected-project-effect');
const nav = document.querySelector('.nav');
const hamburgerIcon = document.querySelector('.hamburger');
const form = document.querySelector('form');
const success = document.querySelector('.success');
const successEffect = document.querySelector('.success-json');

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
    }, 4000)
});


// glow effect interaction
// const desktop = window.matchMedia("(min-width: 1000px)")

// if(desktop.matches) {

//     selectedEffect.forEach(effect => {
//         const project = effect.parentElement;
//         project.addEventListener('mouseenter', () => {
//             effect.classList.add('glow');
//         });
//         project.addEventListener('mouseleave', () => {
//             effect.classList.remove('glow');
//         });
//     })
// };
