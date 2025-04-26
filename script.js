'use strict';

// select elements
const score0Elem = document.getElementById('score--0');
const score1Elem = document.getElementById('score--1');
const diceElem = document.querySelector('.dice');

// starting conditions
score0Elem.textContent = 0;
score1Elem.textContent = 0;
diceElem.classList.add('hidden');
