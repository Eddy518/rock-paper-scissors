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
  } else {
  }
}

const selections = document.querySelectorAll(".selection button");

function playGame(e) {
  let computerSelection = getComputerChoice();
  let playerSelection;
  playerSelection = e.target.id;
  console.log(`playerSelection is ${playerSelection}`);
  console.log(`computerSelection is ${computerSelection}`);
}

selections.forEach((selection) =>
  selection.addEventListener("click", playGame)
);
