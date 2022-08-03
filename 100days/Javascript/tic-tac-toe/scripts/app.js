const gameData = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

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

const playerConfigOverlayElement = document.getElementById('myModal');
const formElement = document.querySelector('form');
const errorsOutputElement = document.getElementById('config-errors');
const playerNameInput = document.getElementById('playername');
const gameAreaElement = document.getElementById('active-game');
const activePlayerNameElement = document.getElementById('active-player-name');

const startNewGameElement = document.getElementById('start-btn');
const editPlayer1BtnElement = document.getElementById('player-one-edit');
const editPlayer2BtnElement = document.getElementById('player-two-edit');
const cancelConfigBtnElement = document.getElementById('cancel');
// const gameFieldElements = document.querySelectorAll('#game-board li');
const gameBoardElement = document.getElementById('game-board');

editPlayer1BtnElement.addEventListener('click', openPlayerConfig);
editPlayer2BtnElement.addEventListener('click', openPlayerConfig);
cancelConfigBtnElement.addEventListener('click', closePlayerConfig);
formElement.addEventListener('submit', savePlayerConfig);
startNewGameElement.addEventListener('click', startNewGame);

// for (const gameFieldElement of gameFieldElements) {
//   gameFieldElement.addEventListener('click', selectGameField);
// }
gameBoardElement.addEventListener('click', selectGameField);
