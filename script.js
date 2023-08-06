let computerChoice = ["rock", "paper", "scissors"];

function getComputerChoice() {
  return computerChoice[Math.floor(Math.random() * computerChoice.length)];
}

function playRound(playerSelection, computerSelection) {
  if (computerSelection === playerSelection) {
    runningScoreDisplay.textContent = `Draw!! You chose ${playerSelection} and Computer chose ${computerSelection}`;
  } else if (
    (computerSelection === "rock" && playerSelection === "paper") ||
    (computerSelection === "paper" && playerSelection === "scissors") ||
    (computerSelection === "scissors" && playerSelection === "rock")
  ) {
    runningScoreDisplay.textContent = `You win!! You chose ${playerSelection} and Computer chose ${computerSelection}`;
    console.log(`playerScore original: ${playerScore}`);
    playerScore++;
    playerScoreDisplay.textContent = playerScore;
    console.log(`playerScore after: ${playerScore}`);
  } else {
    runningScoreDisplay.textContent = `You lose!! You chose ${playerSelection} and Computer chose ${computerSelection}`;
    console.log(`computerScore original: ${computerScore}`);
    computerScore++;
    computerScoreDisplay.textContent = computerScore;
    console.log(`computerScore after: ${computerScore}`);
  }
}
function getWinner() {
  if (playerScore === 5 || computerScore === 5) {
    console.log(`playerSelection is ${playerSelection}`);
    console.log(`computerSelection is ${computerSelection}`);
    if (playerScore > computerScore) {
      runningScoreDisplay.textContent = "You win the game!!";
    } else {
      runningScoreDisplay.textContent = "You lose the game!!";
    }
  } else {
    playRound(playerSelection, computerSelection);
  }
}
const selections = document.querySelectorAll(".selection button");
const playerScoreDisplay = document.querySelector("#player-result");
const computerScoreDisplay = document.querySelector("#computer-result");
const runningScoreDisplay = document.querySelector("#running-score");
let playerScore = 0;
let computerScore = 0;

let playerSelection;
let computerSelection;
function playGame(e) {
  computerSelection = getComputerChoice();
  playerSelection = e.target.id;
  //console.log(`playerSelection is ${playerSelection}`);
  //console.log(`computerSelection is ${computerSelection}`);

  getWinner();
}

selections.forEach((selection) =>
  selection.addEventListener("click", playGame)
);
