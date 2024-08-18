'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;

document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess || guess < 0 || guess > 20) {
    document.querySelector('.message').textContent = 'NO NUMBER!!';
    document.querySelector('body').style.backgroundColor = 'red';
  } else if (score === 0) {
    document.querySelector('body').style.backgroundColor = 'red';
    document.querySelector('.message').textContent = 'You Loose!!';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Guess!!';
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    if (highscore < score) {
      highscore = score;
    }
    document.querySelector('.highscore').textContent = highscore;
  } else if (guess > secretNumber) {
    document.querySelector('.message').textContent = 'Too HIgh';
    score--;
    document.querySelector('.score').textContent = score;
  } else if (guess < secretNumber) {
    document.querySelector('.message').textContent = 'Too Low';
    score--;
    document.querySelector('.score').textContent = score;
  }
});
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = score;
  document.querySelector('.message').textContent = 'Start guessing...';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('body').style.backgroundColor = '#333';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = secretNumber;
});
