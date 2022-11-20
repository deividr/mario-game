const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const floor = document.querySelector('.floor-container');

function jump() {
  if (mario.classList.contains('jump')) {
    return;
  }

  mario.classList.add('jump');

  setTimeout(() => {
    mario.classList.remove('jump');
  }, 500);
}

document.addEventListener('keydown', (e) => {
  if (e.key === ' ') {
    jump();
  }
});

setInterval(() => {
  const pipePosition = pipe.offsetLeft;
  const marioPosition = +window
    .getComputedStyle(mario)
    .bottom.replace('px', '');

  if (pipePosition <= 230 && pipePosition > 100 && marioPosition < 80) {
    pipe.style.animation = 'none';
    floor.style.animation = 'none';
    mario.style.animation = 'none';

    pipe.style.left = `${pipePosition}px`;
    mario.style.bottom = `${marioPosition}px`;
    mario.src = '/images/game-over.png';
    mario.style.width = '70px';
    mario.style.height = '100px';
    mario.style.marginLeft = '40px';
  }
}, 10);
