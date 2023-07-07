//array called ComputerChoice that will store  rock,paper,scissors
let computerChoice = ["Rock", "Paper", "Scissors"];
//function called getComputerChoice that will return either rock,paper or scissors
function getComputerChoice() {
  return computerChoice[Math.floor(Math.random() * computerChoice.length)];
}
//getComputerChoice();
//function to play single round of Rock Paper Scissors
function playRound(playerSelection, computerSelection) {
  let result = "";
  if (computerSelection == "Rock") {
    if (playerSelection == "Scissors") {
      result = "You lost! COM chose Rock";
      return result;
    } else if (playerSelection == "Paper") {
      result = "Good guess you win! COM chose Rock!!";
      return result;
    } else {
      result = "You both selected Rock, the game is a draw!";
      return result;
    }
  }

  if (computerSelection == "Paper") {
    if (playerSelection == "Scissors") {
      result = "Thats a win! COM chose Paper";
      return result;
    } else if (playerSelection == "Rock") {
      result = "You lost ! COM chose Paper";
      return result;
    } else {
      result = "You both selected Paper, the game is a draw!";
      return result;
    }
  }

  if (computerSelection == "Scissors") {
    if (playerSelection == "Rock") {
      result = "Win for you COM chose Scissors";
      return result;
    } else if (playerSelection == "Paper") {
      result = "You lost! COM chose Scissors!!";
      return result;
    } else {
      result = "You both selected Scissors, the game is a draw!";
      return result;
    }
  }
}
//get player input
let playerSelection = prompt("Enter Rock, Paper or Scissors: ");
computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
