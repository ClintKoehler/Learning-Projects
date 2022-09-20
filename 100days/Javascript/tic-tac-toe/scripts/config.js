//? sets modal and overaly from hidden to block
function openPlayerConfig(event) {
  //? dataset.playerid knows if p1 or p2 buttons were clicked
  //? + converts string to number
  editedPlayer = +event.target.dataset.playerid;
  playerConfigOverlayElement.style.display = 'block';
  backdropElement.style.display = 'block';
}

//? set modal and overlay to hidden
function closePlayerConfig() {
  playerConfigOverlayElement.style.display = 'none';
  backdropElement.style.display = 'none';
  formElement.firstElementChild.classList.remove('error');
  errorsOutputElement.textContent = '';
  document.getElementById('playername').value = '';
}

//? get the player name and save into a variable using FormData and .get
//? update the player name dynamically
function savePlayerConfig(event) {
  //? preventDefault keeps submit button from sending http
  //? -request causing a page reload
  event.preventDefault();
  //? target is the form html element that caused the event
  const formData = new FormData(event.target);
  const enteredPlayername = formData.get('playername').trim();

  //? Empty string is considered falsey
  //? Could also use enteredPlayername === ''
  if (!enteredPlayername) {
    event.target.firstElementChild.classList.add('error');
    errorsOutputElement.textContent = 'Please enter a valid name!';
    return; //? Will stop function if this code is run
  }

  const updatedPlayerDataElement = document.getElementById(
    'player-' + editedPlayer + '-data'
  );
  //? DOM traversal method below
  updatedPlayerDataElement.children[1].textContent = enteredPlayername;

  players[editedPlayer - 1].name = enteredPlayername;

  closePlayerConfig();
}
