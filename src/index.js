import anime from 'animejs'

let currentSlide;

// Opening animation

let showIntro = anime.timeline();
showIntro
.add({
  targets: '.intro__background',
  scale: 0,
  duration: 0
})
.add({
  targets: '.intro__background',
  scale: 1,
  duration: 1000,
  offset: 500,
  easing: 'easeOutElastic',
  complete: function() {
    steadyIntroAnim();
  }
})


let steadyIntroAnim = () => {
  let introAnim = anime({
    targets: '.intro__background',
    borderWidth: '50px',
    borderColor: '#e9e9e9',
    duration: 1000,
    loop: true,
    easing: 'linear',
    delay: 2000
  })
}



// Hide intro
let hideIntro = () => {
  let introAnimOut = anime.timeline();
  introAnimOut
  .add({
    targets: '.intro__text',
    opacity: 0,
    duration: 500,
    easing: 'linear'
  })
  .add({
    targets: '.intro__background',
    scale: 0,
    duration: 1000,
    offset: 1000,
    easing: 'easeOutElastic',
    complete: () => {
      //remove intro from DOM, it has served it's purpose
      document.querySelector('.intro').remove();
    }
  })
};


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
const showMore = document.querySelector('.intro__background');
showMore.addEventListener('click', hideIntro, false); 

// const showDetailsLinks = document.querySelectorAll('.identifier__details');
// const showProjectsLinks = document.querySelectorAll('.identifier__projects');
// const showContactLinks = document.querySelectorAll('.identifier__contact');

// showDetailsLinks.forEach( (el) => { el.addEventListener('click', () => { swapSlides('.details') }, false); }) 
// showProjectsLinks.forEach( (el) => { el.addEventListener('click', () => { swapSlides('.projects') } , false); }) 
// showContactLinks.forEach( (el) => { el.addEventListener('click', () => { swapSlides('.contact') }, false); }) 

