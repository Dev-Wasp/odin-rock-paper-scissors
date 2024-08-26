const btns = document.querySelectorAll("button");
const display = document.querySelector("#display");
const score = document.querySelector("#score");
let humanScore = 0;
let computerScore = 0;

btns.forEach(btn => btn.addEventListener("click", clickHandler));

function clickHandler(e) {
  const computerChoice = getComputerChoice();
  let humanChoice = e.target.id;

  playRound(humanChoice, computerChoice);
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

  changeScore();
}

function changeScore() {
  score.textContent = `Score: ${humanScore} : ${computerScore}`;

  checkForWin();
}

function checkForWin() {
  if (humanScore === 5 || computerScore === 5) {
    btns.forEach(btn => {
      btn.removeEventListener("click", clickHandler);
      btn.remove();
    })
    display.remove();

    const result = document.createElement('p');
    result.textContent = (humanScore === 5) ? "You won!" : "You lost.";
    document.body.appendChild(result);
  }
}