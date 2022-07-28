let productNameInputElement = document.getElementById('product-name');

let remainingCharsElement = document.getElementById('count');
// these two variables ACCESS

let maxAllowedChars = productNameInputElement.maxLength;
// This dynamically assigns the max length allowed that is set in the input element

function updateRemainingChars(event) {
  let enteredText = event.target.value;
  console.log(enteredText);
  let enteredTextLength = enteredText.length;
  console.log(enteredTextLength);

  let remainingCharacters = maxAllowedChars - enteredTextLength;
  console.log(remainingCharacters);

  remainingCharsElement.textContent = remainingCharacters;
  console.log(remainingCharsElement.textContent);
}

productNameInputElement.addEventListener('input', updateRemainingChars);
// input is a method and when anything changes it will run the function updateRemainingChars
