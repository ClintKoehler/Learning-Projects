//? sets modal and overaly from hidden to block
function openPlayerConfig() {
  playerConfigOverlayElement.style.display = 'block';
  backdropElement.style.display = 'block';
}

//? set modal and overlay to hidden
function closePlayerConfig() {
  playerConfigOverlayElement.style.display = 'none';
  backdropElement.style.display = 'none';
  formElement.firstElementChild.classList.remove('error');
  errorsOutputElement.textContent = '';
}

//? get the player name and save into a const using FormData and .get
//? preventDefault keeps submit button from sending http
//? -request causing a page reload
//? target is the form html element that caused the event
function savePlayerConfig(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const enteredPlayername = formData.get('playername').trim();

  //? Empty string is considered falsey
  //? Could also use enteredPlayername === ''
  if (!enteredPlayername) {
    event.target.firstElementChild.classList.add('error');
    errorsOutputElement.textContent = 'Please enter a valid name!';
    return; //? Will stop function if this code is run
  }
}
