//array called ComputerChoice that will store  rock,paper,scissors
let computerChoice = ["rock", "paper", "scissors"];
//store scores
let computerScore = 0;
let playerScore = 0;
function getComputerChoice() {
  return computerChoice[Math.floor(Math.random() * computerChoice.length)];
}


function game(){
  
  for (let i=1;i<=5;i++){
    let playerSelection = prompt("Enter Rock, Paper or Scissors: ").toLowerCase();
    computerSelection = getComputerChoice();
    let result = playRound(playerSelection,computerSelection);
    console.log(result);
  }
  if (playerScore > computerScore) {
    console.log("You won in 5 rounds");
  } else if(playerScore<computerScore){
    console.log("You lost in 5 rounds");
  }
  else{
    console.log("Overall is a draw");
  }
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

game();
console.log(playerScore);
console.log(computerScore);