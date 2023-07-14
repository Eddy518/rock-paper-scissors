let computerChoice = ["rock", "paper", "scissors"];
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
  }
  
}



function playRound(playerSelection, computerSelection) {
  
  if (computerSelection === playerSelection) {
      return 'Draw'
  } else if (
    (computerSelection === "rock" && playerSelection === "paper") ||
    (computerSelection === "paper" && playerSelection === "scissors") ||
    (computerSelection === "scissors" && playerSelection === "rock")
  ) {
      playerScore++;
      return 'win'
  } else {
     computerScore++;
     return 'loss';
  }   
} 
game();
