// const spanElement = document.getElementById('count');

// spanElement.classList.add('warning');
// classList.add appends a class onto any that are already existing. className would replace it

const productNameInputElement = document.getElementById('product-name');

const remainingCharsElement = document.getElementById('count');
// these two variables ACCESS
const maxAllowedChars = productNameInputElement.maxLength;
// This dynamically assigns the max length allowed that is set in the input element

function updateRemainingChars(event) {
  const enteredText = event.target.value;
  // console.log(enteredText); ==> letters entered
  const enteredTextLength = enteredText.length;
  // console.log(enteredTextLength); ==> amount  of letters entered

  const remainingCharacters = maxAllowedChars - enteredTextLength;
  // console.log(remainingCharacters); ==> 60 minus the amount of characters entered

  remainingCharsElement.textContent = remainingCharacters;
  // console.log(remainingCharsElement.textContent); ==> assigns the value of remainingCharacters to the html count id element
}

productNameInputElement.addEventListener('input', updateRemainingChars);
// input is a method and when anything changes it will run the function updateRemainingChars
