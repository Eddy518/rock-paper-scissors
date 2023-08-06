let computerChoice = ["rock", "paper", "scissors"];

function getComputerChoice() {
  return computerChoice[Math.floor(Math.random() * computerChoice.length)];
}

function playRound(playerSelection, computerSelection) {
  if (computerSelection === playerSelection) {
  } else if (
    (computerSelection === "rock" && playerSelection === "paper") ||
    (computerSelection === "paper" && playerSelection === "scissors") ||
    (computerSelection === "scissors" && playerSelection === "rock")
  ) {
    console.log(`playerScore original: ${playerScore}`);
    playerScore++;
    playerScoreDisplay.textContent = playerScore;
    console.log(`playerScore after: ${playerScore}`);
  } else {
    console.log(`computerScore original: ${computerScore}`);
    computerScore++;
    computerScoreDisplay.textContent = computerScore;
    console.log(`computerScore after: ${computerScore}`);
  }
}

const selections = document.querySelectorAll(".selection button");
const playerScoreDisplay = document.querySelector("#player-result");
const computerScoreDisplay = document.querySelector("#computer-result");
let playerScore = 0;
let computerScore = 0;

let playerSelection;
let computerSelection;
function playGame(e) {
  computerSelection = getComputerChoice();
  playerSelection = e.target.id;
  console.log(`playerSelection is ${playerSelection}`);
  console.log(`computerSelection is ${computerSelection}`);

  playRound(playerSelection, computerSelection);
}

selections.forEach((selection) =>
  selection.addEventListener("click", playGame)
);
