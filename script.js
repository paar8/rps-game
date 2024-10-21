const choices = ["rock", "paper", "scissors"];

function game() {
  playRound();
}

function playRound() {
  const playerSelection = playerChoice();
  const computerSelection = computerChoice();
  const winner = checkWinner(playerSelection, computerSelection);
  console.log(winner);
  document.getElementById("result").textContent = winner;
}

function playerChoice() {
  let input = prompt("Type Rock, Paper or Scissors:");
  while (input == null) {
    input = prompt("Type Rock, Paper or Scissors:");
  }
  input = input.toLowerCase();
  let validate = validateInput(input);
  while (validate == false) {
    input = prompt(
      "Type Rock, Paper or Scissors. Spelling needs to be exact, Capitalization doesn't matter"
    );
    while (input == null) {
      input = prompt("Type Rock, Paper or Scissors:");
    }
    input = input.toLowerCase();
    validate = validateInput(input);
  }

  return input;
  //   console.log(input);
}

function computerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

function validateInput(choice) {
  if (choices.includes(choice)) {
    return true;
  } else {
    return false;
  }
}

function checkWinner(choiceP, choiceC) {
  if (choiceP === choiceC) return "It's a Draw!";
  else if (
    (choiceP === "rock" && choiceC === "scissors") ||
    (choiceP === "scissors" && choiceC === "paper") ||
    (choiceP === "paper" && choiceC === "rock")
  )
    return "Player Wins!";
  else {
    return "Computer Wins!";
  }
}
