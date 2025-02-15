const choices = ["rock", "paper", "scissors"];
let winner2 = [];
let userChoice = "";
let playerScore = 0;
let compScore = 0;
let drawScore = 0;

const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorButton = document.querySelector("#scissors");
const resetButton = document.querySelector(".reset");

resetButton.addEventListener("click", () => resetGame());

function resetGame(){
  document.querySelector(".playerscore-heading").textContent = `Player Score: 0`;
  document.querySelector(".compscore-heading").textContent = `Computer Score: 0`;
  document.querySelector(".drawscore-heading").textContent = `Draw: 0`;
  document.querySelector(".compchose").textContent =`Computer chose: 0`;
  playerScore = 0;
  compScore = 0;
  drawScore = 0;
  playerSelection = "";
  computerSelection = "";
  winner2 = [];
  document.querySelector(".reset").style.display = "none";
}

function updateScore() {
document.querySelector(".playerscore-heading").textContent = `Player Score: ${playerScore}`;
document.querySelector(".compscore-heading").textContent = `Computer Score: ${compScore}`;
document.querySelector(".drawscore-heading").textContent = `Draw: ${drawScore}`;
}

rockButton.addEventListener("click", () => playerChoice("rock"));
paperButton.addEventListener("click", () => playerChoice("paper"));
scissorButton.addEventListener("click", () => playerChoice("scissors"));

function playerChoice(event) {
  userChoice = event;
  playRound();
  // console.log("Player chose: ", userChoice);
}

function playRound() {
  const playerSelection = userChoice;
  const computerSelection = computerChoice();
  document.querySelector(".compchose").textContent =`Computer chose: ${computerSelection}`;
  document.querySelector(".playerchose").textContent =`Player chose: ${playerSelection}`;
  const winner = checkWinner(playerSelection, computerSelection);
  // console.log(winner);
  document.getElementById("result").textContent = winner;
  winner2.push(winner);
  if (winner === "Player Wins!") {
    playerScore++;
  } else if (winner === "Computer Wins!") {
    compScore++;
  } else {
    drawScore++;
  }
  updateScore();
  only5rounds();
}

function computerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
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

function only5rounds(){
  let wins = checkWins();
  if(wins == 5){
    document.querySelector(".reset").style.display = "inline-block";
  }
}

function checkWins(){
  const pWinCount = winner2.filter((item)=> item === "Player Wins!").length;
  const cWinCount = winner2.filter((item) => item === "Computer Wins!").length;
  return Math.max(pWinCount,cWinCount);
}

