'use strict';

// select elements
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

let currentScore = 0;

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
    current0Elem.textContent = currentScore; // CHANGE LATER
  } else {
    // switch to next player
  }
});
