import './sass/main.scss';
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

// Waiting for the user to click

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

// Close intro animation

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
    offset: 10,
    easing: 'easeOutElastic',
  })
  .add({
    targets: '.intro',
    translateY: '-100vh',
    duration: 100,
    easing: 'easeOutElastic',
    complete: () => {
      showMainContent();
    }
  })
};

// Show main content

let showMainContent = () => {
  let showContent = anime.timeline();
  showContent
  .add({
    targets: '.content',
    opacity:0,
    duration: 0
  })
  .add({
    targets: '.content',
    translateY: '-100vh',
    opacity: 1,
    duration: 1200,
    elasticity: 100,
    easing: 'easeOutElastic',
    complete: () => {
      document.querySelector('.intro__background').remove();
    }
  })
}




// Navigation binding
const showMore = document.querySelector('.intro__background');
showMore.addEventListener('click', hideIntro, false); 