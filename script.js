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
    console.log(`player is ${playerSelection}`);
    console.log(`computer is ${computerSelection}`);
  } else {
    console.log(`player is ${playerSelection}`);
    console.log(`computer is ${computerSelection}`);
  }
}

const selections = document.querySelectorAll(".selection button");
let playerScore = document.querySelector("#player-result");
let computerScore = document.querySelector("#computer-result");
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
