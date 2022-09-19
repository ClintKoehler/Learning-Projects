//! sets modal and overaly from hidden to block
function openPlayerConfig() {
  playerConfigOverlayElement.style.display = 'block';
  backdropElement.style.display = 'block';
}

//! set modal and overlay to hidden
function closePlayerConfig() {
  playerConfigOverlayElement.style.display = 'none';
  backdropElement.style.display = 'none';
}
