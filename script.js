'use strict';
// console.log(document.querySelector('.message').textContent);

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 13;

// console.log(document.querySelector('.guess').value);

// const funname=function(){

const func = function () {
  let secretnumber = Math.trunc(Math.random() * 20) + 1;
  // console.log(secretnumber);

  document.querySelector('.number').textContent = '?';
  let score = 20;
  let hscore = 0;

  document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess);
    console.log(typeof guess);
    if (!guess)
      document.querySelector('.message').textContent = 'no num entered';
    //if guess is matched
    else if (guess === secretnumber) {
      document.querySelector('.message').textContent = 'correct number';
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
      document.querySelector('.number').textContent = secretnumber;
      if (score > hscore) {
        hscore = score;
        document.querySelector('.highscore').textContent = hscore;
      }
      document.querySelector('.again').addEventListener('click', function () {
        document.querySelector('.score').textContent = 20;
        document.querySelector('body').style.backgroundColor = '#222';
        document.querySelector('.number').style.width = '15rem';
        document.querySelector('.message').textContent = 'start guessing';
        document.querySelector('.number').textContent = '?';
        document.querySelector('.guess').value = '';
        secretnumber = Math.trunc(Math.random() * 20) + 1;
        score = 20;
      });
    } else if (guess != secretnumber && score > 0) {
      document.querySelector('.message').textContent =
        guess > secretnumber ? 'guess is high' : 'guess is low';
      score -= 1;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'you lost the game';
      document.querySelector('.again').addEventListener('click', function () {
        document.querySelector('.score').textContent = 20;
        document.querySelector('body').style.backgroundColor = '#222';
        document.querySelector('.number').style.width = '15rem';
        document.querySelector('.message').textContent = 'start guessing';
        document.querySelector('.number').textContent = '?';
        document.querySelector('.guess').value = '';
        secretnumber = Math.trunc(Math.random() * 20) + 1;
        func();
      });
    }
  });
};
func();

// if guess is too high
// else if (guess > secretnumber) {
//   if (score > 0) {
//     document.querySelector('.message').textContent = 'guess is too high';
//     score -= 1;
//     document.querySelector('.score').textContent = score;
//   } else {
//     document.querySelector('.message').textContent = 'you lost game';
//   }

// }
// if guess is too low
// else if (guess < secretnumber) {
//   if (score > 0) {
//     document.querySelector('.message').textContent = 'guess is too low';
//     score -= 1;
//     document.querySelector('.score').textContent = score;
//   } else {
//     document.querySelector('.message').textContent = 'you lost game';
//   }
// }
// if (document.querySelector('.message').textContent === 'you lost game') {
//   document.querySelector('.again').addEventListener('click', function () {
//     document.querySelector('.score').textContent = 20;
//     document.querySelector('body'), (style.backgroundColor = '#222');
//     document.querySelector('.number'), (style.width = '15rem');
//     document.querySelector('.message').textContent = 'start guessing';
//   });
// }
// });
