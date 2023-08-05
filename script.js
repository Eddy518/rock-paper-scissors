let computerChoice = ["rock", "paper", "scissors"];
let userScore = 0;
let computerScore = 0;

function getComputerChoice() {
  return computerChoice[Math.floor(Math.random() * computerChoice.length)];
}

const computerSelection = getComputerChoice();

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

//-----------DOM----------------//
let playerSelection = "";
const btn = document.querySelectorAll(".btn");
const getSelected = (e) => {
  playerSelection = e.target.id;
  console.log(playerSelection);
  console.log(computerSelection);
  playRound();
};
for (const button of btn) {
  button.addEventListener("click", getSelected);
}
