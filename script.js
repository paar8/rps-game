const choices = ["rock", "paper", "scissors"];
let winner2 = [];
let userChoice = "";
let playerScore = 0;
let compScore = 0;
let drawScore = 0;
let gameSense = false;

const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorButton = document.querySelector("#scissors");
const resetButton = document.querySelector(".reset");

resetButton.addEventListener("click", () => resetGame());

function resetGame(){
  gameSense = false;
  document.querySelector(".playerscore-heading").textContent = `Player Score: 0`;
  document.querySelector(".compscore-heading").textContent = `Computer Score: 0`;
  document.querySelector(".drawscore-heading").textContent = `Draw: 0`;
  document.querySelector(".compchose").textContent =`Computer chose: 0`;
  document.getElementById("result").textContent = "";
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
  if (gameSense) return;

  const playerSelection = userChoice;
  const computerSelection = computerChoice();
  document.querySelector(".compchose").textContent =`Computer chose: ${computerSelection}`;
  document.querySelector(".playerchose").textContent =`Player chose: ${playerSelection}`;
  const winner = checkWinner(playerSelection, computerSelection);
  // console.log(winner);
  document.getElementById("result").textContent = winner;
  winner2.push(winner);
  if (winner === "You Win!") {
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
    return "You Win!";
  else {
    return "Computer Wins!";
  }
}

function only5rounds(){
  let wins = checkWins();
  if(wins == 5){
    gameSense = true;
    document.querySelector(".reset").style.display = "inline-block";
    if(playerScore === 5){
      document.getElementById("result").textContent = "Comgratulations, You Won!!";
    }
    else{
      document.getElementById("result").textContent = "Computer won the game! Better Luck Next Time!!";
    }
  }
}

function checkWins(){
  const pWinCount = winner2.filter((item)=> item === "You Win!").length;
  const cWinCount = winner2.filter((item) => item === "Computer Wins!").length;
  return Math.max(pWinCount,cWinCount);
}

