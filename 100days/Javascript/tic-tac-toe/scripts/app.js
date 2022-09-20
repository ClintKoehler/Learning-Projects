let editedPlayer = 0;
let activePlayer = 0;

const players = [
  {
    name: '',
    symbol: 'X',
  },
  {
    name: '',
    symbol: 'O',
  },
];

const playerConfigOverlayElement = document.getElementById('config-overlay');
const backdropElement = document.getElementById('backdrop');
const formElement = document.querySelector('form'); // selects first 'form' element
const errorsOutputElement = document.getElementById('config-errors');
const gameAreaElement = document.getElementById('active-game');
const activePlayerNameElement = document.getElementById('active-player-name');

const editPlayer1BtnElement = document.getElementById('edit-player-1-btn');
const editPlayer2BtnElement = document.getElementById('edit-player-2-btn');
const cancelConfigBtnElement = document.getElementById('cancel-config-btn');
const startNewGameBtnElement = document.getElementById('start-game-btn');

//! Below is another way to access the gameboard li
//! Below returns an array of list items
// const gameFieldElements = document.querySelectorAll('#game-board li');
const gameBoardElement = document.getElementById('game-board');

editPlayer1BtnElement.addEventListener('click', openPlayerConfig);
editPlayer2BtnElement.addEventListener('click', openPlayerConfig);
cancelConfigBtnElement.addEventListener('click', closePlayerConfig);
backdropElement.addEventListener('click', closePlayerConfig);
startNewGameBtnElement.addEventListener('click', startNewGame);

formElement.addEventListener('submit', savePlayerConfig);

//! Below is another way to access the gameboard li
// for (const gameFieldElement of gameFieldElements) {
//   gameAreaElement.addEventListener('click', selectGameField);
// }
gameAreaElement.addEventListener('click', selectGameField);
