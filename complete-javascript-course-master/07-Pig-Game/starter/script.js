'use strict';

let currentPlayer = 1;
let currentScoreP1 = 0;
let currentScoreP2 = 0;
let totalScorep1 = 0;
let totalScorep2 = 0;

document.querySelector('.btn--new').addEventListener('click', newGame);

function newGame() {
  document.getElementById('score--0').textContent = 0;
  document.getElementById('score--1').textContent = 0;
  document.getElementById('current--0').textContent = 0;
  document.getElementById('current--1').textContent = 0;
  currentPlayer = 1;
  currentScoreP1 = 0;
  currentScoreP2 = 0;
  totalScorep1 = 0;
  totalScorep2 = 0;
}

document.querySelector('.btn--roll').addEventListener('click', rollDice);
// document.querySelector('.btn--hold').addEventListener('click,');

function rollDice() {
  if (currentPlayer === 1) {
    playGameP1();
  } else {
    playGameP2();
  }
}

function playGameP1() {
  let diceRoll = Math.trunc(Math.random() * 6 + 1);
  console.log(diceRoll);
  console.log(currentPlayer);
  currentPlayer = 2;
}

function playGameP2() {
  let diceRoll = Math.trunc(Math.random() * 6 + 1);
  console.log(diceRoll);
  console.log(currentPlayer);
  currentPlayer = 1;
}

function scoreCalcP1() {}

function scoreCalcP2() {}
