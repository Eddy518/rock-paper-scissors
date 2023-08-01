//array called ComputerChoice that will store  rock,paper,scissors
let computerChoice = ["rock", "paper", "scissors"];
//store scores
let computerScore = 0;
let playerScore = 0;
function getComputerChoice() {
  return computerChoice[Math.floor(Math.random() * computerChoice.length)];
}

function playRound(playerSelection, computerSelection) {
  if (computerSelection === playerSelection) {
    return `The game is a draw you: ${playerSelection} COM: ${computerSelection}`;
  } else if (
    (computerSelection === "rock" && playerSelection === "paper") ||
    (computerSelection === "paper" && playerSelection === "scissors") ||
    (computerSelection === "scissors" && playerSelection === "rock")
  ) {
    playerScore++;
    return `You won! COM: ${computerSelection} vs you: ${playerSelection}`;
  } else {
    computerScore++;
    return `You lose! COM: ${computerSelection} vs you: ${playerSelection}`;
  }
}

console.log(playerScore);
console.log(computerScore);

//-----------DOM----------------//
const btn = document.querySelectorAll(".btn");
btn.forEach((button) => {
  button.addEventListener("click", () => {
    alert("Hello");
  });
});
