let humanScore = 0;
let computerScore = 0;

let humanChoice = getHumanChoice();
let computerChoice = getComputerChoice();

playRound(humanChoice, computerChoice);

function getComputerChoice() {
  let computerChoice;

  const randomNumber = Math.floor(Math.random() * 3) + 1;

  if (randomNumber === 1) {
    computerChoice = "rock";
  }
  else if (randomNumber === 2) {
    computerChoice = "paper";
  }
  else {
    computerChoice = "scissors";
  }

  return computerChoice;
}

function getHumanChoice() {
  const humanChoice = prompt("Enter your choice (\"rock\", \"paper\", or \"scissors\": ");

  return humanChoice.toLowerCase();
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log("It's a tie!");
  }
  else if (humanChoice === "rock" && computerChoice === "scissors") {
    console.log("You win! Rock beats scissors.");

    humanScore++;
  }
  else if (humanChoice === "rock" && computerChoice === "paper") {
    console.log("You lose! Paper beats rock.");

    computerScore++;
  }
  else if (humanChoice === "paper" && computerChoice === "rock") {
    console.log("You win! Paper beats rock.");

    humanScore++;
  }
  else if (humanChoice === "paper" && computerChoice === "scissors") {
    console.log("You lose! Scissors beat paper.");

    computerScore++;
  }
  else if (humanChoice === "scissors" && computerChoice === "paper") {
    console.log("You win! Scissors beat paper.");

    humanScore++;
  }
  else if (humanChoice === "scissors" && computerChoice === "rock") {
    console.log("You lose! Rock beats scissors.");

    computerScore++;
  }
}