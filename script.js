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

  return humanChoice;
}

