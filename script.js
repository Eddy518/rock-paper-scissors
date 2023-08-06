let computerChoice = ["rock", "paper", "scissors"];

function getComputerChoice() {
  return computerChoice[Math.floor(Math.random() * computerChoice.length)];
}

let computerSelection = getComputerChoice();
let playerSelection;

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
  let userSelection;
  userSelection = e.target.id;
  console.log(userSelection);
}

selections.forEach((selection) =>
  selection.addEventListener("click", playGame)
);
