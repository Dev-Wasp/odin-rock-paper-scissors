const btns = document.querySelectorAll("button");
const display = document.querySelector("#display");
let humanScore = 0;
let computerScore = 0;

btns.forEach(btn => btn.addEventListener("click", clickHandler));

function clickHandler(e) {
  const computerChoice = getComputerChoice();
  let humanChoice = e.target.id;

  playRound(humanChoice, computerChoice);
}

function playGame() {
  if (humanScore > computerScore) {
    console.log(`You win the game with the score of ${humanScore}:${computerScore}`);
  }
  else if (humanScore < computerScore) {
    console.log(`You lost the game. The score is ${humanScore}:${computerScore}`);
  }
  else {
    console.log(`It is a draw. The score is ${humanScore}:${computerScore}`);
  }
}

function playRound(humanChoice, computerChoice) {
  let message

  if (humanChoice === computerChoice) {
    message = "It's a tie!"
  }
  else if (humanChoice === "rock" && computerChoice === "scissors") {
    message = "You win! Rock beats scissors."

    humanScore++;
  }
  else if (humanChoice === "rock" && computerChoice === "paper") {
    message = "You lose! Paper beats rock."

    computerScore++;
  }
  else if (humanChoice === "paper" && computerChoice === "rock") {
    message = "You win! Paper beats rock."

    humanScore++;
  }
  else if (humanChoice === "paper" && computerChoice === "scissors") {
    message = "You lose! Scissors beat paper."

    computerScore++;
  }
  else if (humanChoice === "scissors" && computerChoice === "paper") {
    message = "You win! Scissors beat paper."

    humanScore++;
  }
  else if (humanChoice === "scissors" && computerChoice === "rock") {
    message = "You lose! Rock beats scissors."

    computerScore++;
  }

  display.textContent = message;
}

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