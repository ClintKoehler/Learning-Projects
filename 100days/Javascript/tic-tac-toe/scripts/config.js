function openPlayerConfig(event) {
  const selectedPlayerId = event.target.dataset.playerid;
  editedPlayer = +selectedPlayerId; // value of 1 or 2, the + converts to a number
  playerConfigOverlayElement.style.display = 'block';
}

function closePlayerConfig() {
  playerConfigOverlayElement.style.display = 'none';
  document.getElementById('label-name').classList.remove('error');
  document.getElementById('playername').classList.remove('error');
  errorsOutputElement.textContent = '';
  formElement;
  formElement.children[2].value = '';
}

function savePlayerConfig(event) {
  event.preventDefault(); // browser will not submit to server. Page will no longer reload
  const formData = new FormData(event.target); // generate object. target points at <form>
  const enteredPlayerName = formData.get('username').trim();

  if (!enteredPlayerName) {
    // enteredPlayerName === ''
    document.getElementById('label-name').classList.add('error');
    document.getElementById('playername').classList.add('error');
    errorsOutputElement.textContent = 'Please enter a valid name!';
    return; // stops execution if nothing entered
  }

  const updatedPlayerDataElement = document.getElementById(
    'player-' + editedPlayer
  );
  updatedPlayerDataElement.children[1].textContent = enteredPlayerName;

  players[editedPlayer - 1].name = enteredPlayerName;

  closePlayerConfig(); // executes manually due to ()
}
