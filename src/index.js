import anime from 'animejs'

let currentSlide;

// Hide intro

let hideIntro = () => {
  currentSlide = '.details';
  let showDetails = anime.timeline();
  showDetails
  .add({
    targets: '.intro',
    opacity: 0,
    duration: 500,
    easing: 'linear'
  })
  .add({
    targets: '.details',
    translateY: '-100vh',
    duration: 1000,
    easing: 'easeOutElastic',
    offset: 1000
  })
}


// Swap slides
let swapSlides = (slide) => {
  let showHideSlide = anime.timeline();
  showHideSlide
  .add({
    targets: currentSlide,
    translateY: '100vh',
    duration: 1000,
    easing: 'easeOutQuad'
  })
  .add({
    targets: slide,
    translateY: '-200vh',
    duration: 1000,
    easing: 'easeOutElastic'
  });
}


// Navigation binding
const showMore = document.querySelector('.intro__more');
showMore.addEventListener('click', hideIntro, false); 

const showDetailsLinks = document.querySelectorAll('.identifier__details');
const showProjectsLinks = document.querySelectorAll('.identifier__projects');
const showContactLinks = document.querySelectorAll('.identifier__contact');

showDetailsLinks.forEach( (el) => { el.addEventListener('click', () => { swapSlides('.details') }, false); }) 
showProjectsLinks.forEach( (el) => { el.addEventListener('click', () => { swapSlides('.projects') } , false); }) 
showContactLinks.forEach( (el) => { el.addEventListener('click', () => { swapSlides('.contact') }, false); }) 

