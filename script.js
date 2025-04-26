'use strict';

// select elements
const player0Elem = document.querySelector('.player--0');
const player1Elem = document.querySelector('.player--1');
const score0Elem = document.getElementById('score--0');
const score1Elem = document.getElementById('score--1');
const current0Elem = document.getElementById('current--0');
const current1Elem = document.getElementById('current--1');
const diceElem = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// starting conditions
score0Elem.textContent = 0;
score1Elem.textContent = 0;
diceElem.classList.add('hidden');

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

// rolling dice functionallity
btnRoll.addEventListener('click', function () {
  // generate a random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;

  // display dice
  diceElem.classList.remove('hidden');
  diceElem.src = `dice-${dice}.png`;

  // check for rolled 1
  if (dice !== 1) {
    // add dice to current score
    currentScore += dice;
    // display current score for the active player
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    // switch to next player
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0Elem.classList.toggle('player--active');
    player1Elem.classList.toggle('player--active');
  }
});

// handle “Hold” click: add current score to active player's total, check win condition, and switch turns
btnHold.addEventListener('click', function () {
  // add current score to active player's score
  scores[activePlayer] += currentScore;
  document.getElementById(`score--${activePlayer}`).textContent =
    scores[activePlayer];
  // check if player's score is >= 100
  if (scores[activePlayer] >= 50) {
    // finish game
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add('player--winner');
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.remove('player--active');
  } else {
    // switch to next player
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0Elem.classList.toggle('player--active');
    player1Elem.classList.toggle('player--active');
  }
});
