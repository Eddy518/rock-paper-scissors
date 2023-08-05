let computerChoice = ["rock", "paper", "scissors"];

function getComputerChoice() {
  return computerChoice[Math.floor(Math.random() * computerChoice.length)];
}

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
  if (computerSelection === playerSelection) {
    // It's a tie
  } else if (
    (computerSelection === "rock" && playerSelection === "paper") ||
    (computerSelection === "paper" && playerSelection === "scissors") ||
    (computerSelection === "scissors" && playerSelection === "rock")
  ) {
    console.log("player won");
    playerScore++;
    document.getElementById("player").textContent = playerScore;
  } else {
    console.log("player lost");
    computerScore++;
    document.getElementById("computer").textContent = computerScore;
  }
}

//-----------DOM----------------//
let playerSelection = "";
const btn = document.querySelectorAll(".btn");
const getSelected = (e) => {
  playerSelection = e.target.id;
  const computerSelection = getComputerChoice();
  console.log("Player:", playerSelection);
  console.log("Computer:", computerSelection);
  playRound(playerSelection, computerSelection);
};

for (const button of btn) {
  button.addEventListener("click", getSelected);
}
