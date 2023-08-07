let computerChoice = ["rock", "paper", "scissors"];
const selections = document.querySelectorAll(".selection button");
const playerScoreDisplay = document.querySelector("#player-result");
const computerScoreDisplay = document.querySelector("#computer-result");
const runningScoreDisplay = document.querySelector("#running-score");
const containerElement = document.querySelector(".container");
let playerScore = 0;
let computerScore = 0;

let playerSelection;
let computerSelection;

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
  checkResult();
}

function checkResult() {
  if (playerScore === 5 || computerScore === 5) {
    if (playerScore > computerScore) {
      runningScoreDisplay.textContent = "You won 🥳";
      runningScoreDisplay.setAttribute(
        "style",
        "background:green;color:#e0a709;padding:10px;"
      );
    }
    if (playerScore < computerScore) {
      runningScoreDisplay.textContent = "You lost 🙁";
      runningScoreDisplay.setAttribute(
        "style",
        "background:red;color:#59751b;padding:10px;"
      );
    }
    resetGame();
  }
}
function resetGame() {
  //remove event listener after playerScore===5 || computerScore===5
  selections.forEach((selection) => {
    selection.removeEventListener("click", playGame);
  });

  const startGameButton = document.createElement("button");
  startGameButton.textContent = "New game";
  startGameButton.classList.add("start-game-button");
  containerElement.appendChild(startGameButton);

  startGameButton.addEventListener("click", () => {
    playerScore = 0;
    computerScore = 0;
    playerSelection = "";
    computerSelection = "";
    playerScoreDisplay.textContent = 0;
    computerScoreDisplay.textContent = 0;
    runningScoreDisplay.textContent = "";
    runningScoreDisplay.removeAttribute("style");
    startGameButton.classList.remove("start-game-button");
    containerElement.removeChild(startGameButton);
    console.log("you clicked start game");
    console.log(playerScore);
    console.log(computerScore);
    console.log(playerSelection);
    console.log(computerSelection);
    beginGame();
  });
}

function playGame(e) {
  computerSelection = getComputerChoice();
  playerSelection = e.target.id;
  //console.log(`playerSelection is ${playerSelection}`);
  //console.log(`computerSelection is ${computerSelection}`);

  playRound(playerSelection, computerSelection);
}
function beginGame() {
  selections.forEach((selection) =>
    selection.addEventListener("click", playGame)
  );
}
beginGame();
