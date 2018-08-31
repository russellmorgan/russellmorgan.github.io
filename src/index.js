import anime from 'animejs'

let moveCircle = () => {
  anime({
    targets: '.more',
    translateY: [
      { value: '-100vh', duration: 1000 }
    ],
    // rotate: '1turn',
    // backgroundColor: '#FFF',
    duration: 2000,
    loop: 1,
    easing: 'easeOutElastic',
    elasticity: 400,
    complete: () => {
      console.log('anim complete');
    }
  });
}

let btn = document.querySelector('.next-section');
btn.addEventListener('click', moveCircle, false);