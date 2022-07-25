let playerScore = 0;
let computerScore = 0;

// compares both choices and declares a winner
function playRound(pValue, cValue) {
  // tie
  if (pValue === cValue) {
    return 'The result is a tie!';
  }

  // rock
  else if (pValue === 'Rock') {
    if (cValue === 'Scissors') {
      playerScore++;
      return 'You win with Rock!';
    } else {
      computerScore++;
      return 'Computer wins with Paper!';
    }
  }

  // paper
  else if (pValue === 'Paper') {
    if (cValue === 'Rock') {
      playerScore++;
      return 'You win with Paper!';
    } else {
      computerScore++;
      return 'Computer wins with Scissors!';
    }
  }

  // scissors
  else if (pValue === 'Scissors') {
    if (cValue === 'Paper') {
      playerScore++;
      return 'You win with Scissors!';
    } else {
      computerScore++;
      return 'Computer wins with Rock!';
    }
  } // else console.log('Please type, rock, paper, or scissors');
}

function game() {
  for (let i = 0; i < 5; i++) {
    // invoke playRound with completed selection arguments
    playerPrompt();
    computerPlay();

    console.log(`You choose: ${playerSelection}`);
    console.log(`Computer plays: ${computerSelection}`);
    console.log(playRound(playerSelection, computerSelection));
    console.log(`Player score: ${playerScore}`);
    console.log(`Computer score: ${computerScore}`);
    if (i == 4) {
      declareWinner();
    }
  }
}

function playerPrompt() {
  playerSelection = prompt('Please choose Rock, Paper, or Scissors: ');
  playerSelection =
    playerSelection.substring(0, 1).toUpperCase() +
    playerSelection.substring(1).toLowerCase();
  return playerSelection;
}

function computerPlay() {
  let randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === 0) {
    computerSelection = 'Rock';
  } else if (randomNumber === 1) {
    computerSelection = 'Scissors';
  } else {
    computerSelection = 'Paper';
  }
}

function declareWinner() {
  if (playerScore > computerScore) {
    console.log(`You are the winner with ${playerScore} points!`);
  } else if (playerScore < computerScore) {
    console.log(`The computer beat you with ${computerScore} points!`);
  } else {
    console.log(`You tied with ${playerScore} points!`);
  }
}

game();
