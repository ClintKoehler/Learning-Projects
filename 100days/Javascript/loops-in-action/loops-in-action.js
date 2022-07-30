///////////////FOR LOOP//////Sum numbers////////////
////////////////////////////////////////////////////
const calculateSumButtonElement = document.querySelector('#calculator button');

function calculateSum(click) {
  const userNumberInputElement = document.getElementById('user-number');
  const enteredNumber = userNumberInputElement.value;

  let sumUpToNumber = 0;

  for (let i = 0; i <= enteredNumber; i++) {
    sumUpToNumber = sumUpToNumber + i;
  }

  const outputResultElement = document.getElementById('calculated-sum');

  outputResultElement.textContent = sumUpToNumber;
  outputResultElement.style.display = 'block';
}

calculateSumButtonElement.addEventListener('click', calculateSum);
//////////FOR OF LOOP//////HIGHLIGHT LINKS//////////
////////////////////////////////////////////////////
const highlightLinksButtonElement = document.querySelector(
  '#highlight-links button'
);

function highlightLinks(click) {
  const anchorElements = document.querySelectorAll('#highlight-links a'); // querySelectorAll creates an array of elements, the array here is called anchorElements

  for (const anchorElement of anchorElements) {
    anchorElement.classList.add('highlight');
  }
}

highlightLinksButtonElement.addEventListener('click', highlightLinks);
//////////FOR IN LOOP/////DISPLAY USER DATA////////
///////////////////////////////////////////////////
const dummyUserData = {
  firstName: 'Cool',
  lastName: 'Clint',
  age: 42,
};

const displayUserDataButtonElement =
  document.querySelector('#user-data button');

function displayUserData(click) {
  const outputDataElement = document.getElementById('output-user-data');

  outputDataElement.innerHTML = ''; // removes all existing list items if the user clicked multiple times

  for (const key in dummyUserData) {
    const newUserDataListItemElement = document.createElement('li');
    const outputText = key.toUpperCase() + ': ' + dummyUserData[key];
    newUserDataListItemElement.textContent = outputText;
    outputDataElement.append(newUserDataListItemElement);
  }
}

displayUserDataButtonElement.addEventListener('click', displayUserData);
////////////WHILE LOOP/////STATISTICS//////////////
///////////////////////////////////////////////////
const rollDiceButtonElement = document.querySelector('#statistics button');

function rollDice() {
  return Math.floor(Math.random() * 6) + 1; //math floor rounds down to integer from floating point. 5.64 => 5
}

function deriveNumberOfDiceRolls() {
  const targetNumberInputElement =
    document.getElementById('user-target-number');
  const diceRollsListElement = document.getElementById('dice-rolls');

  const enteredNumber = targetNumberInputElement.value;
  diceRollsListElement.innerHTML = '';
  // removes all existing list items if the user clicked multiple times

  let hasRolledTargetNumber = false;
  let numberOfRolls = 0;

  while (!hasRolledTargetNumber) {
    const rolledNumber = rollDice();
    //   if (rolledNumber == enteredNumber)
    //   hasRolledTargetNumber = true;
    // }
    numberOfRolls++;
    const newRollListItemElement = document.createElement('li');
    const outputText = 'Roll ' + numberOfRolls + '; ' + rolledNumber;
    newRollListItemElement.textContent = outputText;
    diceRollsListElement.append(newRollListItemElement);
    hasRolledTargetNumber = rolledNumber == enteredNumber;
  }

  const outputTotalRollsElement = document.getElementById('output-total-rolls');
  const outputTargetNumberElement = document.getElementById(
    'output-target-number'
  );

  outputTargetNumberElement.textContent = enteredNumber;
  outputTotalRollsElement.textContent = numberOfRolls;
}

rollDiceButtonElement.addEventListener('click', deriveNumberOfDiceRolls);
