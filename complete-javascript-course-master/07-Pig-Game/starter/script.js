'use strict';

//? THIS IS THE FIRST GAME THAT I CODED THE JS LOGIC COMPLETELY ON MY OWN!

let currentPlayer = 0;
let currentScoreP0 = 0;
let currentScoreP1 = 0;
let totalScoreP0 = 0;
let totalScoreP1 = 0;
let turn = 0;

document.querySelector('.btn--new').addEventListener('click', newGame);
document.querySelector('.btn--roll').addEventListener('click', rollDice);
document.querySelector('.btn--hold').addEventListener('click', hold);

function newGame() {
  document.getElementById('score--0').textContent = 0;
  document.getElementById('score--1').textContent = 0;
  document.getElementById('current--0').textContent = 0;
  document.getElementById('current--1').textContent = 0;
  focusP0();
  currentPlayer = 0;
  currentScoreP0 = 0;
  currentScoreP1 = 0;
  totalScoreP0 = 0;
  totalScoreP1 = 0;
  turn = 1;
}

function rollDice() {
  if (turn === 0) {
    newGame();
  }
  if (currentPlayer === 0) {
    playGameP0();
  } else if (currentPlayer === 1) {
    playGameP1();
  } else return;
}

function playGameP0() {
  let diceRoll = Math.trunc(Math.random() * 6 + 1);
  console.log(diceRoll);
  console.log('player', currentPlayer);
  if (diceRoll === 1) {
    currentScoreP0 = 0;
    focusP1();
    document.getElementById('current--0').textContent = 0;
    currentPlayer = 1;
    return;
  } else {
    currentScoreP0 += diceRoll;
    document.getElementById('current--0').textContent = currentScoreP0;
    if (currentScoreP0 >= 100) player0Wins();
  }
}

function playGameP1() {
  let diceRoll = Math.trunc(Math.random() * 6 + 1);
  console.log(diceRoll);
  console.log('player', currentPlayer);
  if (diceRoll === 1) {
    currentScoreP1 = 0;
    focusP0();
    document.getElementById('current--1').textContent = 0;
    currentPlayer = 0;
    return;
  } else {
    currentScoreP1 += diceRoll;
    document.getElementById('current--1').textContent = currentScoreP1;
    if (currentScoreP1 >= 100) player1Wins();
  }
}

function hold() {
  if (currentPlayer === 0) {
    totalScoreP0 += currentScoreP0;
    currentScoreP0 = 0;
    document.getElementById('current--0').textContent = 0;
    document.getElementById('score--0').textContent = totalScoreP0;
    currentPlayer = 1;
    if (totalScoreP0 < 100) focusP1();
    if (totalScoreP0 >= 100) player0Wins();
  } else if (currentPlayer === 1) {
    totalScoreP1 += currentScoreP1;
    currentScoreP1 = 0;
    if (totalScoreP1 < 100) focusP0();
    if (totalScoreP1 < 100) focusP0();
    document.getElementById('current--1').textContent = 0;
    document.getElementById('score--1').textContent = totalScoreP1;
    currentPlayer = 0;
    if (totalScoreP1 >= 100) player1Wins();
  }
}

function player0Wins() {
  document.getElementById('current--0').textContent = 'YOU WON!';
  document.getElementById('current--1').textContent = 'YOU LOSE!';
  currentPlayer = 2;
  return;
}

function player1Wins() {
  document.getElementById('current--1').textContent = 'YOU WON!';
  document.getElementById('current--0').textContent = 'YOU LOSE!';
  document.querySelectorAll('.current-label').textContent = '';
  currentPlayer = 2;
  return;
}

function focusP0() {
  document.querySelector('.player--1').classList.remove('player--active');
  document.querySelector('.player--0').classList.add('player--active');
}

function focusP1() {
  document.querySelector('.player--0').classList.remove('player--active');
  document.querySelector('.player--1').classList.add('player--active');
}
