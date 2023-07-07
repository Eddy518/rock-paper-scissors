//array called ComputerChoice that will store  rock,paper,scissors
let computerChoice = ["Rock", "Paper", "Scissors"];
//function called getComputerChoice that will return either rock,paper or scissors
function getComputerChoice() {
  console.log(
    computerChoice[Math.floor(Math.random() * computerChoice.length)]
  );
}
getComputerChoice();
