let productNameInputElement = document.getElementById('product-name');

let remainingCharsElement = document.getElementById('count');
// these two variables ACCESS

let maxAllowedChars = productNameInputElement.maxLength;
// This dynamically assigns the max length allowed in the input element

function updateRemainingChars(event) {
  let enteredText = event.target.value;
  let enteredTextLength = enteredText.length;

  let remainingCharacters = maxAllowedChars - enteredTextLength;

  remainingCharsElement.textContent = remainingCharacters;
}

productNameInputElement.addEventListener('input', updateRemainingChars);
// input is a method and when it happens it will run the function updateRmainingChars
