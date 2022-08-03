let editedPlayer = 0;

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

const startNewGameElement = document.getElementById('start-btn');
const editPlayer1BtnElement = document.getElementById('player-one-edit');
const editPlayer2BtnElement = document.getElementById('player-two-edit');
const cancelConfigBtnElement = document.getElementById('cancel');

editPlayer1BtnElement.addEventListener('click', openPlayerConfig);
editPlayer2BtnElement.addEventListener('click', openPlayerConfig);
cancelConfigBtnElement.addEventListener('click', closePlayerConfig);
formElement.addEventListener('submit', savePlayerConfig);
startNewGameElement.addEventListener('click', startNewGame);
