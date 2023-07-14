//array called ComputerChoice that will store  rock,paper,scissors
let computerChoice = ["rock", "paper", "scissors"];
//function called getComputerChoice that will return either rock,paper or scissors
function getComputerChoice() {
  return computerChoice[Math.floor(Math.random() * computerChoice.length)];
}
//getComputerChoice();
//function to play single round of Rock Paper Scissors
function playRound(playerSelection, computerSelection) {
  if (computerSelection == playerSelection) {
    return `The game is a draw you${playerSelection} COM ${computerSelection}`;
  } else if (
    (computerSelection == "rock" && playerSelection == "paper") ||
    (computerSelection == "paper" && playerSelection == "scissors") ||
    (computerSelection == "scissors" && playerSelection == "rock")
  ) {
    return `You won! COM: ${computerSelection} vs you: ${playerSelection}`;
  } else {
    return `You lose! COM: ${computerSelection} vs you: ${playerSelection}`;
  }
}


//get player input
let playerSelection = prompt("Enter Rock, Paper or Scissors: ").toLowerCase();
computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));

